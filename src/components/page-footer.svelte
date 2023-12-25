<script>
  import PageFooterHyperlink from "./page-footer-hyperlink.svelte";

  const resourceList = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Why Auth0",
    },
    {
      path: "https://auth0.com/docs/get-started",
<<<<<<< HEAD
      label: "How It Works",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Developer Blog",
    },
    {
      path: "https://auth0.com/contact-us",
      label: "Contact an Expert",
    },
=======
      label: "How Auth0 Works",
    },
    {
      path: "https://github.com/SecurityLogMiner",
      label: "GitHub",
    },
    {
      path: "https://securitylogminer-doc-repo.readthedocs.io/",
      label: "Documentation",
    },

>>>>>>> 904d288ed7c5fd27ee2b2abf22f22a6972a58d26
  ];
</script>

<footer class="page-footer">
  <div class="page-footer-grid">
    <div class="page-footer-grid__info">
      <div class="page-footer-info__message">
        <p class="page-footer-message__headline">
          <span>This sample application is brought to you by&nbsp;</span
          ><PageFooterHyperlink path="https://auth0.com/"
            >Auth0</PageFooterHyperlink
          >
        </p>
        <p class="page-footer-message__description">
<<<<<<< HEAD
          <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/"
            ><span>
              Securely implement authentication using Auth0 on any stack and any
              device&nbsp;</span
            ><u>in less than 10 minutes</u></PageFooterHyperlink
          >
=======

>>>>>>> 904d288ed7c5fd27ee2b2abf22f22a6972a58d26
        </p>
      </div>
      <div class="page-footer-info__button">
        <a
          id="create-account-button"
          class="button button--secondary"
          href="https://auth0.com/signup"
          target="_blank"
          rel="noreferrer noopener"
        >
          Create Free Auth0 Account
        </a>
      </div>
      <div class="page-footer-info__resource-list">
        {#each resourceList as resource (resource.path)}
          <div class="page-footer-info__resource-list-item">
            <PageFooterHyperlink path={resource.path}>
              {resource.label}
            </PageFooterHyperlink>
          </div>
        {/each}
      </div>
    </div>
<<<<<<< HEAD
    <div class="page-footer-grid__brand">
=======

    <!-- Commenting just in case we want a logo -->
    <!-- <div class="page-footer-grid__brand">
>>>>>>> 904d288ed7c5fd27ee2b2abf22f22a6972a58d26
      <div class="page-footer-brand">
        <img
          class="page-footer-brand__logo"
          src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
          alt="Auth0"
          width="20"
          height="22.22"
        />
        <PageFooterHyperlink path="https://auth0.com/"
          >Auth0 Inc</PageFooterHyperlink
        >
      </div>
<<<<<<< HEAD
    </div>
=======
    </div> -->
>>>>>>> 904d288ed7c5fd27ee2b2abf22f22a6972a58d26
  </div>
</footer>
