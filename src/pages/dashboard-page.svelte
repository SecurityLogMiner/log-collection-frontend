
<script>
	import DashboardContents from './../components/dashboard-contents.svelte';
  import PageLayout from "../components/page-layout.svelte";
  import { useAuth0 } from "../services/auth0";
  import Wip from "../components/wip.svelte";


  const { user, isAuthenticated } = useAuth0;
</script>



{#if $isAuthenticated && $user}
  <PageLayout>
    <DashboardContents/>
    <Wip/>
  </PageLayout>
{/if}




  