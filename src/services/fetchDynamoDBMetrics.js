const AWS = require('aws-sdk');
require('dotenv').config();

const awsRegion = process.env.AWS_REGION;
const tableName = process.env.TABLE_NAME;


const cloudwatch = new AWS.CloudWatch();

async function fetchDynamoDBMetrics(tableName) {
  const endTime = new Date();
  const startTime = new Date(endTime);
  startTime.setHours(endTime.getHours() - 1); // Last 1 hour

  const params = {
    EndTime: endTime,
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
    StartTime: startTime,
    ScanBy: 'TimestampDescending'
  };

  try {
    const data = await cloudwatch.getMetricData(params).promise();
    console.log('Metrics fetched successfully:', data);
    return data; // Process or return the fetched data as needed
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error; // Handle errors as needed
  }
}

// Example usage
fetchDynamoDBMetrics(tableName)
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(error => console.error(error));
