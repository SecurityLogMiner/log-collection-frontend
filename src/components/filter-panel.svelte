<script>
    import { createEventDispatcher } from "svelte";
  
    let filters = [
      { name: 'info', checked: true },
      { name: 'warning', checked: true },
      { name: 'error', checked: true }
    ];
  
    const dispatch = createEventDispatcher();
  
    const handleFilter = (filter) => {
      filter.checked = !filter.checked;
      dispatch("filter", filters);
    };
  </script>
  
  <div class="filter-panel">
    <h3>Filter Panel</h3>
    {#each filters as { name, checked }}
      <label>
        <input type="checkbox" bind:checked={checked} on:change={() => handleFilter({ name, checked })} />
        {name}
      </label>
    {/each}
  </div>
  
  <style>
    .filter-panel {
      margin-bottom: 20px;
    }
  
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  
    label {
      display: block;
      margin-bottom: 8px;
    }
  </style>
  