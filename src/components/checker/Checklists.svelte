<!-- Collection of Checklists used by Project-->
<script>
    import FollowupAction from './FollowupAction.svelte'
    let project;
    let response = {};
    let loading = false;
    export let params = {}

    async function getProject(id) {
        console.log("CheckerProject, getProject, id: " + id);
        loading = true;
        try {
            // response = await fetch("http://localhost/~richardhancock/checklist/api/checkers/22/projects/" + id + "?details=all&criteria=true");
            response = await fetch("http://localhost/~richardhancock/checklist/api/checkers/22/projects/" + id + "?details=all&criteria=true&followupActions=true");
        } catch (e) {
            console.error(`CheckerProject, error: ${e}`);
            // response = await fetch("/static/api/projects/389/project-389.json");
            response = await fetch("/static/api/projects/389/project-389-details-criteria-followupActions.json");
            // response = await fetch("/static/api/projects/416/project-416-details-criteria-followupActions-v2.json");
        }

        if (!response.ok) {
            console.error(`CheckerProject, fetch error: ${response.status}`);
            // response = await fetch("/static/api/projects/389/project-389.json");
            response = await fetch("/static/api/projects/389/project-389-details-criteria-followupActions.json");
            // response = await fetch("/static/api/projects/416/project-416-details-criteria-followupActions-v2.json");
        }

        project = await response.json();
        console.log("Checklists, project: " + JSON.stringify(project));
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

    @media (min-width: 767px) {
        .wrapper div {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .wrapper div div{
            width: 75%;
        }
    }
</style>

<svelte:head>
    <title>Checklists</title>
</svelte:head>

{#if loading}
    <div class="wrapper">
        <p class="center">Loading ...</p>
    </div>
{:else}
    <div class="wrapper">
        <h4 class="center">{project.name}</h4>
        <div>
            <div>Checklists</div>
        </div>
        <div class="checklists">
            {#if (project && project.checklists && project.checklists.length > 0) }
                <ul>
                    {#each project.checklists as checklist (checklist.checklistId)}
                       <li>{checklist.jobName}
                            {#if checklist.workareas}
                                <ul>
                                    {#each checklist.workareas as workarea (workarea.workareaId) }
                                        <li>{workarea.workAreaName}
                                            {#if workarea.verificationPoints}
                                                <ul>
                                                    {#each workarea.verificationPoints as point (point.id) }
                                                        <li>{point.name}
                                                            {#if point.criteria }
                                                                <ul>
                                                                    <li><strong>Criteria</strong></li>
                                                                    {#each point.criteria as criterion (criterion.id) }
                                                                        <li>{criterion.name}</li>
                                                                    {/each}
                                                                </ul>
                                                            {/if}
                                                            {#if point.followupActions }
                                                            <!--
                                                                <ul>
                                                                    <li><strong>Followup Actions</strong></li>
                                                                    {#each point.followupActions as followupAction(followupAction.ID) }
                                                                        <li>{followupAction.name}</li>
                                                                    {/each}
                                                                </ul>
                                                             -->
                                                                {#each point.followupActions as followupAction(followupAction.ID) }
                                                                   <FollowupAction  {followupAction}  tooltip="FollowupAction" />
                                                                 {/each}
                                                            {/if}
                                                        </li>
                                                    {/each}
                                                </ul>
                                            {/if}
                                        </li>
                                    {/each}
                                </ul>
                            {/if}
                        </li>
                    {/each}
                </ul>
            {:else}
                <div>
                    <p>No Checklists for this Project ...</p>
                </div>
            {/if}
        </div>
    </div>
{/if}
