<script context="module" lang="ts">
  import { locale } from 'svelte-i18n'

  export async function load({ params }): Promise<Record<string, never>> {
    await locale.set(params.lang)
    return {}
  }
</script>

<script lang="ts">
  import { page } from '$app/stores'

  import Footer from "$lib/components/Footer.svelte"
  import Navbar from "$lib/components/Navbar.svelte"

  $: path = $page.url.pathname
</script>

<Navbar />

<slot />

<Footer {path} />
