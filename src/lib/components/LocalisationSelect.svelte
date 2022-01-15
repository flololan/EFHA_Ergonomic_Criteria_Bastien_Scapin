<script lang="ts">
  import { locale, _ } from 'svelte-i18n'
  import { LANGUAGES } from '$lib/const';

  const getUrlWithUpdatedLang = (newLang: string): string => {
    return `${location.href}/`.replace(`/${$locale}/`, `/${newLang}/`)
  }
</script>

<style>
  img {
    height: 1.3rem;
  }
</style>

<div class="btn-group ms-4" role="group" aria-label="select language">
  {#each Object.keys(LANGUAGES) as lang}
    <a
      role="button"
      href={getUrlWithUpdatedLang(lang)}
      class="btn btn-outline-secondary p-1"
      aria-label={$_(`localisation.${$locale}`)}
      class:disabled={$locale === lang}
      aria-hidden={$locale === lang}
      tabindex={$locale === lang ? -1 : 0}
    >
      <img
        src={`/assets/flag_${lang}.svg`}
        alt=""
      />
    </a>
  {/each}
</div>
