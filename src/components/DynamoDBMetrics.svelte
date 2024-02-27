<script>
    import { onMount } from 'svelte';
  
    let metrics = {
      readCapacityUnits: 0,
      writeCapacityUnits: 0,
      readThrottleEvents: 0,
      writeThrottleEvents: 0,
      // Add more metrics as needed
    };
  
    onMount(async () => {
      const response = await fetch('/api/metrics/dynamodb');
      const data = await response.json();
      metrics = data;
    });
  </script>
  
  <style>
    .metrics-container {
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    .metric {
      margin: 10px 0;
    }
  </style>
  
  <div class="metrics-container">
    <h2>DynamoDB Metrics</h2>
    <div class="metric">Read Capacity Units: {metrics.readCapacityUnits}</div>
    <div class="metric">Write Capacity Units: {metrics.writeCapacityUnits}</div>
    <div class="metric">Read Throttle Events: {metrics.readThrottleEvents}</div>
    <div class="metric">Write Throttle Events: {metrics.writeThrottleEvents}</div>
    <!-- Display more metrics as needed -->
  </div>
  