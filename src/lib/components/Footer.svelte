<script>
  import { _, locale } from 'svelte-i18n';

  import { DEVS, REPO_LINK } from '$lib/const';
  import { page } from '$app/stores'

	import Links from './Links.svelte'

  $: path = $page.url.pathname
</script>

<footer class="d-flex flex-column align-items-center mt-5 mx-0 py-4 px-1 px-md-5 bg-light">
  <ul class="d-flex ms-0 ps-0 mb-0">
    <Links {path} />
  </ul>

  <p class="mb-3">
    <a href={`/${$locale}/assure/accessibility`} class="link-dark">
      {$_('footer.accessibility')}
    </a>
    | 
    <a href={`/${$locale}/legal-mentions`} class="link-dark">
      {$_('legal_mentions')}
    </a>
  </p>
  <p class="mb-0 ms-2 text-center">
    {@html $_('footer.build_with_love', { values: { 
      love: `<span aria-label="${$_('footer.love')}" role="img">❤️</span>`
    }})}

    {#each DEVS as { name, link }, index}
      <a href={link} target="_blank">{name}</a>{#if index < DEVS.length - 1},&nbsp;{/if}
    {/each}
  </p>
  <p class="mt-3 ms-2">
    {$_('footer.website_is')}
    <a href={REPO_LINK} target="_blank">open source</a>.
  </p>
</footer>