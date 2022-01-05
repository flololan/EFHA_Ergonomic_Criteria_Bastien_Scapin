<script lang="ts">
  import type { SvelteComponent } from 'svelte'

  interface SelectOption {
    value: string
    label: string
  }

  let className = ''
  export { className as class }
  export let value: string | undefined
  export let values: string[] | SelectOption[]
  let selectOptions: SelectOption[]
  export let icon: SvelteComponent | undefined

  let selectedLabel: string

  // type any as typescript does not infer value as a string
  $: selectOptions = (typeof values[0] === 'string') ? values.map((v: any) => ({
    value: v,
    label: v
  })) : values as unknown as SelectOption[]

  $: selectedLabel = selectOptions.find((_value) => {
    return _value.value === value
  })?.label
</script>

<div
  class={`select relative group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none bg-white shadow-sm text-gray-900 cursor-pointer flex items-center ${className}`}
  title="Update language"
>
  <select bind:value class="opacity-0 p-0 absolute w-full h-full">
    {#each selectOptions as { value, label }}
      <option {value}>{label}</option>
    {/each}
  </select>

  {#if icon}
     <svelte:component this={icon} />
  {/if}
  <span class="label ml-1">{selectedLabel}</span>
</div>

<style lang="scss">
  select {
    opacity: 0;
    cursor: pointer;
  }
</style>