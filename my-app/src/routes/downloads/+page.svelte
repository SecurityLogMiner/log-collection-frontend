<script>
    import Sidebar from '$lib/sidebar.svelte';
    import Download from '$lib/download.svelte';
  </script>
  
  <!-- <style>

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


  </style> -->
  
  <div class="container">
    <Sidebar />
    <main class="content">
        <a href="/certs/cert.pem" download>Download Certificate</a>

    
      

    </main>
  </div>
