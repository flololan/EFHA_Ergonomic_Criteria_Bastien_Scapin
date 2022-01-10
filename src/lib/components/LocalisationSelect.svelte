<script lang="ts">
  import { goto } from '$app/navigation';
  import { locale, locales } from 'svelte-i18n'
  import Globe2 from 'svelte-bootstrap-icons/lib/Globe2/Globe2.svelte'

  import Select from './Select.svelte'
  import { LANGUAGES } from '$lib/const'

  let selectedLang = $locale
  
  const getUrlWithUpdatedLang = (prevLang: string, newLang: string): string => {
    return `${location.href}/`.replace(`/${prevLang}/`, `/${newLang}/`)
  }

  $: {
    if ($locale !== selectedLang) {
      const localizedUrl = getUrlWithUpdatedLang($locale, selectedLang)
      goto(localizedUrl)
    }
  }
</script>

<Select 
  class="locale-select m-2 btn-outline-primary"
  bind:value={selectedLang}
  values={$locales.map(locale => {
    return {
      label: LANGUAGES[locale],
      value: locale
    }
  })}
  icon={Globe2}
/>

<style>
  @media screen and (max-width: 992px) {
    :global(.locale-select .label) {
      display: none;
    }
  }
</style>