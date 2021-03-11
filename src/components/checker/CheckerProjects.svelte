<script>
    // import CheckerProject from "./components/CheckerProject.svelte";
    import { onMount } from "svelte";

    let projects = [];
    let loading = false;

    onMount(async () => {
        loading = true;
        // const response = await fetch("/static/api/projects/projects.json");
        const response = await fetch("http://localhost/~richardhancock/checklist/api/checkers/22/projects");
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
    <div class="wrapper">
        <p>Loading ...</p>
    </div>
{:else if projects.length > 0}
    <div class="wrapper">
        <div class="projects">
            <ul>
                {#each projects as project (project.id)}
                    <li><a href="/#/projects/{project.id}">{project.name}</a></li>
                {/each}
            </ul>
        </div>
    </div>
{:else}
    <div class="wrapper">
        <p>No Projects for this Checker</p>
    </div>
{/if}

<style>

    .wrapper {
        display: grid;
        grid-template-columns: 2.5fr 1fr 0.5fr;
        gap: 20px;
        color: #444;
    }

    .wrapper > * {
        background-color: rgb(120, 70, 123);
        color: #fff;
        border-radius: 5px;
        padding: 20px;
        margin: 0;
    }

    ul {
        list-style: none;
        padding-inline-start: 0;
    }

    li {
        background-color: #fff;
        color: #444;
        border: 1px solid #424245;
        border-radius: 5px;
        padding: 10px;
    }
    .projects {
        grid-column: 1 / -1;
        /*grid-row: 2;*/
    }
</style>
