<script context="module" lang="ts">
  /* eslint-disable no-multiple-empty-lines */
  import '../i18n'
  import { waitLocale } from 'svelte-i18n'

  export async function load(): Promise<Record<string, never>> {
    await waitLocale()
    return {}
  }
</script>

<script lang="ts">
  import '../tailwind.css'
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<slot />
