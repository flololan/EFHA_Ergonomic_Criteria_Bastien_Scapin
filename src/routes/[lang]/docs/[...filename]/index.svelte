<script context="module" lang="ts">

  export async function load({ params, fetch }) {
    const res = await fetch(`/contents/${params.filename}/${params.lang}.md`)
    if (res.ok) {
      return {
        props: {
          md: await res.text()
        }
      }
    }

    return {
     	status: res.status,
			error: new Error(`The documentation for /${params.filename} doesn't exist!`) 
    }
  }
</script>

<script>
  import { _ } from 'svelte-i18n'
  import { getMdAsHtml } from "$lib/mdToHtmlParser"

  export let md

  $: website = window.location.hostname
  $: pageTitle = $_('site_title', { values: { website } })
  let html = getMdAsHtml(md, { pageSlug: location.pathname })
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

{@html html}