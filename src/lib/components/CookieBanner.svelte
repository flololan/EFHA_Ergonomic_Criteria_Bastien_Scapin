<script lang="ts">
  import { dev } from '$app/env'
  import { focusTrap } from 'svelte-focus-trap'
  import { _ } from 'svelte-i18n'
  import CheckLg from '$lib/svg/CheckLg.svelte'
  import X from '$lib/svg/X.svelte'
  import { availabilityStore } from '$lib/stores'

  const MODAL_ID = 'cookieBanner'
  const MODAL_TITLE_ID = 'cookieBannerLabel'
  const LOCALSTORAGE_KEY = 'goodCookies'

  let show: boolean = localStorage.getItem(LOCALSTORAGE_KEY) === null

  $: $availabilityStore.isFocusTrapAvailable = !show

  const onClick = () => {
    show = false
    localStorage.setItem(LOCALSTORAGE_KEY, 'nope')
  }
</script>

{#if show}
  <div
    class="modal fade show d-block"
    id={MODAL_ID}
    role="alertdialog"
    aria-modal="true"
    aria-labelledby={MODAL_TITLE_ID}
    use:focusTrap
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id={MODAL_TITLE_ID}>
            {$_('do_you_want_some_cookies')}
          </h5>
        </div>
        <div class="modal-body">{$_('cookie_banner_description')}</div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-primary" on:click={onClick}>
            <span class="me-1" aria-hidden="true"><X /></span>
            {$_('refuse')}
          </button>
          <button type="button" class="btn btn-primary" on:click={onClick}>
            <span class="me-1" aria-hidden="true"><CheckLg /></span>
            {$_('accept')}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    background: rgba(0, 0, 0, 0.7);
  }

  .modal-dialog {
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    right: 0;
    left: 0;
  }

  .modal-title::before,
  .modal-title::after {
    content: ' 🍪 ';
  }
</style>
