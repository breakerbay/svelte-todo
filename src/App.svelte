<script>
  import Router from 'svelte-spa-router'
  import routes from './routes.js'
  import Navbar from './examples/components/simple/SimpleNavbar.svelte';

  import Navbar2 from './components/Navbar2.svelte';
</script>

<!--<Navbar />-->
<Navbar2 />

<div>
    <Router {routes} />
</div>
