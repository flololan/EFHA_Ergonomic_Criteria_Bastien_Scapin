<script context="module" lang="ts">
  export async function load({ params, fetch, stuff }) {
    const res = await fetch(`/legals/mentions/${params.lang}.md`);
    if (res.ok) {
      return {
        props: {
          md: await res.text(),
          slug: params.filename,
          nav: stuff.nav,
        },
      };
    }

    return {
      status: res.status,
      error: new Error(
          `Impossible to fetch the content for this page!`
      ),
    };
  }
</script>

<script lang="ts">
  import { getMdAsHtml } from '$lib/mdToHtmlParser';
  import { _, } from 'svelte-i18n';

  import Footer from '$lib/components/Footer.svelte';

  export let md: string;

  $: html = getMdAsHtml(md, { pageSlug: location.pathname });
</script>

<main id="mainContent" class="container mt-5">
  {@html html}
</main>

<Footer />
    
<style>
  main {
    width: 80ch;
    max-width: 100%;
    text-align: justify;
  }
</style>
