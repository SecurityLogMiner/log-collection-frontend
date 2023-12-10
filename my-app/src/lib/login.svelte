<script>

    import { goto } from '$app/navigation';
    let username = '';
    let password = '';
  
    const handleSubmit = async () => {
    // login logic

    // navigate to homepage
    goto('/home');
  };

  </script>

<div class = "logo-banner">
  <h2> Log Collection Service</h2>
</div>

  <div class="login-container">
    <form class="login-form" on:submit|preventDefault={handleSubmit}>
      <h2>Login</h2>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" bind:value={username}>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password}>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>



  <style>

    .logo-banner {
      justify-content: center;
      align-items: center;
      display: flex;
      padding: 20px;
      border-radius: 4px;
      margin: auto;
    }
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  
    .login-form {
      display: flex;
      flex-direction: column;
      width: 300px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .input-group {
      margin-bottom: 15px;
    }
  
    label {
      margin-bottom: 5px;
    }
  
    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      padding: 10px;
      border: none;
      background-color: silver;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: black;
    }
  </style>
  

  