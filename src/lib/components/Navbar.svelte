<script>
  import LocalisationSelect from "./LocalisationSelect.svelte";
  import Links from "./Links.svelte";

  export let segment
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
		z-index: 2;
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
    <a id="brand" rel="prefetch" class="p-0 d-flex align-contents-center link-dark" href="/">
			<img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Restapify icon">
			<h1 class="d-none d-md-block ms-1 mb-0 fs-4">A title</h1>
    </a>
    <ul class="d-flex ms-auto mb-0">
      <Links {segment} />
			<li class="nav-item d-none d-md-flex align-items-center">
				<LocalisationSelect />
      </li>
    </ul>
  </div>
</nav>