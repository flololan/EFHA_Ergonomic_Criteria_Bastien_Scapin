<script lang="ts">
  import { goto } from '$app/navigation';
  import { locale } from 'svelte-i18n'

  $: selectedLang = $locale
  
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

<style>
  img {
    height: 1.3rem;
  }
</style>

<div class="btn-group ms-4" role="group" aria-label="select language">
  <button 
    type="button"
    class="btn btn-outline-secondary p-1"
    aria-label="french"
    disabled={selectedLang === 'fr'}
    on:click={() => selectedLang = 'fr'}
  >
    <img src="/assets/flag_fr.svg" alt="France flag"/>
  </button>
  <button
    type="button"
    class="btn btn-outline-secondary p-1"
    aria-label="english"
    disabled={selectedLang === 'en'}
    on:click={() => selectedLang = 'en'}
  >
    <img src="/assets/flag_en.svg" alt="United Kingdom flag"/>
  </button>
</div>
