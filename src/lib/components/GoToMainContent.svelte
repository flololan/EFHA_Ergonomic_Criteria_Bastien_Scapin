<script lang="ts">
  import { _ } from 'svelte-i18n'
</script>

<a
  href="#mainContent"
  class="position-absolute top-0 start-0 btn btn-outline-secondary bg-light text-primary m-2 visually-hidden-focusable"
>
  {$_('goto_main_content')}
</a>

<style lang="scss">
  a {
    z-index: 5;
  }
</style>
