<script context="module" lang="ts">
  import { getLocaleFromNavigator } from 'svelte-i18n'

  export async function load(): Promise<Record<string, string | number>> {
    return {
      status: 303,
      redirect: `/${getLocaleFromNavigator()?.slice(0, 2)}`,
    }
  }
</script>
