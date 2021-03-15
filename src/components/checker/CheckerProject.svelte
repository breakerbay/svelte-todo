<script>
    let project;
    let response = {};
    let loading = false;
    export let params = {}

    async function getProject(id) {
        console.log("CheckerProject, getProject, id: " + id);
        loading = true;
        try {
            response = await fetch("http://localhost/~richardhancock/checklist/api/checkers/22/projects/" + id);
        } catch (e) {
            console.error(`CheckerProject, error: ${e}`);
            response = await fetch("/static/api/projects/389/project-389.json");
        }

        if (!response.ok) {
            console.error(`CheckerProject, fetch error: ${response.status}`);
            response = await fetch("/static/api/projects/389/project-389.json");
        }

        project = await response.json();
        loading = false;
    }

    $: project = getProject(params.id)

</script>

<style>
    * {
        box-sizing: border-box;
    }

    .wrapper > * {
        padding: 0.25rem;
        margin: 0;
    }

    .wrapper h4 {
        padding-top: 1rem;
        padding-bottom: 0.5rem;
    }

    .center {
        text-align: center;
    }
    
    ul {
        list-style: none;
        padding-inline-start: 0;
        width: 100%;
    }

    li {
        background-color: #fff;
        color: #444;
        border: 1px solid #424245;
        border-radius: 0.25rem;
        padding: 0.5rem;
        margin-bottom: 0.125rem;
    }    

    @media (min-width: 767px) {
        .wrapper div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .wrapper div div{
            width: 75%;
        }
        
        ul {
            width: 50%;
        }
    }

</style>

<svelte:head>
    <title>Checker Project</title>
</svelte:head>

{#if loading}
    <div class="wrapper">
        <p>Loading ...</p>
    </div>
{:else if project}
    <div class="wrapper">
        <h4 class="center">{project.name}</h4>
        <div>
            <div>
            {project.descr}
            </div>
        </div>
        <div class="wrapper2 center">
            <ul>
                <li><a href="/#/checklists">Checklists (ITPs)</a></li>
                <li><a href="/#/worklots">Worklots</a></li>
                <li><a href="/#/followup-actions">Followup Actions</a></li>
            </ul>
        </div>
    </div>
{:else}
    <div class="wrapper">
        <p>No Projects for this Checker</p>
    </div>
{/if}
