<script context="module">
    const NAVIGATION_STRUCTURE = "/content-index.json";

    export async function load({ params, fetch }) {
        const res = await fetch(NAVIGATION_STRUCTURE);
        if (res.ok) {
            return {
                props: {
                    naviHierarchy: await res.json(),
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
    import DocNav from "$lib/components/DocNav.svelte";

    export let naviHierarchy;
</script>

<div class="d-flex">
    <DocNav navi={naviHierarchy} />
    <slot />
</div>
