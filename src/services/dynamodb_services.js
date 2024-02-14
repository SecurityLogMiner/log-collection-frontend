// src/services/dynamodbService.js
export async function fetchDynamoDBMetrics() {
    try {
        const response = await fetch('/api/dynamodb-metrics');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    } catch (error) {
        console.error("Could not fetch DynamoDB metrics:", error);
        throw error;
    }
}
