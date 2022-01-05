import { register, init } from 'svelte-i18n'

register('English', () => import('./localizations/en.json'))
register('Français', () => import('./localizations/fr.json'))

init({
  fallbackLocale: 'English',
  initialLocale: 'English'
})
