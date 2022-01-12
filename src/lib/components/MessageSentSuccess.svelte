<script lang="ts">
  import { focusTrap } from 'svelte-focus-trap'

  export let show: boolean

  const MODAL_ID = "messageSentSucces"
</script>

<style>
  .modal {
    background: rgba(0, 0, 0, 0.7)
  }
</style>

{#if show}
  <div 
    id={MODAL_ID} 
    class="modal fade show d-block" 
    tabindex="-1" 
    aria-labelledby="modalTitle"
    use:focusTrap     
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle">Modal title</h5>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" on:click={() => show = false}>Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
{/if}
