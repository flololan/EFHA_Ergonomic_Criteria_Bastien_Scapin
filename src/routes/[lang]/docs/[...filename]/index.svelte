<script context="module" lang="ts">
    import type { Lang, NavStructure } from '$lib/type';

    export const getArticleUrl = (slug: string, lang: Lang): string =>
        `/contents/${slug}/${lang}.md`;

    export async function load({ params, fetch, stuff }) {
        const res = await fetch(getArticleUrl(params.filename, params.lang));
        if (res.ok) {
            return {
                props: {
                    md: await res.text(),
                    slug: params.filename,
                    nav: stuff.nav,
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
    import { getMdAsHtml } from '$lib/mdToHtmlParser';
    import { _, locale } from 'svelte-i18n';
    import { DEFAULT_LANG } from '$lib/const';
    import type { NavItem } from '$lib/type';

    export let md: string;
    export let slug: string;
    export let nav: NavStructure;

    const getCurrentNavItem = (
        slug: NavItem['slug'],
        navItems: NavItem[]
    ): NavItem | undefined => {

      for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];
        if (slug === item.slug) {
          return item;
        } 
        if (item.children) {
          const matchingNavItem = getCurrentNavItem(slug, item.children);
          if (matchingNavItem) {
            return matchingNavItem
          }
        }
      }
    };

    const getCriteriaUrl = (slug) => `/${lang}/docs/${slug}`;

    $: lang = ($locale as Lang | null | undefined) ?? DEFAULT_LANG;
    $: html = getMdAsHtml(md, { pageSlug: location.pathname });

    $: currentNavItem = getCurrentNavItem(slug, nav.children);
    $: prev = currentNavItem?.previous;
    $: next = currentNavItem?.next;
</script>

<article id="mainContent" class="criteria px-5 pt-4">
    {@html html}
    <div class="row d-flex justify-content-between my-5">
        {#if prev}
            <a class="btn btn-outline-secondary col-9 col-md-5" href={getCriteriaUrl(prev)}>
                <span class="me-1" aria-hidden="true">←</span>
                {$_('previous_criteria')}
            </a>
        {/if}
        {#if next}
            <a class="btn btn-outline-secondary col-9 col-md-5 ms-auto mt-3 mt-md-0" href={getCriteriaUrl(next)}>
                {$_('next_criteria')}<span class="ms-1" aria-hidden="true">
                    →</span
                >
            </a>
        {/if}
    </div>
</article>

<style>
    .criteria {
        width: 80ch; /* 80 characters wide */
    }
</style>
