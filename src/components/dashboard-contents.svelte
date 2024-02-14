<script>
    import { onMount } from 'svelte';
    import DashboardContent from "./dashboard-content.svelte";

    let metricsData = [];

    onMount(async () => {
    try {
      metricsData = await fetchDynamoDBMetrics();
      isLoading = false;
    } catch (error) {
      console.error('Failed to load DynamoDB metrics:', error);
      // Handle error state appropriately
      isLoading = false;
    }
});
  </script>
  
  <div class="dashboard-contents">
    <h2 class="dashboard-contents__title">Account Dashboard</h2>
    <div class="dashboard-contents__grid">
      <DashboardContent
        title="Temporary"
        description="This is a temporary description"
        resourceUrl=""
      />
      <DashboardContent
        title="Logs"
        description="Place more information here"
        resourceUrl=""
      />
      <DashboardContent
        title="More stuff?"
        description="A description of more stuff"
        resourceUrl=""
      />
      <DashboardContent
        title="Server"
        description="Server information here"
        resourceUrl=""
      />
      <!-- Dynamically added content based on metrics data -->
      {#each metricsData as metric}
        <DashboardContent
          title={metric.name}
          description={`Value: ${metric.value}`}
          resourceUrl=""  
        />
      {/each}
    </div>
  </div>
  