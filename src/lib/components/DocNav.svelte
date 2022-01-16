<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { focusTrap } from 'svelte-focus-trap'

  import type { NavStructure } from '$lib/type'
  import { screen } from '$lib/stores'

  import CloseDocNavBtn from './CloseDocNavBtn.svelte'
  import DocNavItem from './DocNavItem.svelte'

  export let nav: NavStructure
  export let showSidebar = true

  const handleEscapePress = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && showSidebar && $screen.device === 'mobile') {
      showSidebar = false
    }
  }
</script>

<svelte:window on:keydown={handleEscapePress} />

<nav
  class="position-relative doc-nav px-3 pt-4 border-end bg-light h-100"
  class:d-none={!showSidebar}
  aria-live="polite"
>
  {#if showSidebar}
    <div use:focusTrap class="h-100">
      <CloseDocNavBtn bind:showSidebar class="top-0 end-0" />
      <h2 class="pb-3">{$_('criteria')}</h2>
      <div class="h-100 overflow-scroll">
        <DocNavItem
          nav={nav.children}
          on:navItemClicked={() => {
            if ($screen.device === 'mobile') {
              showSidebar = false
            }
          }}
        />
      </div>
    </div>
  {/if}
</nav>

<style>
  nav {
    z-index: 2;
  }
  @media (max-width: 767px) {
    nav {
      position: absolute !important;
      width: 100%;
    }
  }
</style>
