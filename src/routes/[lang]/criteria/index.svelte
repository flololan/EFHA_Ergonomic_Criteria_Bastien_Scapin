<script lang="ts">
  import { wrapTitle } from '$lib/utils'
  import { _ } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{wrapTitle($_('criteria'))}</title>
</svelte:head>

<h1>Welcome to the doc</h1>
