<script lang="ts">
    import type { Lang, NavItem, NavStructure } from "$lib/type";
    import { _, locale } from "svelte-i18n";

    export let nav: NavStructure;

    $: selectedLang = $locale as Lang;

    let base_url: string;
    $: base_url = `/${selectedLang}/docs`;

    const buildUrl = (naviItem: NavItem) => {
        return `${base_url}/${naviItem.slug}`;
    };
</script>

<nav class="doc-nav px-3 pt-4 border-end">
    <h2 class="pb-3">{$_("criteria")}</h2>
    <ol class="list-unstyled text-nowrap ps-1 fs-5">
        {#each nav.children as naviItem}
            <li class="pb-3">
                <a class="text-decoration-none" href={buildUrl(naviItem)}
                    >{naviItem.title[selectedLang]}</a
                >
                {#if naviItem.children}
                    <ol class="list-unstyled ps-3 py-1">
                        {#each naviItem.children as subItem}
                            <li class="pb-1">
                                <a
                                    class="text-decoration-none"
                                    href={buildUrl(subItem)}
                                >
                                    {subItem.title[selectedLang]}
                                </a>

                                {#if subItem.children}
                                    <ol class="list-unstyled ps-3 py-1">
                                        {#each subItem.children as SecondSubItem}
                                            <li>
                                                <a
                                                    class="text-decoration-none"
                                                    href={buildUrl(
                                                        SecondSubItem
                                                    )}
                                                >
                                                    {SecondSubItem.title[
                                                        selectedLang
                                                    ]}
                                                </a>
                                            </li>
                                        {/each}
                                    </ol>
                                {/if}
                            </li>
                        {/each}
                    </ol>
                {/if}
            </li>
        {/each}
    </ol>
</nav>
