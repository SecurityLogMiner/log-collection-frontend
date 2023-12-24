<script>
    import DashboardContent from "./dashboard-content.svelte";
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
    </div>
  </div>
  