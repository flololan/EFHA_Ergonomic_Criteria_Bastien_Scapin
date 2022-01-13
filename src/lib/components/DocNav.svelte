<script lang="ts">
    import type { NavStructure } from "$lib/type";
    import { _ } from "svelte-i18n";
    import DocNavItem from "./DocNavItem.svelte";

    export let nav: NavStructure;
</script>

<nav class="doc-nav px-3 pt-4 border-end">
    <h2 class="pb-3">{$_("criteria")}</h2>
    <DocNavItem nav={nav.children} />
</nav>
