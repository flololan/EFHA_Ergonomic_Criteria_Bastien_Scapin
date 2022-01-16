

<script lang="ts">
  import { onMount } from 'svelte'
  import { _, locale } from 'svelte-i18n'
  import { CountUp } from 'countup.js'

  import PersonBadge from '$lib/svg/PersonBadge.svelte'
  import Peoples from '$lib/svg/Peoples.svelte'

  const STATS = [
    {
      icon: PersonBadge,
      colorType: 'success',
      value: 100,
      unit: '%',
      label: 'Satisfied clients'
    },
    {
      icon: Peoples,
      colorType: 'info',
      value: 3,
      label: 'Team members'
    },
    {
      icon: Peoples,
      colorType: 'danger',
      value: 142,
      label: 'Criteria to explore'
    }
  ]

  const initCountupAnimation = (): void => {
    document.querySelectorAll('.countup').forEach((elmt) => {
      const id = elmt.getAttribute('id') as string
      const value = Number(elmt.innerHTML)

      const countUp = new CountUp(id, value)
      countUp.start();
    })
  }

  onMount(() => {
    initCountupAnimation()
  })
</script>

<div class="stats container">
  <div class="row pb-5 mb-5">
    {#each STATS as { icon, value, unit, label, colorType }}
      <div class="col-12 col-md-4">
        <div
          class="d-flex py-3 my-3 my-lg-0 justify-content-center"
        >
          <div class={`me-2 text-${colorType}`}>
            <svelte:component this={icon} />
          </div>
          <div>
            <h4 class="font-weight-bold text-dark mb-0">

              <span class="countup fw-bold" id={value.toString()}>{value}</span>{#if unit}{unit}{/if}
              <br>
              <span class="fs-5">{label}</span>
            </h4>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .stats :global(svg) {
    width: 100%;
    height: 50px;
  }
</style>