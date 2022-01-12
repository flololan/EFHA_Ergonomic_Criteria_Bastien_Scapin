<script context="module">
    const NAVIGATION_STRUCTURE = "/content-index.json";

    export async function load({ params, fetch }) {
        console.log("HELLO");
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
    import { _ } from "svelte-i18n";

    export let navi: IndexEntry[];
</script>

<nav class="px-3 pt-5 border-end">
    <h2 class="pb-3">{$_("criteria")}</h2>
    <ol class="ps-1 fs-5">
        {#each navi as naviItem}
            <li>
                {naviItem.title.fr}
                <ol class="py-2">
                    {#each naviItem.children as subItem}
                        <li class="pb-1">{subItem.title.fr}</li>
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
</style>
