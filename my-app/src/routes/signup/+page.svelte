<script>
    import { goto } from '$app/navigation';
    import Wip from '$lib/wip.svelte';
    import { afterUpdate } from 'svelte';
  
    let username = '';
    let password = '';
    let confirmPassword = '';
    let errorMessage = '';
  
    const handleSignUp = async () => {
      if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        errorMessage = 'Please fill in all fields.';
        return;
      }
  
      if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match.';
        return;
      }
  
      // Simulate signup logic (replace with actual signup logic)
      // For demonstration purposes, navigate to the homepage after successful signup
      errorMessage = '';
      goto('/home');
    };
  
    // Clear error message after a short delay
    afterUpdate(() => {
      setTimeout(() => {
        errorMessage = '';
      }, 3000);
    });
  </script>
  
  <div class="signup-container">
    <div class="logo-banner">
      <h2>Log Collection Service</h2>
    </div>
  
    <form class="signup-form" on:submit|preventDefault={handleSignUp}>
      <h2>Sign Up</h2>
      {#if errorMessage}
        <p class="error-message">{errorMessage}</p>
      {/if}
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" bind:value={username}>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password}>
      </div>
      <div class="input-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" bind:value={confirmPassword}>
      </div>
      <button type="submit">Sign Up</button>
      <p class="login-link">
        Already have an account? <a href="/">Login</a>
      </p>
    </form>
  
    <Wip/>
  </div>
  
  <style>
    .signup-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
  
    .signup-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }
  
    .input-group {
      margin-bottom: 15px;
      width: 100%;
    }
  
    label {
      margin-bottom: 5px;
      display: block;
      color: #555;
    }
  
    input {
      padding: 10px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
    }
  
    button {
      padding: 10px;
      border: none;
      background-color: #4caf50;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      width: 100%;
      box-sizing: border-box;
    }
  
    button:hover {
      background-color: #45a049;
    }
  
    .error-message {
      color: #ff0000;
      margin-bottom: 15px;
    }
  
    .login-link {
      margin-top: 20px;
    }
  
    .login-link a {
      color: #007BFF;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s ease;
    }
  
    .login-link a:hover {
      color: #0056b3;
    }
  </style>
  