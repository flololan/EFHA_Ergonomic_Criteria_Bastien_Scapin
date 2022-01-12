<script context="module" lang="ts">
    export async function load({ params, fetch, session }) {
        console.log(params);
        const res = await fetch(
            `/contents/${params.filename}/${params.lang}.md`
        );
        if (res.ok) {
            return {
                props: {
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
    export let md: string;

    import { getMdAsHtml } from "$lib/mdToHtmlParser";

    let html;
    $: html = getMdAsHtml(md, { pageSlug: location.pathname });
</script>

<article id="mainContent" class="criteria px-5 pt-4">
    {@html html}
</article>

<style>
    .criteria {
        width: 80ch; /* 80 characters wide */
    }
</style>
