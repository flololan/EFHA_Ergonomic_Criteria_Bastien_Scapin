<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { locale } from "svelte-i18n";

  import type { Lang, NavItem } from "$lib/type";

  export let nav: NavItem[];
  export let level = 2;

  const dispatch = createEventDispatcher()

  $: selectedLang = $locale as Lang;

  let base_url: string;
  $: base_url = `/${selectedLang}/docs`;

  const buildUrl = (naviItem: NavItem) => {
      return `${base_url}/${naviItem.slug}`;
  };
</script>

<ol class="list-unstyled text-nowrap ps-3 fs-5">
  {#each nav as navItem}
    <li
      class="py-{level} w-fit-content"
      on:click={() => dispatch('navItemClicked', '')}
    >
      <a
        class="text-decoration-none"
        href={buildUrl(navItem)}
      >
        {navItem.title[selectedLang]}
      </a>
      {#if navItem.children}
        <svelte:self nav={navItem.children} level={level - 1} />
      {/if}
    </li>
  {/each}
</ol>

<style>
  a:focus {
    text-decoration: underline !important;
  }
</style>