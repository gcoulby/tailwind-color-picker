<template>
  <PageTemplate>
    <ToggleArea :showCustomPalettes="showCustomPalettes">
      <template v-slot:key_bindings>
        <KeyBindings :combos="combos" :updatePrefix="updatePrefix" :environment="isMacOS" :toggleEnvironment="toggleIsMacOS"/>
      </template>
      <template v-slot:palette_creator>
        <PaletteCreator :addCustomColorPalette="addCustomColorPalette" :environment="isMacOS"/>
      </template>
      <template v-slot:code_exporter>
        <CodeExporter :colorPalettes="customColorPalettes" />
      </template>
    </ToggleArea>
    <!-- <KeyBindings :combos="combos" :showControls="showControls" :toggleControls="toggleControls" :updatePrefix="updatePrefix" /> -->
    <label class="relative inline-flex items-center cursor-pointer border-b border-slate-700 pb-6 text-slate-500 mb-4 w-full">
      <input type="checkbox" class="sr-only peer" :value="showCustomPalettes" @change="toggleShowCustomPalette($event)" />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none ring-1 ring-stone-800 peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-stone-800 rounded-full peer dark:bg-gray-950 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
      ></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Custom Palette</span>
    </label>
    <ColorPaletteList :colorPalettes="colorPalettes" :combos="combos" v-if="!showCustomPalettes" :environment="isMacOS"/>
    <div v-else>
      <ColorPaletteList
        :colorPalettes="customColorPalettes"
        :combos="combos"
        :showDelete="true"
        :deleteCustomColorPalette="deleteCustomColorPalette"
        :environment="isMacOS"
      />
    </div>
  </PageTemplate>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { KeyCombination } from "@/interfaces";
import PaletteCreator from "./components/PaletteCreator.vue";
import KeyBindings from "./components/KeyBindings.vue";
import ColorPaletteList from "./components/ColorPaletteList.vue";
import PageTemplate from "./components/PageTemplate.vue";
import ColorPaletteDefinitions from "@/data/color-palette-definitions.json";
import KeyBindingDefinitions from "@/data/key-binding-definitions.json";
import { IColorPalette } from "@/interfaces";
import CodeExporter from "./components/CodeExporter.vue";
import ToggleArea from "./components/ToggleArea.vue";

export default defineComponent({
  name: "App",
  components: {
    PageTemplate,
    PaletteCreator,
    KeyBindings,
    ColorPaletteList,
    CodeExporter,
    ToggleArea,
  },
  setup() {
    const showControls = ref(false);
    const showCustomPalettes = ref(false);
    const toggleControls = () => {
      showControls.value = !showControls.value;
    };
    const isMacOS = ref(true);

    const combos = ref(KeyBindingDefinitions as KeyCombination[]);

    const updatePrefix = (event: Event, id: string) => {
      const target = event.target as HTMLInputElement;
      const combo = combos.value.find((combo) => combo.id === id);
      if (combo) {
        combo.prefix = target.value;
      }
      combos.value = [...combos.value];
      localStorage.setItem("tailwind_color_picker_combos", JSON.stringify(combos.value));
    };

    const toggleShowCustomPalette = (event: Event) => {
      const target = event.target as HTMLInputElement;
      showCustomPalettes.value = target.checked;
    };

    const toggleIsMacOS = (event: Event) => {
      const target = event.target as HTMLInputElement;
      isMacOS.value = target.checked;
      localStorage.setItem("tailwind_color_picker_environment", isMacOS.value ? "mac" : "windows");
    };

    const colorPalettes = ref(ColorPaletteDefinitions);
    const customColorPalettes = ref<IColorPalette[]>([]);

    const addCustomColorPalette = (colorPalette: IColorPalette) => {
      console.log("addCustomColorPalette", colorPalette);
      colorPalette = { ...colorPalette };
      if (customColorPalettes.value.find((palette) => palette.name === colorPalette.name)) {
        //overwrite
        customColorPalettes.value = customColorPalettes.value.map((palette) => {
          if (palette.name === colorPalette.name) {
            return colorPalette;
          }
          return palette;
        });
      } else {
        customColorPalettes.value.push(colorPalette);
      }
      customColorPalettes.value = [...customColorPalettes.value];
      localStorage.setItem("tailwind_color_picker_custom_palettes", JSON.stringify(customColorPalettes.value));
    };

    const deleteCustomColorPalette = (colorPalette: IColorPalette) => {
      customColorPalettes.value = customColorPalettes.value.filter((palette) => palette.name !== colorPalette.name);
      customColorPalettes.value = [...customColorPalettes.value];
      localStorage.setItem("tailwind_color_picker_custom_palettes", JSON.stringify(customColorPalettes.value));
    };

    const savedCombos = localStorage.getItem("tailwind_color_picker_combos");
    const savedCustomPalettes = localStorage.getItem("tailwind_color_picker_custom_palettes");
    const savedEnvironment = localStorage.getItem("tailwind_color_picker_environment");

    if (savedCombos) {
      combos.value = JSON.parse(savedCombos);
    }
    if (savedCustomPalettes) {
      customColorPalettes.value = JSON.parse(savedCustomPalettes);
    }
    if (savedEnvironment) {
      isMacOS.value = savedEnvironment === "mac";
    }

    return {
      colorPalettes,
      showControls,
      toggleControls,
      combos,
      updatePrefix,
      showCustomPalettes,
      toggleShowCustomPalette,
      customColorPalettes,
      addCustomColorPalette,
      deleteCustomColorPalette,
      isMacOS,
      toggleIsMacOS
    };
  },
});
</script>

<style lang="scss">
html,
body,
#app {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
