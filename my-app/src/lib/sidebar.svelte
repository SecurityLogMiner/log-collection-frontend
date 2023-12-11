<script>
    const sidebarItems = [
      {
        name: "Home",
        url: "/home"
      },
      {
        name: "Account",
        url: "/dashboard"
      },
      {
        name: "Certificates",
        url: "/dashboard"
      },
      {
        name: "Downloads",
        url: "/dashboard"
      },
      {
        name: "OTP",
        url: "/OTP"
      },
      {
        name: "About",
        url: "/About"
      },
    
    ];

  import { onMount } from 'svelte';

  let isExpanded = false;

  onMount(() => {
    // Add event listeners or any other initialization logic here
  });

  function toggleNavbar() {
    isExpanded = !isExpanded;
  }
  </script>
  
  <style>
    .sidebar {
      width: 150px;
      background: #352e2e;
      height: 100vh;
      padding: 1rem;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
      border-radius: 15px; 
      overflow: hidden; 
    }

    ul {
      list-style-type: none; 
      padding: 0;
      margin: 0; 
    }

    .sidebar-item {
      display: flex;
      align-items: center;
      padding: 0.5rem 0;
      color: white;
      text-decoration: none;
      cursor: pointer;
    }
    
    .sidebar-item:hover {
      background-color: silver;
    }
    /* .icon {
      margin-right: 1rem;
    } */
  </style>
  
  <aside class="sidebar">
    <ul>
      {#each sidebarItems as item}
        <li>
          <a class="sidebar-item" href="{item.url}">
            <!-- <span class="icon">{item.icon}</span> -->
            {item.name}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
  
  