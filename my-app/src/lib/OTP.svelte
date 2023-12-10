<script>
    let otp  = '';
    import Sidebar from '$lib/sidebar.svelte';

    function generateOTP() {
        // Generate a random 6 digit OTP
        otp = Math.floor(100000 + Math.random() * 900000).toString();
    }

    async function copyToClipboard() {
        try {
        await navigator.clipboard.writeText(otp);
        console.log('Password copied to clipboard');
        } catch (err) {
        console.error('Unable to copy password to clipboard', err);
        }
  }

</script>



<div class="container">
    <Sidebar />
    <main class="content">
            
      <h1>One Time Password</h1>
      <button on:click={generateOTP}>Generate OTP</button>
      {#if otp}
      <div>
        <p>Your One-Time Password (OTP): {otp}</p>
        <button on:click={copyToClipboard}>Copy Password</button>
        <p>Use this OTP for authentication.</p>
      </div>
    {:else}
      <p>Click the button to generate a One-Time Password (OTP).</p>
    {/if}
  

    </main>
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

    button {
    background-color: #4caf50;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

    button:hover {
    background-color: #45a049;
  }

  </style>