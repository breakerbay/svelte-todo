<script>
    import { onMount } from "svelte";

    let project;
    let loading = false;
    export let params = {}
    $: console.log("CheckerProject, before onMount, params: " + JSON.stringify(params));

    onMount(async () => {
        $: console.log("CheckerProject, in onMount, params: " + JSON.stringify(params));
        loading = true;
        const response = await fetch("/static/api/projects/389/project-389.json");
        project = await response.json();
        loading = false;
    });

    function getProject(id) {
        console.log("CheckerProject, getProject, id: " + id);
    }

    $: project = getProject(params.id)

    $: console.log("CheckerProject, after onMount, params: " + JSON.stringify(params));
</script>


<svelte:head>
    <title>Checker Project</title>
</svelte:head>

{#if loading}
    <div class="section">
        <p>Loading ...</p>
    </div>
{:else if project}
    <div>
        {project.name}
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
