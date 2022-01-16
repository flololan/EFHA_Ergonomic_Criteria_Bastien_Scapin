<script lang="ts">
  import { focusTrap } from 'svelte-focus-trap'
  import { _ } from 'svelte-i18n'
  import CheckLg from '$lib/svg/CheckLg.svelte'
  import X from '$lib/svg/X.svelte'

  const MODAL_ID = 'cookieBanner'
  const MODAL_TITLE_ID = 'cookieBannerLabel'
  const LOCALSTORAGE_KEY = 'goodCookies'

  let show: boolean = localStorage.getItem(LOCALSTORAGE_KEY) === null

  const onClick = () => {
    show = false
    localStorage.setItem(LOCALSTORAGE_KEY, 'nope')
  }
</script>

<div
  class="modal fade show {show ? 'd-block' : ''}"
  id={MODAL_ID}
  tabindex="-1"
  role="alertdialog"
  aria-modal="true"
  aria-labelledby={MODAL_TITLE_ID}
  aria-hidden={show}
  use:focusTrap
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id={MODAL_TITLE_ID}>
          {$_('do_you_want_some_cookies')}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label={$_('close')}
          on:click={onClick}
        />
      </div>
      <div class="modal-body">{$_('cookie_banner_description')}</div>
      <div class="modal-footer border-0">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-dismiss="modal"
          on:click={onClick}
        >
          <span class="me-1" aria-hidden="true"><X /></span>
          {$_('refuse')}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-dismiss="modal"
          on:click={onClick}
        >
          <span class="me-1" aria-hidden="true"><CheckLg /></span>
          {$_('accept')}
        </button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .modal-dialog {
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    right: 0;
    left: 0;
  }
</style>
