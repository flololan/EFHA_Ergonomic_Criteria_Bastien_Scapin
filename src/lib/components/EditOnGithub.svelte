<script lang="ts">
    import { EDIT_CRITERIA_ROOT_PATH } from '$lib/const';
    import GithubLogo from '$lib/svg/GithubLogo.svelte';
    import { locale, _ } from 'svelte-i18n';

    export let slug: string;

    let lang;
    $: lang = $locale;
    $: href = `${EDIT_CRITERIA_ROOT_PATH}/${slug}/${lang}.md`;
</script>

<a
    class="edit-link d-flex align-items-center position-absolute top-0 mt-4 me-3 btn btn-outline-dark"
    {href}
    target="_blank"
>
    <span>{$_('edit_this_criteria')}</span>
    <span class="github-logo ms-1"><GithubLogo alt={$_('on_github')} /></span>
</a>

<style>
    .edit-link {
        left: min(80vw, calc(80ch + 3rem));
        transform: translateX(-50%);
    }

    .github-logo {
        width: 1.8rem;
    }

    a:hover .github-logo {
        transition: filter 0.15s ease-in-out;
    }
</style>
