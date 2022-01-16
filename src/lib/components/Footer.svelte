<script>
  import { REPO_LINK } from '$lib/const';
  import { page } from '$app/stores'

	import Links from './Links.svelte'

  $: path = $page.url.pathname
</script>

<footer class="d-flex flex-column align-items-center mt-5 mx-0 py-4 px-1 px-md-5 bg-light">
  <ul class="d-flex ms-0 ps-0 mb-0">
    <Links {path} />
  </ul>
  <p class="mb-0 ms-2">Build and maintained with ❤️ &nbsp;by <a href="https://github.com/johannchopin" target="_blank">@johannchopin</a></p>
  <p class="mt-0 ms-2">This website is <a href={REPO_LINK} target="_blank">open source</a>.</p>
</footer>