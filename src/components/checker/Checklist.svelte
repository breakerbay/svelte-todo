<!-- Checklist details-->
<script>
    import { CollapsibleCard } from 'svelte-collapsible';
    import WorkArea from './WorkArea.svelte';
    export let checklist
</script>
<style>

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
        padding: 0.25em;
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

    ul {
        list-style: none;
        /*padding-left: 0.25em;*/
        /*padding-left: 2px;*/
        padding: 0px;
        width: 100%;
    }

    .description {
        width: 100%;
        font-style: italic;
        font-weight: lighter;
    }

    .workarea {
        width: 100%;
        background-color: #004d00;
    }

</style>

<CollapsibleCard>
    <h2 slot='header' class='header'>{checklist.jobName}</h2>
    <div slot='body' class='body'>
        {#if checklist.workareas}
            <ul class="workareas">
                <li>
                    <div class="description">{checklist.checklistDescription}</div>
                </li>
                {#each checklist.workareas as workarea (workarea.workareaId) }
                    <li class="workarea"><WorkArea {workarea} /></li>
                {/each}
            </ul>
        {:else}
            <ul>
                <li>
                    <div class="description">{checklist.checklistDescription}</div>
                </li>
            </ul>
        {/if}
    </div>
</CollapsibleCard>
