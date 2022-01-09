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

<div class=" flex items-center justify-center w-screen h-screen">
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-7xl text-indigo-600">Error {status}</h1>

    <p class="mb-2 text-2xl font-bold text-center text-gray-800">
      <span class="text-red-500">Oops!</span> {error.message}
    </p>

    <a
      href="/"
      class="px-6 py-2 mt-6 text-sm font-semibold text-blue-800 bg-blue-100"
      >Go home</a
    >
  </div>
</div>