<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>
<script lang="ts">
	export let status: number;
	export let error: Error;
</script>

<svelte:head>
	<title>Error {status} • PAGENAME</title>
</svelte:head>

<style>
	h1 {
		margin: 0 auto;
	}
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		text-align: center;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>


<div class="d-flex mt-5 justify-content-center w-100 h-100">
  <div class="d-flex flex-column align-items-center">
    <h1 class="font-bold text-primary mb-2">Error {status}</h1>

    <p class="mb-2 fs-2 font-bold text-center ">
      <span class="text-danger">Oops!</span> {error.message}
    </p>

    <a
      href="/"
      class="btn btn-outline-primary mt-5 w-fit-content fw-bold"
      >Go home</a
    >
  </div>
</div>