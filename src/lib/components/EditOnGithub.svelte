<script lang="ts">
    import { EDIT_CRITERIA_ROOT_PATH } from "$lib/const";
    import { locale } from "svelte-i18n";

    export let slug: string;

    let lang;
    $: lang = $locale;
</script>

<a
    class="d-flex align-items-center position-absolute top-0 end-0 mt-4 me-4 btn btn-outline-dark"
    href="{EDIT_CRITERIA_ROOT_PATH}/{slug}/{lang}.md"
>
    Edit this criteria
    <img
        class="github-logo ps-1"
        src="/assets/githubLogo.svg"
        alt="on github"
    />
</a>

<style>
    .github-logo {
        width: 1.8rem;
    }

    a:hover .github-logo {
        filter: invert(100%);
        transition: filter;
    }
</style>
