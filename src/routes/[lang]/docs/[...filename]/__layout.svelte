<script context="module" lang="ts">
  import DocsMenu from "$lib/components/DocsMenu.svelte";


  export async function load({ params, fetch }): Promise<Record<string, never>> {
    const res = await fetch(`/contents/${params.filename}/${params.lang}.md`)
  console.log(res);

    return {
      props: {
        md: await res.text()
      }
    }
  }
</script>

<script>
  export let md
</script>

<slot />