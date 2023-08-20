<template>
  <button
    :class="[
      'mx-auto',
      'p-2',
      'border',
      'border-stone-800',
      'bg-sky-500',
      'dark:bg-indigo-900',
      'text-gray-800',
      'dark:text-white',
      'hover:bg-sky-600',
      'dark:hover:bg-indigo-800',
      'rounded-md',
      'focus:outline-none',
    ]"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style scoped></style>
