<script lang="ts">
  import { _ } from 'svelte-i18n'
</script>

<style>
  a {
    z-index: 5;
  }
</style>

<a href="#mainContent" class="position-absolute top-0 start-0 btn btn-outline-secondary bg-light m-2 visually-hidden-focusable">
  {$_('goto_main_content')}
</a>
