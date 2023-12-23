<script>
    import Sidebar from '$lib/sidebar.svelte';
    import Download from '$lib/download.svelte';
  </script>
  
  <style>

  

    .container {
      display: flex;
      /* font-family: 'Forum', sans-serif; */
    }
  
    .content {
      flex-grow: 1;
      padding: 20px;
    }

    
    </style> 
  
  <div class="container">
    <Sidebar />
    <main class="content">
        <a href="/public/certs/cert.pem" download>Download Certificate</a>

    
      

    </main>
  </div>
