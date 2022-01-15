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

    export let nav: NavStructure;
</script>

<div class="d-flex position-relative">
    <DocNav {nav} />
    <main id="mainContent">
        <slot />
    </main>
</div>
