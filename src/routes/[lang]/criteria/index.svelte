<script context="module">
  import { CRITERIA_PRESENTATION_PAGE } from '$lib/const'

  export async function load({ fetch, params }) {
    const resUrl = `${CRITERIA_PRESENTATION_PAGE}/${params.lang}.md`
    const contentRes = await fetch(resUrl)
    if (contentRes.ok) {
      return {
        props: {
          lang: params.lang,
          markdownContent: await contentRes.text(),
        },
      }
    }

    return {
      status: contentRes.status,
      error: new Error(`The documentation for ${resUrl} doesn't exist!`),
    }
  }
</script>

<script lang="ts">
  import { getMdAsHtml } from '$lib/mdToHtmlParser'
  import { getPageTitle } from '$lib/utils'
  import { _ } from 'svelte-i18n'

  export let lang: string
  export let markdownContent: string

  $: html = getMdAsHtml(markdownContent, { pageSlug: `/${lang}/criteria` })
</script>

<svelte:head>
  <title>{getPageTitle($_('criteria'))}</title>
</svelte:head>

<article
  id="mainContent"
  class="criteria-presentation position-relative px-5 pt-4"
>
  {@html html}
</article>

<style>
  .criteria-presentation {
    max-width: 80ch;
  }
</style>
