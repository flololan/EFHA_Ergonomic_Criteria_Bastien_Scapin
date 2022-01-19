<script lang="ts">
  import { _ } from "svelte-i18n";

  import Footer from "$lib/components/Footer.svelte"
  import { dyslexicMode, prefersReducedMotion } from "$lib/stores";
</script>

<main id="mainContent" class="container mb-5">
  <h1 class="mt-5">{$_('settings')}</h1>

  <ul class="list-unstyled mt-5 ps-5">
    <li class="fs-4">
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="prefersReducedMotionSwitch" bind:checked={$prefersReducedMotion}>
        <label class="form-check-label" for="prefersReducedMotionSwitch">
          {$_('settings_page.reduced_motion')}
        </label>
      </div>
    </li>
    <li class="fs-4">
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="dyslexicModeSwitch" bind:checked={$dyslexicMode}>
        <label class="form-check-label" for="dyslexicModeSwitch">
          {$_('settings_page.dyslexic_mode')}
        </label>
      </div>
    </li>
  </ul>
</main>

<Footer />