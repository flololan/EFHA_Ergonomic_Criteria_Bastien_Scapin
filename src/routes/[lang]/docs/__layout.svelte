<script context="module" lang="ts">
  import DocsMenu from "$lib/components/DocsMenu.svelte";


  export async function load() {
    return {
      props: {
        hierarchy: {}
      }
    }
  }
</script>

<script>
  export let hierarchy
</script>

<DocsMenu {hierarchy} />
<slot />