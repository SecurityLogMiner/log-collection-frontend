<script>
  import { useAuth0 } from "../../../services/auth0";
  import NavBarTab from "./nav-bar-tab.svelte";

  let { isAuthenticated } = useAuth0;
</script>

<div class="nav-bar__tabs">
  <NavBarTab path="/profile" label="Profile" />
  <NavBarTab path="/public" label="Public" />
<<<<<<< HEAD
  <NavBarTab path="/dashboard" label="Dashboard" />
=======
<<<<<<< HEAD
=======
  <NavBarTab path="/dashboard" label="Dashboard" />
>>>>>>> 904d288ed7c5fd27ee2b2abf22f22a6972a58d26
>>>>>>> origin/development
  {#if $isAuthenticated}
    <NavBarTab path="/protected" label="Protected" />
    <NavBarTab path="/admin" label="Admin" />
  {/if}
</div>
