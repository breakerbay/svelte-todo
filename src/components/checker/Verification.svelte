<!-- WorkArea details-->
<script>
    import {CollapsibleCard} from 'svelte-collapsible';
    import FollowupActions from './FollowupActions.svelte';
    export let verificationPoint;
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
        border: 1px solid rgb(100, 120, 140);
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
        border: 1px solid rgb(100, 120, 140);
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

    .body p {
        color: rgb(40, 40, 40);
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

    .description {
        width: 100%;
        font-style: italic;
        font-weight: lighter;
    }

</style>

<div class="cards">
    <CollapsibleCard>
        <h2 slot='header' class='header'>{verificationPoint.name}</h2>
        <div slot='body' class='body'>
            <ul>
                <li>
                    {#if verificationPoint.criteria }
                        <ul>
                            <li><strong>Criteria</strong></li>
                            {#each verificationPoint.criteria as criterion (criterion.id) }
                                <li>{criterion.name}</li>
                            {/each}
                        </ul>
                    {/if}
                </li>
                <li>
                    <FollowupActions {verificationPoint}/>
                </li>
            </ul>
            <!--
                        {#if verificationPoint.followupActions }
                            <ul>
                                <li><strong>Followup Actions</strong></li>
                                {#each verificationPoint.followupActions as followupAction(followupAction.ID) }
                                    <li>{followupAction.name}</li>
                                {/each}
                            </ul>
                        {/if}
            -->

        </div>
    </CollapsibleCard>
</div>
