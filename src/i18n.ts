import { register, init, getLocaleFromNavigator } from 'svelte-i18n'

register('en', () => import('./localizations/en.json'))
register('fr', () => import('./localizations/fr.json'))

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator()?.slice(0, 2),
})
