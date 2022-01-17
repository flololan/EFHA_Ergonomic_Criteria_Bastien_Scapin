

<script lang="ts">
  import { _ } from 'svelte-i18n'

  import PersonBadge from '$lib/svg/PersonBadge.svelte'
  import Peoples from '$lib/svg/Peoples.svelte'
  import { prefersReducedMotion } from '$lib/stores';

  $: STATS = [
    {
      icon: PersonBadge,
      colorType: 'success',
      value: 99.999,
      unit: '%',
      label: $_('homepage.satisfied_client')
    },
    {
      icon: Peoples,
      colorType: 'info',
      value: 3,
      label: $_('homepage.team')
    },
    {
      icon: Peoples,
      colorType: 'danger',
      value: 25,
      label: $_('homepage.criteria_to_explore')
    }
  ]
</script>

<section class="stats container mt-5">
  <h2 class="mt-5 fs-3 mb-3">
    {$_('homepage.stats_title')}
  </h2>

  <ul class="row pb-5 mb-5 list-unstyled">
    {#each STATS as { icon, value, unit, label, colorType }, index}
      <li class="col-12 col-md-4">
        <div
          class="d-flex py-3 my-3 my-lg-0 justify-content-center"
          data-aos={!$prefersReducedMotion && "zoom-in-up"}
        >
          <div class={`me-2 text-${colorType}`} aria-hidden="true">
            <svelte:component this={icon} />
          </div>
          <div>
            <p class="font-weight-bold text-dark mb-0 fs-4 lh-1">
              <span class="countup fw-bold" id={value.toString()}>{value}</span>{#if unit}{unit}{/if}
              <br>
              <span class="fs-5">{label}</span>
            </p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  .stats :global(svg) {
    width: 100%;
    height: 50px;
  }
</style>