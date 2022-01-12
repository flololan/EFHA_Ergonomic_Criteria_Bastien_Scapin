<script lang="ts">
  export let show: boolean
</script>

<style>
  .modal {
    background: rgba(0, 0, 0, 0.7)
  }
</style>

<div class="modal fade" class:show={show} class:d-block={show} data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
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
