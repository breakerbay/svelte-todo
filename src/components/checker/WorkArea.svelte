<!-- WorkArea details-->
<script>
    import { CollapsibleCard } from 'svelte-collapsible';
    export let workarea
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
        padding-left: 0.25em;
    }

</style>

<div class="cards">
<CollapsibleCard>
    <h2 slot='header' class='header'>{workarea.workAreaName}</h2>
    <div slot='body' class='body'>
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
                            <ul>
                                <li><strong>Followup Actions</strong></li>
                                {#each point.followupActions as followupAction(followupAction.ID) }
                                    <li>{followupAction.name}</li>
                                {/each}
                            </ul>
                        {/if}
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</CollapsibleCard>
</div>
