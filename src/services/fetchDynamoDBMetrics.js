const AWS = require('aws-sdk');
require('dotenv').config();

// Access environment variables directly within the function
const awsRegion = process.env.AWS_REGION;
const tableName = process.env.TABLE_NAME;

// Now that awsRegion is defined, you can use it to configure AWS
AWS.config.update({ region: awsRegion });

const cloudwatch = new AWS.CloudWatch();

export async function fetchMetrics() {
  const endTime = new Date();
  const startTime = new Date(endTime.getTime() - 3600000); // Last 1 hour

  const params = {
    EndTime: endTime,
    StartTime: startTime,
    MetricDataQueries: [
      {
        Id: 'readCapacityUnits',
        MetricStat: {
          Metric: {
            Namespace: 'AWS/DynamoDB',
            MetricName: 'ConsumedReadCapacityUnits',
            Dimensions: [
              {
                Name: 'TableName',
                Value: tableName // Now correctly references the tableName variable
              }
            ]
          },
          Period: 300,
          Stat: 'Sum',
        }
      },
      {
        Id: 'writeCapacityUnits',
        MetricStat: {
          Metric: {
            Namespace: 'AWS/DynamoDB',
            MetricName: 'ConsumedWriteCapacityUnits',
            Dimensions: [
              {
                Name: 'TableName',
                Value: tableName // Now correctly references the tableName variable
              }
            ]
          },
          Period: 300,
          Stat: 'Sum',
        }
      }
      // Add more metrics as needed
    ],
    ScanBy: 'TimestampDescending'
  };

  try {
    const data = await cloudwatch.getMetricData(params).promise();
    console.log('Metrics fetched successfully:', data);
    // Process the data into the expected format
    const formattedMetrics = {
      readCapacityUnits: 0,
      writeCapacityUnits: 0,
      readThrottleEvents: 0,
      writeThrottleEvents: 0,
    };

    // Process and aggregate metrics
    data.MetricDataResults.forEach(metric => {
      if (metric.Id === 'readCapacityUnits' && metric.Values.length > 0) {
        formattedMetrics.readCapacityUnits = metric.Values.reduce((a, b) => a + b, 0);
      }
      // Add similar processing for other metrics
    });

    return formattedMetrics;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error;
  }
}

module.exports = { fetchMetrics }; // Export for use in a serverless function or backend endpoint
