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
    class="d-flex align-items-center position-absolute top-0 end-0 mt-4 me-4 btn btn-outline-dark"
    {href}
    target="_blank"
>
    {$_('edit_this_criteria')}
    <span class="github-logo ms-1"><GithubLogo alt={$_('on_github')} /></span>
</a>

<style>
    .github-logo {
        width: 1.8rem;
    }

    a:hover .github-logo {
        transition: filter 0.15s ease-in-out;
    }
</style>
