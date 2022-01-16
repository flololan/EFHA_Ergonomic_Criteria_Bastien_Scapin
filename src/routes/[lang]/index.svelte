<script lang="ts">
  import { onMount } from 'svelte'
  import { _, locale } from 'svelte-i18n'

  import AOS from 'aos'
  import '../../../node_modules/aos/dist/aos.css'

  import { TITLE } from '$lib/const'
  import Footer from '$lib/components/Footer.svelte'
  import Header from './_components/Header.svelte'
  import Stats from './_components/Stats.svelte'

  onMount(() => {
    AOS.init()
  })
</script>

<svelte:head>
  <title>{TITLE}</title>
</svelte:head>

<Header />
<Stats />

<Footer />
