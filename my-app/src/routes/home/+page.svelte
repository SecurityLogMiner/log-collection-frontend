<script>
    // Home page script
    import Sidebar from '$lib/sidebar.svelte';
    import Wip from '$lib/wip.svelte';

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
    
      <h1>Welcome to the Home Page</h1>

    </main>
    <Wip/>
  </div>


  