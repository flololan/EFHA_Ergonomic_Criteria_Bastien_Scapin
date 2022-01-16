<script lang="ts">
  import { getPageTitle } from '$lib/utils'
  import { _ } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{getPageTitle($_('criteria'))}</title>
</svelte:head>

<h1>Welcome to the doc</h1>
