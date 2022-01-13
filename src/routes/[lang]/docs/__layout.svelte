<script context="module">
    const NAVI_HIERARCHY_RESOURCE = "/content-index.json";

    export async function load({ fetch }) {
        const navRes = await fetch(NAVI_HIERARCHY_RESOURCE);
        if (navRes.ok) {
            return {
                props: {
                    nav: await navRes.json(),
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
    <slot />
</div>
