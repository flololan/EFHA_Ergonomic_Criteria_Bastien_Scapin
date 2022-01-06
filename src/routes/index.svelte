<script context="module" lang="ts">
  export async function load(): Promise<Record<string, string|number>> {
    return {
      status: 303,
      redirect: '/en'
    }
  }
</script>
