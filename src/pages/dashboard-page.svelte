<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>

<script>
  // import Sidebar from '$lib/sidebar.svelte';
  import Wip from "../components/wip.svelte";
  import PageLayout from "../components/page-layout.svelte";
  import DashboardContents from '../components/dashboard-contents.svelte';

  // import Time from '$lib/time.svelte';

  </script>
  
<PageLayout>

<DashboardContents/>
  <Wip/>
</PageLayout>



  