<script lang="ts">
  import { EDIT_CRITERIA_ROOT_PATH } from '$lib/const'
  import GithubLogo from '$lib/svg/GithubLogo.svelte'
  import { locale, _ } from 'svelte-i18n'

  export let slug: string

  let lang
  $: lang = $locale
  $: href = `${EDIT_CRITERIA_ROOT_PATH}/${slug}/${lang}.md`
</script>

<a
  class="edit-link d-flex align-items-center position-absolute top-0 end-0 ms-1 me-5 btn btn-outline-dark"
  {href}
  target="_blank"
>
  <span>{$_('edit_this_criterion')}</span>
  <span class="github-logo ms-1 fs-6" aria-label={$_('on_github')}
    ><GithubLogo /></span
  >
</a>

<style lang="scss">
  .edit-link {
    margin-top: 2rem;
    width: max-content;

    @media screen and (min-width: 1400px) {
      transform: translateX(100%);
    }
  }

  a:hover .github-logo {
    transition: filter 0.15s ease-in-out;
  }
</style>
