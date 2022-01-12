<script context="module" lang="ts">
  import { locale } from 'svelte-i18n'

  export async function load({ params }): Promise<Record<string, never>> {
    await locale.set(params.lang);
    return {}
  }
</script>

<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main id="mainContent">
  <slot />
</main>
