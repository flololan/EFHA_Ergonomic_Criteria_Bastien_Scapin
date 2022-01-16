<script lang="ts">
	import { _ } from "svelte-i18n";
	import { locale } from "svelte-i18n";

	export let path: string
</script>

<li class="nav-item">
	<a
		class="nav-link"
		class:active={path.includes('/criteria')}
		rel="prefetch"
		href={`/${$locale}/criteria`}>{$_("criteria")}</a
	>
</li>
<li class="nav-item">
	<a
		class="nav-link"
		class:active={path.endsWith('contact')}
		rel="prefetch"
		href={`/${$locale}/contact`}>{$_("contact")}</a
	>
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
</style>

