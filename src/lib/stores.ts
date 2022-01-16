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

export const screen = createScreenStore()

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

export const availabilityStore = createAvailabilityStore()
