<script lang="ts">
  import List from '../svg/List.svelte'
  import CloseDocNavBtn from './CloseDocNavBtn.svelte';

  export let showSidebar: boolean
</script>

{#if showSidebar}
    <CloseDocNavBtn bind:showSidebar class="bottom-0 end-0" />
{:else}
  <button
    class="d-md-none btn btn-outline-dark text-dark bg-light position-absolute bottom-0 end-0 m-2" 
    on:click={() => { showSidebar = !showSidebar }}
  >
    <List />
  </button>
{/if}

<style>
  :global(button) {
    z-index: 3;
  }
</style>