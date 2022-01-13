<script lang="ts">
    import type { Lang, NavItem, NavStructure } from "$lib/type";
    import { locale } from "svelte-i18n";

    export let nav: NavItem[];
    export let level = 2;

    $: selectedLang = $locale as Lang;

    let base_url: string;
    $: base_url = `/${selectedLang}/docs`;

    const buildUrl = (naviItem: NavItem) => {
        return `${base_url}/${naviItem.slug}`;
    };
    console.log(nav);
</script>

<ol class="list-unstyled text-nowrap ps-3 fs-5">
    {#each nav as navItem}
        <li class="py-{level}">
            <a class="text-decoration-none" href={buildUrl(navItem)}>
                {navItem.title[selectedLang]}
            </a>
            {#if navItem.children}
                <svelte:self nav={navItem.children} level={level - 1} />
            {/if}
        </li>
    {/each}
</ol>
