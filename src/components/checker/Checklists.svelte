<!-- Collection of Checklists used by Project-->
<script>
    import { CollapsibleCard } from 'svelte-collapsible';
    import Checklist from './Checklist.svelte';
    import FollowupAction from './FollowupAction.svelte';
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
            // response = await fetch("/static/api/projects/389/project-389-details-criteria-followupActions.json");
            response = await fetch("/static/api/projects/416/project-416-details-criteria-followupActions-v2.json");
        }

        if (!response.ok) {
            console.error(`CheckerProject, fetch error: ${response.status}`);
            // response = await fetch("/static/api/projects/389/project-389-details-criteria-followupActions.json");
            response = await fetch("/static/api/projects/416/project-416-details-criteria-followupActions-v2.json");
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


    .cards {
        width: 100%;
        max-width: 550px;
        margin: 0 auto;
    }

    :global(.card) {
        margin-top: 1em;
        overflow: hidden;
        font-family: Arial, Helvetica, sans-serif;
    }


    .header {
        margin: 0;
        padding: 0.5em;
        border: 1px solid rgb(100,120,140);
        border-radius: 5px;
        background: rgb(244, 244, 244);
        transition: border-radius 0.5s step-end;
    }

    :global(.card.open) .header {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        transition: border-radius 0.5s step-start;
    }

    .body {
        padding: 1em;
        border: 1px solid rgb(100,120,140);
        margin-top: 0.25em;
        background: rgb(244, 244, 244);
        display: flex;
        /*border-radius: 5px;*/
        /*border-top-left-radius: 0;*/
        /*border-top-right-radius: 0;*/
    }

    img {
        display: block;
        width: 200px;
        height: 200px;
        border-radius: 5px;
    }

    .text {
        margin-left: 1em;
    }

    .body p {
        color: rgb(40,40,40);
        display: block;
        padding: 0;
        margin: 0;
    }

    .body p + p {
        margin-top: 1em;
    }

    .checklist {
        list-style: none;
        background-color: crimson;
        padding: 0;
    }

    ul .checklist {
        list-style: none;
        background-color: crimson;
        padding: 0;
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
    <div class='cards'>

        <CollapsibleCard>
            <h2 slot='header' class='header'>Header 1</h2>
            <div slot='body' class='body'>
                <img src='/static/images/followup-actions/action-image.png' alt='First card'/>
                <div class='text'>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
                </div>
            </div>
        </CollapsibleCard>

        <CollapsibleCard>
            <h2 slot='header' class='header'>Header 2</h2>
            <div slot='body' class='body'>
                <img src='/static/images/followup-actions/brogo-king-parrot.png' alt='First card'/>
                <div class='text'>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
                </div>
            </div>
        </CollapsibleCard>

        <CollapsibleCard>
            <h2 slot='header' class='header'>Header 3</h2>
            <div slot='body' class='body'>
                <img src='/static/images/followup-actions/harbour-entrance.png' alt='First card'/>
                <div class='text'>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
                </div>
            </div>
        </CollapsibleCard>

    </div>
    <div class="cards checklists">
        {#if (project && project.checklists && project.checklists.length > 0) }
            <ul class="checklist">
                {#each project.checklists as checklist (checklist.checklistId)}
                    <li><Checklist  {checklist} /></li>
                {/each}
            </ul>
        {:else}
            <div>
                <p>No Checklists for this Project ...</p>
            </div>
        {/if}
    </div>
{/if}
