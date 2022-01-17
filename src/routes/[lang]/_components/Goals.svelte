<script lang="ts">
  import Heart from "$lib/svg/Heart.svelte";
  import Lightning from "$lib/svg/Lightning.svelte";
  import ShieldCheck from "$lib/svg/ShieldCheck.svelte";
  import { prefersReducedMotion } from "$lib/stores";

  const CRITERIA = [
    {
      icon: ShieldCheck,
      title: "Efficacité",
      text: "L’internaute doit réussir à réaliser l’action pour laquelle il a pénétré sur le site web de manière simple."
    },
    {
      icon: Lightning,
      title: "Efficient",
      text: "L’internaute doit pouvoir effectuer ses actions rapidement et de manière intuitive avec le moins d’erreurs possible."
    },
    {
      icon: Heart,
      title: "Satisfaction",
      text: "Les internautes doivent être satisfaits une fois leur action terminée et réalisée avec succès."
    }
  ]
</script>

<section id="goals" class="container">
  <div class="row">
    <div class="col-12">
      <h2 class="text-dark mb-5 fs-3">
        <span class="fw-light fs-5">Ce guide va vous aider à</span>
        <br>
        Rendre votre site <b>utilisable</b>.
      </h2>
    </div>
  </div>
  <ul class="row aos-init aos-animate list-unstyled">
    {#each CRITERIA as { icon, title, text}}
      <li
        class="col-sm-4 text-center text-md-start mt-2"
        data-aos={!$prefersReducedMotion && "fade-up"}
      >
        <span role="img" alt="">
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