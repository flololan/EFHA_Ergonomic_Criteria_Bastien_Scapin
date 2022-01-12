<script context="module">
    const NAVIGATION_STRUCTURE = "/content-index.json";

    export async function load({ params, fetch }) {
        const res = await fetch(NAVIGATION_STRUCTURE);
        if (res.ok) {
            return {
                props: {
                    navi: await res.json(),
                },
            };
        }

        return {
            status: res.status,
            error: new Error(
                `The documentation for /${NAVIGATION_STRUCTURE} doesn't exist!`
            ),
        };
    }
</script>

<script lang="ts">
    import type { IndexEntry } from "src/scripts/generate-index";
    import { _, locale } from "svelte-i18n";

    export let navi: IndexEntry[];

    $: selectedLang = $locale;

    let base_url: string;
    $: base_url = `/${selectedLang}/docs`;

    const buildUrl = (naviItem: IndexEntry) => {
        return `${base_url}/${naviItem.slug}`;
    };
</script>

<nav class="doc-nav px-3 pt-4 border-end">
    <h2 class="pb-2">{$_("criteria")}</h2>
    <ol class="ps-1 fs-5 text-nowrap">
        {#each navi as naviItem}
            <li>
                <a href={buildUrl(naviItem)}>{naviItem.title[selectedLang]}</a>
                <ol class="py-2">
                    {#each naviItem.children as subItem}
                        <li class="pb-1">
                            <a href={buildUrl(subItem)}>
                                {subItem.title[selectedLang]}
                            </a>
                        </li>
                    {/each}
                </ol>
            </li>
        {/each}
    </ol>
</nav>

<style>
    ol {
        list-style-type: none;
        padding-left: 1rem;
    }

    a {
        text-decoration: none;
    }

    .doc-nav {
        min-width: 30ch;
    }
</style>
