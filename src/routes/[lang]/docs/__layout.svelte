<script context="module">
    const NAVI_HIERARCHY_RESOURCE = "/content-index.json";

    export async function load({ fetch }) {
        const navStructureRes = await fetch(NAVI_HIERARCHY_RESOURCE);
        if (navStructureRes.ok) {
            return {
                props: {
                    navStructure: await navStructureRes.json(),
                },
            };
        }

        return {
            status: navStructureRes.status,
            error: new Error(
                `The documentation for ${NAVI_HIERARCHY_RESOURCE} doesn't exist!`
            ),
        };
    }
</script>

<script lang="ts">
    import DocNav from "$lib/components/DocNav.svelte";

    export let navStructure;
</script>

<div class="d-flex">
    <DocNav {navStructure} />
    <slot />
</div>
