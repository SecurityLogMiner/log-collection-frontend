<script>
    import Sidebar from '$lib/sidebar.svelte';
    import Wip from '$lib/wip.svelte';

    export let appName = 'Log Collection Service';

    let description = `
    Welcome to ${appName}!
    Feel free to read about us!`;

    let githubLink = 'https://github.com/SecurityLogMiner';
    let documentationLink = 'https://securitylogminer-doc-repo.readthedocs.io/'; 
</script>

<div class="container">
    <Sidebar/>
    <main class="content">
        <h1>About {appName}</h1>
        <p>{description}</p>

        <div class="sections">
            <div class="section">
                <h2 class="section-title">GitHub Repository</h2>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" class="link">Visit GitHub</a>
            </div>

            <div class="section">
                <h2 class="section-title">Documentation</h2>
                <a href={documentationLink} class="link">View Documentation</a>
            </div>
        </div>
    </main>
    <Wip/>
</div>


<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #333;
    }

    div {
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    p {
        color: #555;
        margin-bottom: 1rem;
    }

    .container {
        display: flex;
        /* font-family: 'Forum', sans-serif; */
    }

    .content {
        flex-grow: 1;
        padding: 20px;
    }

    .sections {
        display: flex;
        justify-content: space-between; /* Adjust as needed */
        margin: 0 auto;
        
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1.5rem;
        padding: 10px 0;
        margin: 20px;
    }

    .section-title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: rgb(14, 12, 12);
    }

    .link {
        color: #2391bd;
        text-decoration: none;
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .link:hover {
        color: #01c0ff;
    }
</style>
