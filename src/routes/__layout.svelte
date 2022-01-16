<script context="module" lang="ts">
  import { waitLocale } from 'svelte-i18n'
  import CookieBanner from '$lib/components/CookieBanner.svelte'
  import '../i18n'

  export async function load(): Promise<Record<string, never>> {
    await waitLocale()

    return {}
  }
</script>

<script lang="ts">
  import GoToMainContent from '$lib/components/GoToMainContent.svelte'
  import { prefersReducedMotion, screen } from '$lib/stores'

  import '../styles/global.scss'

  let windowHeight: number
  let windowWidth: number

  const setPrefersReducedMotion = (): void => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const withoutAnimation = !mediaQuery || mediaQuery.matches
    prefersReducedMotion.set(withoutAnimation)

    mediaQuery.addEventListener("change", () => {
      const withoutAnimation = mediaQuery.matches
      prefersReducedMotion.set(withoutAnimation)
    });
  }

  setPrefersReducedMotion()

  $: {
    screen.update(() => ({
      height: windowHeight,
      width: windowWidth,
      device: windowWidth >= 768 ? 'computer' : 'mobile',
    }))
  }
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />
<CookieBanner />

<GoToMainContent />
<slot />
