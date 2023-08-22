<template>
  <div class="w-screen min-h-screen pb-10 bg-gradient-to-bl from-slate-900 from-10% via-slate-800 via-20% to-slate-900 to-40%">
    <div class="container w-10/12 mx-auto pt-12">
      <div class="flex flex-row gap-2 items-baseline">
        <img class="w-8 inline" src="../assets/palette_icon.svg" width="40" />
        <span class="text-3xl text-white font-bold">Tailwind Color Picker</span>
      </div>
      <h4 class="text-slate-600 text-base font-bold border-b border-slate-700 pb-4 mb-5">A color picker for Tailwind CSS</h4>
      <slot></slot>
      <div class="text-center text-slate-500">
        <span>Copyright &copy; Graham Coulby</span>
        <span class="block"
          >Title 'color swatch' icon by
          <a href="https://thenounproject.com/coquet_adrien/" target="_blank" ref="noopener noreferrer">Adrien Coquet</a></span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
