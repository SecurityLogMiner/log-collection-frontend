<script>
    import Sidebar from '$lib/sidebar.svelte';
  </script>
  
  <style>
    .container {
      display: flex;
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

  
  :global(body) {
    background-color: #d3d3d3; 
  }


  </style>
  
  <div class="container">
    <Sidebar />
    <main class="content">
      <h1>Welcome to Your Dashboard</h1>
    
      <div class="widgets-container">
        <div class="flexbox">Flexbox Section 1</div>
        <div class="flexbox">Flexbox Section 2</div>
        <div class="flexbox">Flexbox Section 3</div>
        <div class="flexbox">Flexbox Section 4</div>
        <div class="flexbox flexbox-stretched">Flexbox Section 5</div>
      </div>

    </main>
  </div>

  