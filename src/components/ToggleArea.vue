<template>
  <div>
    <ButtonControl class="w-64 mb-4" @click="toggleControls(ToggleAreaType.KeyBindings)">
      {{ showBindings ? "Hide" : "Show" }} Controls
    </ButtonControl>
    <ButtonControl class="w-64 md:ml-4 mb-4" @click="toggleControls(ToggleAreaType.PaletteCreator)" v-if="showCustomPalettes">
      {{ showPaletteCreator ? "Hide" : "Show" }} Palette Creator
    </ButtonControl>
    <ButtonControl class="w-64 md:ml-4 mb-4" @click="toggleControls(ToggleAreaType.CodeExporter)" v-if="showCustomPalettes">
      {{ showCodeExporter ? "Hide" : "Show" }} Code Exporter
    </ButtonControl>

    <slot class="border-b border-slate-700 pb-6 text-slate-500 mb-4" name="key_bindings" v-if="showBindings"></slot>
    <slot class="border-b border-slate-700 pb-6 text-slate-500 mb-4" name="palette_creator" v-if="showCustomPalettes && showPaletteCreator"></slot>
    <slot class="border-b border-slate-700 pb-6 text-slate-500 mb-4" name="code_exporter" v-if="showCustomPalettes && showCodeExporter"></slot>
  </div>
</template>

<script lang="ts">
import ButtonControl from "@/ui/ButtonControl.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ToggleArea",
  props: {
    showCustomPalettes: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    enum ToggleAreaType {
      KeyBindings,
      PaletteCreator,
      CodeExporter,
    }
    const showBindings = ref(false);
    const showPaletteCreator = ref(false);
    const showCodeExporter = ref(false);

    const toggleControls = (toggleArea: ToggleAreaType) => {
      switch (toggleArea) {
        case ToggleAreaType.KeyBindings:
          showBindings.value = !showBindings.value;
          showPaletteCreator.value = false;
          showCodeExporter.value = false;
          break;
        case ToggleAreaType.PaletteCreator:
          showPaletteCreator.value = !showPaletteCreator.value;
          showBindings.value = false;
          showCodeExporter.value = false;
          break;
        case ToggleAreaType.CodeExporter:
          showCodeExporter.value = !showCodeExporter.value;
          showBindings.value = false;
          showPaletteCreator.value = false;
          break;
      }
    };

    return {
      ToggleAreaType,
      showBindings,
      showPaletteCreator,
      showCodeExporter,
      toggleControls,
    };
  },
  components: { ButtonControl },
});
</script>

<style scoped></style>
