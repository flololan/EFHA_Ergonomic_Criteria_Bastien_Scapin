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
  import { dyslexicMode, prefersReducedMotion, screen } from '$lib/stores'
  import { DYSLEXIC_CLASSNAME } from '$lib/const';

  import '../styles/global.scss'

  let windowHeight: number
  let windowWidth: number

  const initPrefersReducedMotionStore = (): void => {
    // bind prefersReducedMotion to localStorage
    prefersReducedMotion.subscribe((value) => {
      window.localStorage.setItem('prefersReducedMotion', JSON.stringify(value));
    })

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let storedValue = window.localStorage.getItem('prefersReducedMotion')
    prefersReducedMotion.set(storedValue ? JSON.parse(storedValue) : false)

    mediaQuery.addEventListener("change", () => {
      const withoutAnimation = mediaQuery.matches
      prefersReducedMotion.set(withoutAnimation)
    });
  }

  const initDyslexicModeStore = (): void => {
    const bodyClassList = document.body.classList
  
    // bind dyslexicMode to localStorage
    dyslexicMode.subscribe((value) => {
      if (value) {
        bodyClassList.add(DYSLEXIC_CLASSNAME)
      } else {
        bodyClassList.remove(DYSLEXIC_CLASSNAME)
      }

      window.localStorage.setItem('dyslexicMode', JSON.stringify(value))
    })

    let storedValue = window.localStorage.getItem('dyslexicMode')
    dyslexicMode.set(storedValue ? JSON.parse(storedValue) : false)
  }


  $: {
    screen.update(() => ({
      height: windowHeight,
      width: windowWidth,
      device: windowWidth >= 768 ? 'computer' : 'mobile',
    }))
  }

  initPrefersReducedMotionStore()
  initDyslexicModeStore()
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />
<CookieBanner />

<GoToMainContent />
<slot />
