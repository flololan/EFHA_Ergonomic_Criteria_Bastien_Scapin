<script lang="ts">
  import { locale, _ } from 'svelte-i18n'

  import { LANGS } from '$lib/const'
  import { page } from '$app/stores'
  import { getUrlWithUpdatedLang } from '$lib/utils';
</script>

<div class="btn-group ms-4" role="group" aria-label="select language">
  {#each LANGS as lang}
    <a
      role="button"
      href={getUrlWithUpdatedLang($page.url.href, $locale, lang)}
      class="btn btn-outline-secondary p-1"
      aria-label={$_(`localisation.${$locale}`)}
      class:disabled={$locale === lang}
      aria-hidden={$locale === lang}
      tabindex={$locale === lang ? -1 : 0}
    >
      <img src={`/assets/flag_${lang}.svg`} alt="" class="rounded" />
    </a>
  {/each}
</div>

<style>
  img {
    height: 1.3rem;
  }
</style>
