<script>
  import { _, locale } from 'svelte-i18n';

  import { DEVS, REPO_LINK } from '$lib/const';
  import { page } from '$app/stores'

	import Links from './Links.svelte'

  $: path = $page.url.pathname
</script>

<footer class="d-flex flex-column align-items-center mt-5 mx-0 py-4 px-1 px-md-5 text-white">
  <ul class="d-flex ms-0 ps-0 mb-0">
    <Links {path} />
  </ul>

  <ul class="list-unstyled d-flex flex-wrap justify-content-center mb-3 text-center">
    <li>
      <a href={`/${$locale}/assure/accessibility`} class="link-light">
        {$_('footer.accessibility')}
      </a>
    </li>
    <li>
      <a href={`/${$locale}/legal-mentions`} class="link-light">
        {$_('legal_mentions')}
      </a>
    </li>
    <li>
      <a href={`/${$locale}/credits`} class="link-light">
        {$_('credits')}
      </a>
    </li>
  </ul>
  <p class="mb-0 ms-2 text-center fw-light">
    {@html $_('footer.build_with_love', { values: { 
      love: `<span aria-label="${$_('footer.love')}" role="img">❤️</span>`
    }})}

    {#each DEVS as { name, link }, index}
      <a href={link} target="_blank" class="link-light">{name}</a>{#if index < DEVS.length - 1},&nbsp;{/if}
    {/each}
  </p>
  <p class="mt-3 ms-2 fw-lighter">
    {$_('footer.website_is')}
    <a href={REPO_LINK} target="_blank" class="link-light">open source</a>.
  </p>
</footer>

<style>
  footer {
    background: #4D49E3;
  }

  footer :global(a) {
    color: white !important;
  }


  li:not(:first-child)::before {
    content: "|";
    margin: 0 .3rem;
  }
</style>