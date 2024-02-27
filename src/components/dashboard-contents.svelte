<script>
  import { onMount } from "svelte";
  import { exampleLogs } from "../services/log-service"; // Import example logs
  import FilterPanel from "./filter-panel.svelte";
  import SearchBar from "./search-bar.svelte";
  import LogList from "./log-list.svelte"; // Assuming you have a LogList component

  let logs = [];
  let searchTerm = '';
  let filters = [];
  let categories = []; // List of available categories
  let selectedCategory = ''; // Selected category

  // Fetch logs when the component mounts
  onMount(() => {
    logs = exampleLogs;

    // Assuming you have a function to get available categories
    // Adjust this based on your actual data structure
    getAvailableCategories();
  });

  const updateLogs = (newFilters, newSearchTerm) => {
    filters = newFilters;
    searchTerm = newSearchTerm;

    // Apply search term, filters, and selected category
    logs = exampleLogs.filter(log =>
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.length === 0 || filters.some(filter => filter.checked && filter.name === log.level)) &&
      (selectedCategory === '' || selectedCategory === 'All categories' || selectedCategory === log.category)
    );
  };

  const getAvailableCategories = () => {
    // Assuming you have a function to get available categories
    // Adjust this based on your actual data structure
    // For example purposes, let's assume your logs have a 'category' property
    categories = [...new Set(exampleLogs.map(log => log.category))];
    categories = ['All categories', ...categories];
  };
</script>

<div class="dashboard-contents">
  <h2 class="dashboard-contents__title">Account Dashboard</h2>

  <!-- Search Bar Component -->
  <SearchBar bind:value={searchTerm} />

  <!-- Filter Panel Component -->
  <FilterPanel bind:filters={filters} on:filter={updateLogs} />

  <!-- Category Selection Dropdown -->
  <section class="menu-cont">
    <select class="menu" name="menu" id="menu" bind:value={selectedCategory}>
      <option disabled selected value="">Select a category.</option>
      {#each categories as category}
        <option value={category}>{category}</option>
      {/each}
    </select>
  </section>

  <!-- Log List Component -->
  <LogList {logs} />
</div>

<style>
  .dashboard-contents {
    margin: 10px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .menu-cont {
    width: 40%;
    display: flex;
    margin: 0 10px 0 0;
  }

  select {
    margin: 0;
    font-size: 1.18rem;
    border: 1px solid gray;
    border-radius: 5px;
  }

  .menu {
    width: 100%;
  }
</style>