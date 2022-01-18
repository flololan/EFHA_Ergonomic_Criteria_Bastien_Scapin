<script lang="ts">
  import { _, locale } from 'svelte-i18n'

  import Gear from '$lib/svg/Gear.svelte'

  export let path: string
</script>

<li class="nav-item">
  <a
    class="nav-link"
    class:active={path.includes('/criteria')}
    rel="prefetch"
    href={`/${$locale}/criteria`}>{$_('criteria')}</a
  >
</li>
<li class="nav-item">
  <a
    class="nav-link"
    class:active={path.endsWith('contact')}
    rel="prefetch"
    href={`/${$locale}/contact`}>{$_('contact')}</a
  >
</li>
<li class="nav-item">
  <a
    class="nav-link ms-2"
    class:active={path.endsWith('settings')}
    rel="prefetch"
    href={`/${$locale}/settings`}
		aria-label={$_('settings')}
  >
    <span class="d-md-none" aria-hidden="true">
      <Gear />
    </span>
    <span class="d-none d-md-inline">
      {$_('settings')}
    </span>
  </a>
</li>

<style>
  li {
    display: block;
  }

  .nav-link.active,
  a:hover {
    text-decoration: underline;
    color: black;
  }

  a {
    display: block;
    text-decoration: none;
    padding: 1em 0.5em;
    color: black;
  }

	@media (max-width: 767px) {
    a {
    	padding: 1em 0.2em;
    }
  }
</style>
