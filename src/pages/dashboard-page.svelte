<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>

<script>
  // import Sidebar from '$lib/sidebar.svelte';
  import Wip from "../components/wip.svelte";
  // import Time from '$lib/time.svelte';

  let searchTerm = '';

  function handleSearch() {
  // Implement your search logic here
    console.log('Searching for:', searchTerm);
  }
  </script>
  

  
  <div class="container">
    <!-- <Sidebar /> -->
    <main class="content">
      <div class = "title">
        <h1>Account Dashboard</h1>
        <!-- <Time/> -->

      </div>
      <div class="search-bar">
        <input
          type="text"
          class="search-input"
          placeholder="Search..."
          bind:value={searchTerm}
        />
        <button on:click={handleSearch} class="search-button">
          <i class="mi mi-search"><span class="u-sr-only"></span></i>
        </button>
      </div>
      <div class="widgets-container">
        <div class="flexbox"> <p class="flexbox-text">View Log Sources</p></div>
        <div class="flexbox"><p class="flexbox-text">Temporary</p></div>
        <div class="flexbox"><p class="flexbox-text">Placement</p></div>
        <div class="flexbox"><p class="flexbox-text">Of</p></div>
        <div class="flexbox flexbox-stretched"><p class="flexbox-text">Flexboxes</p></div>
      </div>

    </main>
    <Wip/>
  </div>

  <style>

.search-bar {

    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }

  .search-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }

  .search-button {
    padding: 10px;
    border: none;
    background-color: #4caf50;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .search-button:hover {
    background-color: black;
  }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }

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


  </style>

  