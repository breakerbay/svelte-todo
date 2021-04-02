<!-- Followup Action details-->
<script>
    import { slide } from "svelte/transition";
    import { AlertCircleIcon} from 'svelte-feather-icons';
    export let tooltip = false // prevent blank tooltips
    export let followupAction
    let isOpen = false
    const toggle = () => isOpen = !isOpen
</script>
<style>
    button {border: none; background: none;display:block; color: inherit; font-size: 18px; cursor: pointer; margin: 0; padding-bottom: 0.5em; padding-top: 0.5em}
</style>
<div class="followup-action card" data-tooltip={tooltip} >
<button on:click={toggle} aria-expanded={isOpen}><AlertCircleIcon size="18" /> {followupAction.name} </button>
{#if isOpen}
    <ul transition:slide={{ duration: 300 }}>
            <li>{followupAction.descr}</li>
    </ul>
{/if}
</div>
