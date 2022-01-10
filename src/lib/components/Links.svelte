<script lang="ts">
  import { locale } from 'svelte-i18n'

	export let segment
</script>

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
</style>

<li class="nav-item">
  <a class="nav-link" class:active={segment === 'docs'} rel="prefetch" href={`/${$locale}/docs`}>Docs</a>
</li>
<li class="nav-item">
  <a class="nav-link" class:active={segment === 'deployment'} rel="prefetch" href={`/${$locale}/contacts`}>Contact</a>
</li>
