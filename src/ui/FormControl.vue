<template>
  <input
    :class="[
      'w-11/12',
      'mx-auto',
      'p-2',
      'border',
      'border-stone-800',
      'bg-white',
      'dark:bg-stone-950',
      'text-gray-800',
      'dark:text-white',
      'rounded-md',
      'focus:outline-none',
    ]"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style scoped></style>
