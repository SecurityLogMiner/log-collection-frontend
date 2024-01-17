<script>
    export let logs = []; // Prop to receive logs from the parent component
  </script>
  
  <div class="log-list">
    <h2>Log List</h2>
    <ul>
      {#each logs as log (log.id)}
        <li>
          <strong>{log.level}:</strong> {log.message}
        </li>
      {/each}
    </ul>
  </div>
  
  <style>
    .log-list {
      margin-bottom: 20px;
    }
  
    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  
    ul {
      list-style: none;
      padding: 0;
    }
  
    li {
      margin-bottom: 8px;
    }
  </style>
  