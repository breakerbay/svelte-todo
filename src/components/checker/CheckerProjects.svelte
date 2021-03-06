<script>
    // import CheckerProject from "./components/CheckerProject.svelte";
    import { onMount } from "svelte";

    let projects = [];
    let loading = false;

    onMount(async () => {
        loading = true;
        const response = await fetch("/static/api/projects/projects.json");
        projects = await response.json();
        loading = false;
    });

    // $: pendings = todos.filter(t => !t.completed);
    // $: completed = todos.filter(t => t.completed);

</script>

<svelte:head>
    <title>Checker Projects</title>
</svelte:head>

{#if loading}
    <div class="section">
        <p>Loading ...</p>
    </div>
{:else if projects.length > 0}
    <div class="section columns">
        <div class="column">
            <ul>
                {#each projects as project (project.id)}
                    <li>{project.name}</li>
                {/each}
            </ul>
        </div>
    </div>
{:else}
    <div class="section">
        <p>No Projects for this Checker</p>
    </div>
{/if}
