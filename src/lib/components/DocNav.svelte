<script lang="ts">
    import { _ } from "svelte-i18n";

    import type { NavStructure } from "$lib/type";

    import CloseDocNavBtn from "./CloseDocNavBtn.svelte";
    import DocNavItem from "./DocNavItem.svelte";

    export let nav: NavStructure;
    export let showSidebar = true
</script>

<nav
  class="position-relative doc-nav px-3 pt-4 border-end overflow-scroll"
  class:d-none={!showSidebar}
  aria-live="polite"
>
  {#if showSidebar}
    <h2 class="pb-3">{$_("criteria")}</h2>
    <DocNavItem nav={nav.children} />
    <CloseDocNavBtn bind:showSidebar class="top-0 end-0" />
  {/if} 
</nav>
