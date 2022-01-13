<script lang="ts">
  import { _, locale } from 'svelte-i18n'
  import { focusTrap } from 'svelte-focus-trap'

  export let show: boolean

  const MODAL_ID = "messageSentSucces"
  const MODAL_TITLE_ID = "modalTitle"
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
    role="alertdialog"
    aria-modal="true"
    aria-labelledby={MODAL_TITLE_ID}
    use:focusTrap
  >
    <div class="modal-dialog ">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title alert alert-success" id={MODAL_TITLE_ID}>{$_('contact_page.success_message')}</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" on:click={() => show = false}>
            {$_('contact_page.back_to_contact')}
          </button>
          <a href={`/${$locale}/`} class="btn btn-primary">
            {$_('goto_home_page')}
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}
