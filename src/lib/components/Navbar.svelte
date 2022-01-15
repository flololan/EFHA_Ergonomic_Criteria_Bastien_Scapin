<script lang="ts">
  import { page } from '$app/stores'
  import { _ } from 'svelte-i18n'
  import { TITLE } from '$lib/const'

  import LocalisationSelect from "./LocalisationSelect.svelte";
  import Links from "./Links.svelte";

  $: path = $page.url.pathname
  $: logoAlt = $_('icon_alt', { values: { website: window.location.hostname }})
</script>

<style lang="scss">
	.navbar {
		position: relative;
		display: block;
	}

	h1 {
		line-height: 2.5em;
	}

	#brand {
		position: absolute;

		img {
			width: 60px;
		}
	}

	nav {
		z-index: 4;
	}

	.navbar-brand img {
		width: 25%;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		color: black;
	}
</style>


<nav class="navbar navbar-expand-lg px-md-4 pt-0 pb-0 navbar-light bg-light shadow">
  <div class="container-fluid">
    <a id="brand" rel="prefetch" class="p-0 d-flex align-contents-center link-dark" aria-label={logoAlt} href="/">
			<img src="/assets/icon.svg" class="p-2" alt={`${window.location.hostname} page logo`}>
			<h1 class="d-none d-md-block ms-1 mb-0 fs-4">{TITLE}</h1>
    </a>
    <ul class="d-flex ms-auto mb-0">
      <Links {path} />
    </ul>
    <LocalisationSelect />
  </div>
</nav>