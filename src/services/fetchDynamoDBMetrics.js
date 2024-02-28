const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  region: process.env.AWS_REGION,
});

const cloudwatch = new AWS.CloudWatch();

async function fetchMetrics() {
  const tableName = process.env.TABLE_NAME; // Use environment variable directly inside the function
  const endTime = new Date();
  const startTime = new Date(endTime.getTime() - 60 * 60 * 1000); // Last 1 hour

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
                Value: tableName
              }
            ]
          },
          Period: 300, // 5 minutes in seconds
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
                Value: tableName
              }
            ]
          },
          Period: 300, // 5 minutes in seconds
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
    return data.MetricDataResults; // Adjusted to return the actual results
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error;
  }
}

module.exports = { fetchMetrics }; // Export for use in a serverless function or backend endpoint
