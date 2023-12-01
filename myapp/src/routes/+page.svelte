<script>
    let user = ''
    let pass = ''
    import { useForm, validators, HintGroup, Hint, required } from "svelte-use-form";
    const form = useForm();
</script>

<h1>Welcome to Secure Centralized Logging System</h1>


<main>
    
       
        <form use:form>
            <h2> Login Form</h2>
            <div class="box">
                
                <input type = "username" name = "username" bind:value={user} placeholder = "Username" use:validators={[required]}/>

                <input type = "password" name = "password" bind:value={pass} placeholder = "Password" use:validators={[required]}/>
            </div>
            <container>
                <button disabled={!$form.valid}>Login</button>
            </container>
        </form>

    <p>Don't have an account?</p>
    
</main>~




<style>

    h1{
        text-align: center;
    }

    main {
        text-align: center;
        padding: 1em;
        max-width: 540px;
        margin: 0 auto;
    }

	.box {
		padding: 1em;
		margin: 0 0 1em 0;
	}

    button {
        background-color: #adc5bc;
        color: rgb(10, 5, 5);
        padding: 20px 10px;
        border-radius: 2px;
        margin: 12px;
        cursor: pointer;
        width: 200px;
        font-size: 15px;
    }
    :global(.touched:invalid) {
		border-color: red;
		outline-color: red;
	}

    input{
        padding: 14px;
        /* margin: 15px 0; */
        cursor: text;
    }

    form {
        border: 3px solid #f1f1f1;
        /* width: 330px; */
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    }
</style>
