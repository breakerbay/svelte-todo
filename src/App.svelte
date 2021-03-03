<script>
  import Router from 'svelte-spa-router'
  import routes from './routes.js';

  import Navbar2 from './components/Navbar.svelte';
</script>

<Navbar2 />

<div>
    <Router {routes} />
</div>
