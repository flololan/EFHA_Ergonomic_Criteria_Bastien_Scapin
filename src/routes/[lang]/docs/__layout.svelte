<script context="module">
  import { NAVI_HIERARCHY_RESOURCE } from "$lib/const";

  export async function load({ fetch }) {
    const navRes = await fetch(NAVI_HIERARCHY_RESOURCE);
    if (navRes.ok) {
      const nav = await navRes.json();
      return {
        props: {
            nav,
        },
        stuff: {
            nav,
        },
      };
    }

    return {
      status: navRes.status,
      error: new Error(
          `The documentation for ${NAVI_HIERARCHY_RESOURCE} doesn't exist!`
      ),
    };
  }
</script>

<script lang="ts">
  import DocNav from "$lib/components/DocNav.svelte";
  import type { NavStructure } from "$lib/type";
  import ToggleDocNavBtn from "$lib/components/ToggleDocNavBtn.svelte";

  export let nav: NavStructure;

  let showSidebar = true
</script>

<div class="d-flex position-relative" style="height: 100%; overflow: hidden">
  <DocNav {nav} bind:showSidebar />

  <main id="mainContent" class="w-100 overflow-scroll">
    <slot />
    <ToggleDocNavBtn bind:showSidebar />
  </main>
</div>
