<script context="module" lang="ts">
  import { waitLocale } from 'svelte-i18n';
  import '../i18n'

  export async function load(): Promise<Record<string, never>> {
    await waitLocale()
    return {}
  }
</script>

<script>
  import GoToMainContent from '$lib/components/GoToMainContent.svelte';

  import "../styles/global.scss";
</script>


<GoToMainContent />
<slot />
