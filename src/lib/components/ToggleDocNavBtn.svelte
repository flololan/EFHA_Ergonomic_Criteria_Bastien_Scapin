<script lang="ts">
  import List from '../svg/List.svelte'
  import CloseDocNavBtn from './CloseDocNavBtn.svelte';

  export let showSidebar: boolean
</script>

{#if showSidebar}
    <CloseDocNavBtn bind:showSidebar class="bottom-0 end-0" />
{:else}
  <button
    id="closeSidebarBtn"
    class="d-md-none btn btn-outline-secondary text-dark bg-light position-absolute bottom-0 end-0 m-2" 
    on:click={() => { showSidebar = !showSidebar }}
  >
    <List />
  </button>
{/if}
  