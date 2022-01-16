<script context="module" lang="ts">
  import { waitLocale } from 'svelte-i18n';
  import '../i18n'

  export async function load(): Promise<Record<string, never>> {
    await waitLocale()
    return {}
  }
</script>

<script lang="ts">
  import GoToMainContent from '$lib/components/GoToMainContent.svelte';
  import { screen } from '$lib/stores'

  import "../styles/global.scss";

  let windowHeight: number
  let windowWidth: number

  $: {
    screen.update(() => ({
      height: windowHeight,
      width: windowWidth,
      device: windowWidth >= 768 ? 'computer' : 'mobile'
    }))
  }
</script>

<svelte:window 
  bind:innerHeight={windowHeight}
  bind:innerWidth={windowWidth}
/>

<GoToMainContent />
<slot />
