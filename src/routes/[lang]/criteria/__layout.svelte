<script context="module">
  import { NAVI_HIERARCHY_RESOURCE } from '$lib/const'

  export async function load({ fetch }) {
    const navRes = await fetch(NAVI_HIERARCHY_RESOURCE)
    if (navRes.ok) {
      const nav = await navRes.json()
      return {
        props: {
          nav,
        },
        stuff: {
          nav,
        },
      }
    }

    return {
      status: navRes.status,
      error: new Error(
        `The documentation for ${NAVI_HIERARCHY_RESOURCE} doesn't exist!`
      ),
    }
  }
</script>

<script lang="ts">
  import DocNav from '$lib/components/DocNav.svelte'
  import type { NavStructure } from '$lib/type'
  import { screen } from '$lib/stores'
  import ToggleDocNavBtn from '$lib/components/ToggleDocNavBtn.svelte'
  import Footer from '$lib/components/Footer.svelte'

  export let nav: NavStructure

  let showSidebar = $screen.device === 'computer'
  let device = $screen.device

  screen.subscribe((value) => {
    if (value.device !== device) {
      if (value.device === 'computer') {
        showSidebar = true
      }
      device = value.device
    }
  })
</script>

<div class="d-flex position-relative" style="height: 100%; overflow: hidden">
  <DocNav {nav} bind:showSidebar />

  <div class="w-100 overflow-scroll">
    <main id="mainContent">
      <ToggleDocNavBtn bind:showSidebar />
      <slot />
    </main>
    <Footer />
  </div>
</div>
