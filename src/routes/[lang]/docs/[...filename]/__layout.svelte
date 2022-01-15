<script context="module" lang="ts">
    export async function load({ params, fetch, session }) {
        const res = await fetch(
            `/contents/${params.filename}/${params.lang}.md`
        );
        if (res.ok) {
            return {
                props: {
                    slug: params.filename,
                    md: await res.text(),
                },
            };
        }

        return {
            status: res.status,
            error: new Error(
                `The documentation for /${params.filename} doesn't exist!`
            ),
        };
    }
</script>

<script lang="ts">
    import EditOnGithub from '$lib/components/EditOnGithub.svelte';
    import { getMdAsHtml } from '$lib/mdToHtmlParser';

    export let md: string;
    export let slug: string;

    let html;
    $: html = getMdAsHtml(md, { pageSlug: location.pathname });
</script>

<article id="mainContent" class="criteria position-relative px-5 pt-4">
    {@html html}
    <EditOnGithub {slug} />
</article>

<style lang="scss">
    .criteria {
        width: 80ch; /* 80 characters wide */
    }
</style>
