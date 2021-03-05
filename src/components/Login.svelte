<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();
  let password = '';
  let username = '';

  const login = () => dispatch('login');
  const signup = () => alert('You pressed Signup.');
</script>

<svelte:head>
  <title>Checker Login</title>
</svelte:head>

<div class="login-wrapper">
  <section class="login">
    <form on:submit|preventDefault={login}>
      <label>
        Username
        <input required bind:value={username}/>
      </label>
      <label>
        Password
        <input type="password" required bind:value={password}/>
      </label>
      <div class="buttons">
        <button draggable={true}>Login</button>
        <button type="button" on:click={signup}>Sign Up</button>
      </div>
    </form>
  </section>
</div>

<style>

  .login-wrapper {
    height: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }

  .login {
    border: 0.15rem solid #1967be;
    padding: 0.5rem;
    width: 20rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0.5rem;
  }

  button {
    font-weight: 500;
  }

  form {
    display: inline-block;
    width: 100%;
  }

  input {
    display: block;
    margin-top: 0.3rem;
    width: 100%;
  }

  label {
    display: block;
    margin-top: 0.5rem;
  }

</style>

