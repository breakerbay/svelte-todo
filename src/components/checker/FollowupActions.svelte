<!-- Collection of Followup Actions for a TestPlan-->
<script>
    import {CollapsibleCard} from 'svelte-collapsible';
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

    .text {
        margin-left: 1em;
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
        /*padding-left: 0.25em;*/
        padding: 0px;
    }

    .description {
        width: 100%;
        font-style: italic;
        font-weight: lighter;
    }

    .verification {
        width: 100%;
        background-color: #004d00;
    }

</style>
<!--
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
-->
<svelte:head>
    <title>Followup Actions</title>
</svelte:head>

<!--
<div class="wrapper">
    <h4 class="center">Followup Actions</h4>
    <div>
        <div>The Collection of Followup Actions for a TestPlan, i.e. Checklist as applied to a Worklot</div>
    </div>
</div>
-->

<div class="cards">
    <CollapsibleCard>
        <h2 slot='header' class='header'>Followup Actions</h2>
        <div slot='body' class='body'>
            <ul>
                <li>
                    <div class="description">Add a Followup Action</div>
                </li>
            {#if verificationPoint && verificationPoint.followupActions }
                <ul>
                    {#each verificationPoint.followupActions as followupAction(followupAction.ID) }
                        <li>{followupAction.name}</li>
                    {/each}
                </ul>
            {/if}
            </ul>
        </div>
    </CollapsibleCard>
</div>
