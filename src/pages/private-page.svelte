<script>
  import { onMount } from "svelte";
  import CodeSnippet from "../components/code-snippet.svelte";
  import PageLayout from "../components/page-layout.svelte";
  import { getPrivateResource, message } from "../services/message.service";

  onMount(() => {
    getPrivateResource();
  });
</script>

<PageLayout>
  <div class="content-layout">
    <h1 id="page-title" class="content__title">Private Page</h1>
    <div class="content__body">
      <p id="page-description">
        <span>
          This page retrieves a <strong>private message</strong> from an external
          API.
        </span>
        <span>
          <strong>Only authenticated users can access this page.</strong>
        </span>
      </p>
      <CodeSnippet title="Private Message" code={$message} />
    </div>
  </div>
</PageLayout>
