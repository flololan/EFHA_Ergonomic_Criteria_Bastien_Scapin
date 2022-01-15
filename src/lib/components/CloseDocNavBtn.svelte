<script lang="ts">
  import { _ } from "svelte-i18n";

  import X from '../svg/X.svelte'

  export let showSidebar: boolean

  let className = ''
  export { className as class }
</script>

<button
  class={`d-md-none btn btn-outline-dark text-dark bg-light position-absolute m-2 ${className}`}
  on:click={() => { showSidebar = false }}
  aria-label={$_('doc_nav.close')}
>
  <X />
</button>