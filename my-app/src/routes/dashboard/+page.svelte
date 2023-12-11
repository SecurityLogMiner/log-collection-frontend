<script>
    import Sidebar from '$lib/sidebar.svelte';
    import Wip from '$lib/wip.svelte';
    import Graph from '$lib/graph.svelte';

  </script>
  
  <style>

  /* @font-face {
    font-family: 'Forum';
    src: url('static/fonts/Forum-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    } */

    .container {
      display: flex;
      /* font-family: 'Forum', sans-serif; */
    }
  
    .content {
      flex-grow: 1;
      padding: 20px;
    }

    .widgets-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  /* cuboid */
  .flexbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: #f8f4f4;
    border: 1px solid #ccc;
    padding: 20px;
    flex-basis: calc(50% - 20px); 
    box-sizing: border-box; 
    border-radius: 15px; 
    overflow: hidden; 
  }
  

  .flexbox-stretched {
    flex-basis: 100%;
    box-sizing: border-box;
  }

  .flexbox-text {
    /* Text styling, like font size, color, etc. */
    font-size: 1rem;
    color: #333;
    /* Additional properties for positioning if needed */
    margin: 0; /* Remove default margins */
    align-self: flex-start; /* Align this specific item to the top if other items are added */
  }

  
  :global(body) {
    background-color: #d3d3d3; 
  }

  .graph {
        flex: 1;
        min-width: 300px; 
        margin: 10px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background: white;
    }


  </style>
  
  <div class="container">
    <Sidebar />
    <main class="content">
      <h1>Account Dashboard</h1>
    
      <div class="widgets-container">
        <div class="flexbox"> <p class="flexbox-text">[View Existing Log Trends]</p></div>
        <div class="flexbox"><p class="flexbox-text">[Errors Or Warnings, with timestamps and host IPs]</p></div>
        <div class="flexbox"><p class="flexbox-text">[Certificate Status]</p></div>
        <div class="flexbox"><p class="flexbox-text">[Saved Logs (Or maybe Saved Past Searches)]</p></div>
        <div class="flexbox flexbox-stretched"><p class="flexbox-text"></p></div>
      </div>

    </main>
    <Wip/>
  </div>

  