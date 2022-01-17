<script lang="ts">
  import { _ } from "svelte-i18n"

  import Heart from "$lib/svg/Heart.svelte"
  import Lightning from "$lib/svg/Lightning.svelte"
  import ShieldCheck from "$lib/svg/ShieldCheck.svelte"
  import { prefersReducedMotion } from "$lib/stores"

  $: CRITERIA = [
    {
      icon: ShieldCheck,
      title: $_('homepage.criteria.efficiency.title'),
      text: $_('homepage.criteria.efficiency.text')
    },
    {
      icon: Lightning,
      title: $_('homepage.criteria.efficient.title'),
      text: $_('homepage.criteria.efficient.text')
    },
    {
      icon: Heart,
      title: $_('homepage.criteria.satisfaction.title'),
      text: $_('homepage.criteria.satisfaction.text')
    }
  ]
</script>

<section id="goals" class="container">
  <div class="row">
    <div class="col-12">
      <h2 class="text-dark mb-5 fs-3">
        <span class="fw-light fs-5">{$_('homepage.goals.helps_to')}</span>
        <br>
        {$_('homepage.goals.make_usable')}
      </h2>
    </div>
  </div>
  <ul class="row aos-init aos-animate list-unstyled">
    {#each CRITERIA as { icon, title, text}}
      <li
        class="col-sm-4 text-center text-md-start mt-2"
        data-aos={!$prefersReducedMotion && "fade-up"}
      >
        <span aria-hidden="true">
          <svelte:component this={icon} />
        </span>
        <h3 class="text-dark mb-3 mt-4 fw-bold fs-4">
          {title}
        </h3>
        <p>
          {text}
        </p>
      </li>
    {/each}
  </ul>
</section>


<style>
  #goals :global(svg) {
    width: 50px;
    height: 50px;
  }

  #goals li:nth-of-type(1) :global(svg) {
    color: #3c37f1;
  }
  #goals li:nth-of-type(2) :global(svg) {
    color: #FC9A30;
  }
  #goals li:nth-of-type(3) :global(svg) {
    color: #A449FD;
  }
</style>