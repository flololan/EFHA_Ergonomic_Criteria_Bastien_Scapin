<script lang="ts">
    import { _ } from 'svelte-i18n'

    $: website = window.location.hostname
    $: pageTitle = $_('site_title', { values: { website } })
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<main id="mainContent">
  <h1>Blat</h1>
</main>