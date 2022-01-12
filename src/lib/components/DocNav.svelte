<script lang="ts">
    import type { IndexEntry } from "src/scripts/generate-index";
    import { _, locale } from "svelte-i18n";

    export let navStructure: IndexEntry[];

    $: selectedLang = $locale;

    let base_url: string;
    $: base_url = `/${selectedLang}/docs`;

    const buildUrl = (naviItem: IndexEntry) => {
        return `${base_url}/${naviItem.slug}`;
    };
</script>

<nav class="doc-nav px-3 pt-4 border-end">
    <h2 class="pb-2">{$_("criteria")}</h2>
    <ol class="list-unstyled text-nowrap ps-1 fs-5">
        {#each navStructure as naviItem}
            <li>
                <a class="text-decoration-none" href={buildUrl(naviItem)}
                    >{naviItem.title[selectedLang]}</a
                >
                <ol class="list-unstyled ps-2 py-2">
                    {#each naviItem.children as subItem}
                        <li class="pb-1">
                            <a
                                class="text-decoration-none"
                                href={buildUrl(subItem)}
                            >
                                {subItem.title[selectedLang]}
                            </a>
                        </li>
                    {/each}
                </ol>
            </li>
        {/each}
    </ol>
</nav>
