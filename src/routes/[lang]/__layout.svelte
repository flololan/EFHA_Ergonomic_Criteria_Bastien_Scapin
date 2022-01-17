<script context="module" lang="ts">
  import { locale } from 'svelte-i18n'

  import { DEFAULT_LANG, LANGS } from '$lib/const'
  import { getUrlWithUpdatedLang } from '$lib/utils';

  export async function load({ params, url }) {
    let isLangValid = LANGS.includes(params.lang)

    if (!isLangValid) {
      return {
        status: 303,
        redirect: getUrlWithUpdatedLang(url.href, params.lang, DEFAULT_LANG)
      }
    }

    await locale.set(params.lang)
    return {}
  }
</script>

<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte"
</script>

<Navbar />

<slot />
