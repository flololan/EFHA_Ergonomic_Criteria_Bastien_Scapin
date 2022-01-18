import { writable } from 'svelte/store'

interface Screen {
  width: number
  height: number
  device?: 'mobile' | 'computer'
}

const createScreenStore = () => {
  const { subscribe, update, set } = writable<Screen>({} as Screen)

  return {
    subscribe,
    update,
    set
  }
}


interface AvailibityStore {
  isFocusTrapAvailable: boolean;
}

const createAvailabilityStore = () => {
  const { subscribe, update, set } = writable<AvailibityStore>({
    isFocusTrapAvailable: true
  } as AvailibityStore)

  return {
    subscribe,
    update,
    set
  }
}

const createMotionReduceStore = () => {
  const { subscribe, update, set } = writable<boolean | null>(null)

  return {
    subscribe,
    update,
    set
  }
}

const dyslexicModeStore = () => {
  const { subscribe, update, set } = writable<boolean | null>(null)

  return {
    subscribe,
    update,
    set
  }
}


export const screen = createScreenStore()
export const availabilityStore = createAvailabilityStore()
export const prefersReducedMotion = createMotionReduceStore()
export const dyslexicMode = dyslexicModeStore()