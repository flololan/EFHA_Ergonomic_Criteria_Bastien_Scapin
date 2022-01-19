<script lang="ts">
  import { _ } from "svelte-i18n";

  import Footer from "$lib/components/Footer.svelte"
  import { dyslexicMode, prefersReducedMotion } from "$lib/stores";
</script>

<main id="mainContent" class="container mb-5">
  <h1 class="mt-5">{$_('credits')}</h1>

  <ul class="mt-5 ps-5">
    <li class="fs-5">
       <a href="https://www.flaticon.com/free-icons/ergonomic">Ergonomic icons created by Freepik - Flaticon</a>
    </li>
    <li class="fs-5">
      Scapin, D. L., & Bastien, J. M. C. (1997). Ergonomic criteria for evaluating the ergonomic quality of interactive systems. Behaviour & Information Technology, 16, 220-231.
    </li>
  </ul>
</main>

<Footer />