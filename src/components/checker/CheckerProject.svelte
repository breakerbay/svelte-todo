<script>
    import { onMount } from "svelte";

    let project;
    let loading = false;

    onMount(async () => {
        loading = true;
        const response = await fetch("/static/api/projects/projects.json");
        project = await response.json();
        loading = false;
    });

</script>


<svelte:head>
    <title>Checker Project</title>
</svelte:head>

{#if loading}
    <div class="section">
        <p>Loading ...</p>
    </div>
{:else if project}
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
<!--
"id": "389",
"accountId": "89",
"number": "1",
"name": "Feature List",
"accountName": "Checklist Engine Web Site",
"accountUserId": "22",
"accountOwner": "Richard Hancock"
-->
