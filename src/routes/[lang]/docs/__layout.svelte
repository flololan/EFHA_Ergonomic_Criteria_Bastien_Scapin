<script context="module">
    const NAVIGATION_STRUCTURE = "/content-index.json";

    export async function load({ fetch }) {
        const naviHierarchyRes = await fetch(NAVIGATION_STRUCTURE);
        if (naviHierarchyRes.ok) {
            return {
                props: {
                    naviHierarchy: await naviHierarchyRes.json(),
                },
            };
        }

        return {
            status: naviHierarchyRes.status,
            error: new Error(
                `The documentation for /${NAVIGATION_STRUCTURE} doesn't exist!`
            ),
        };
    }
</script>

<script lang="ts">
    import DocNav from "$lib/components/DocNav.svelte";

    export let naviHierarchy;
</script>

<div class="d-flex">
    <DocNav navi={naviHierarchy} />
    <slot />
</div>
