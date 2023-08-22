<template>
  <div>
    <div class="grid grid-col gap-x-2 gap-y-8 sm:grid-cols-1 mt-4 border-b border-slate-700 pb-12 mb-5">
      <div v-if="colorPalettes.length === 0">
        <h3 class="text-2xl font-bold text-slate-200">No custom color palettes found</h3>
        <h4 class="text-slate-600 text-base font-bold">Add palettes using the palette creator above</h4>
      </div>
      <ColorPalette
        v-for="(colorPalette, index) in colorPalettes"
        :colorPalette="colorPalette"
        v-bind:key="`palettes_${index}`"
        :keyCombos="combos"
        :showDelete="showDelete"
        :deleteCustomColorPalette="deleteCustomColorPalette"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColorPalette from "./ColorPalette.vue";
import { IColorPalette, KeyCombination } from "@/interfaces";

export default defineComponent({
  props: {
    colorPalettes: {
      type: Array as () => IColorPalette[],
      required: true,
    },
    combos: {
      type: Array as () => KeyCombination[],
      required: true,
    },
    showDelete: {
      type: Boolean,
      required: false,
      default: false,
    },
    deleteCustomColorPalette: {
      type: Function,
      required: false,
    },
  },
  components: {
    ColorPalette,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
