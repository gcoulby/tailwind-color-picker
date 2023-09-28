<template>
  <div class="select-none">
    <div class="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
      {{ colorPalette.name }}
      <span class="text-green-500 dark:text-green-500">{{ copied ? "  ✅" : "" }}</span>
    </div>
    <div :class="['grid', 'mt-3', 'grid-cols-1', showDelete ? 'sm:grid-cols-12' : 'sm:grid-cols-11', 'gap-y-3', 'gap-x-2', 'sm:mt-2', '2xl:mt-0']">
      <div class="relative flex" v-for="(color, index) in colorPalette.colors" v-bind:key="`color_palette_${index}`">
        <div class="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
          <div
            :class="['h-10', 'w-10', 'rounded', 'dark:ring-1', 'dark:ring-inset', 'dark:ring-white/10', 'sm:w-full']"
            :style="`background-color: ${color.hex}`"
            @click="copyColor($event, color)"
          ></div>
          <div class="px-0.5">
            <div class="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">{{ color.shade }}</div>
            <div class="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
              {{ color.hex }}
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex" v-if="showDelete">
        <div class="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
          <ButtonControl
            v-if="deleteCustomColorPalette"
            class="w-full bg-red-700 dark:bg-red-700 hover:bg-red-600 hover:dark:bg-red-600"
            @click="deleteCustomColorPalette(colorPalette)"
            ><span class="font-bold">X</span></ButtonControl
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IColorPalette, ColorValue, KeyCombination } from "@/interfaces";
import ButtonControl from "@/ui/ButtonControl.vue";

export default defineComponent({
  props: {
    colorPalette: {
      type: Object as () => IColorPalette,
      required: true,
    },
    keyCombos: {
      type: Array as () => KeyCombination[],
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
    environment: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  setup(props) {
    const copied = ref(false);
    const copyColor = (e: MouseEvent, color: ColorValue) => {
      console.log("copyColor", e, color, props.environment)
      e.preventDefault();
      e.stopPropagation();
      console.log("keys", e)
      let ctrl = props.environment ? e.metaKey : e.ctrlKey;
      let shift = e.shiftKey;
      let alt = e.altKey;
      let keyCombos = props.keyCombos;
      let combo = keyCombos?.find((combo) => {
        return combo.ctrl === ctrl && combo.shift === shift && combo.alt === alt;
      });
      if (!combo) return;
      let txt = combo.prefix !== "!hex" ? `${combo.prefix}${props.colorPalette.name}-${color.shade}` : color.hex;
      navigator.clipboard.writeText(txt);
      console.log("copied", txt);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 1000);
    };
    return {
      copyColor,
      copied,
    };
  },
  components: { ButtonControl },
});
</script>

<style scoped></style>
