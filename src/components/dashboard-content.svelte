<script>
    export let title;
    export let description;
    export let resourceUrl;
    // export let icon;
  </script>
  
  <a
    href={resourceUrl}
    class="dashboard-content"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 class="dashboard-content">
      {title}
    </h3>
    <p class="dashboard-content__description">{description}</p>
  </a>
  