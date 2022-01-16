<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { TITLE } from '$lib/const'

  import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
  <title>{TITLE}</title>
</svelte:head>

<h1>Blat</h1>

<Footer />
