<template>
  <div class="border-b border-slate-700 pb-4 mb-4">
    <div class="select-none">
      <div class="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
        <label for="name" class="w-40 inline-block text-slate-300">Name:</label>
        <FormControl id="name" label="Name" :value="colorPalette.name" @input="changePaletteName" placeholder="Palette Name" class="w-60" />
        
        <!-- <div class="my-4 block">
        <label for="hex" class="w-40 inline-block text-slate-300 ">Hex:</label>
        <FormControl id="hex" label="Hex" :value="customHex" @input="changePaletteHex" placeholder="Hex" class="w-60 uppercase" />
        </div> -->
        <div class="my-6 block">
          <label for="myRange" class="w-40 inline-block text-slate-300">Hue:</label>
          <input
            type="range"
            min="0"
            max="360"
            class="h-4 w-60"
            id="myRange"
            v-model="customHue"
            :style="`appearance: none;
            background: linear-gradient(
              to right,
              hsl(0, ${customSaturation}%, 50%),
              hsl(60, ${customSaturation}%, 50%),
              hsl(120, ${customSaturation}%, 50%),
              hsl(180, ${customSaturation}%, 50%),
              hsl(240, ${customSaturation}%, 50%),
              hsl(300, ${customSaturation}%, 50%),
              hsl(360, ${customSaturation}%, 50%)
            );`"
            @input="colorChange()"
          />
          <input 
            type="number"
            min="0"
            max="360"
            class="h-4 w-20 mx-auto ml-2 p-3 border border-stone-800 bg-white dark:bg-stone-950 text-gray-800 dark:text-white rounded-md focus:outline-none "
            id="myRangeNumber"
            v-model="customHue"
            @input="colorChange()"
          />
          
        </div>
        <div class="my-6 block">
          <label for="myRange" class="w-40 inline-block text-slate-300">Saturation:</label>
          <input
            type="range"
            min="0"
            max="100"
            class="h-4 w-60"
            id="myRange"
            v-model="customSaturation"
            :style="`appearance: none; background: linear-gradient(to right, hsl(0, 0%, 100%), hsl(${customHue}, ${customSaturation}%, 50%))`"
            @input="colorChange()"
          />
          <input 
            type="number"
            min="0"
            max="100"
            class="h-4 w-20 mx-auto ml-2 p-3 border border-stone-800 bg-white dark:bg-stone-950 text-gray-800 dark:text-white rounded-md focus:outline-none "
            id="myRangeNumber"
            v-model="customSaturation"
            @input="colorChange()"
          />
        </div>
      </div>
      <div class="grid grid-col gap-x-2 gap-y-8 sm:grid-cols-1 mt-4">
        <ColorPalette :colorPalette="colorPalette" :environment="environment"/>
      </div>
      <ButtonControl class="mt-6 mb-4" @click="addCustomColorPalette({ ...colorPalette })"
        ><span class="font-bold">📥</span> Add Palette</ButtonControl
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ColorPalette from "./ColorPalette.vue";
import { IColorPalette } from "@/interfaces";
import ButtonControl from "@/ui/ButtonControl.vue";

const shades = [98, 96, 91, 84, 65, 46, 34, 27, 17, 11, 4];

export default defineComponent({
  props: {
    addCustomColorPalette: {
      type: Function,
      required: true,
    },
    environment: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  setup(props) {
    const customHue = ref(180);
    const customSaturation = ref(100);
    const customHex = ref("00ebeb");
    const showPaletteCreator = ref(false);
    const colorPalette = ref<IColorPalette>({
      name: "custom",
      colors: [
        { shade: 50, hex: "#f8fafc" },
        { shade: 100, hex: "#f1f5f9" },
        { shade: 200, hex: "#e2e8f0" },
        { shade: 300, hex: "#cbd5e1" },
        { shade: 400, hex: "#94a3b8" },
        { shade: 500, hex: "#64748b" },
        { shade: 600, hex: "#475569" },
        { shade: 700, hex: "#334155" },
        { shade: 800, hex: "#1e293b" },
        { shade: 900, hex: "#0f172a" },
        { shade: 950, hex: "#020617" },
      ],
    });

    const toggleControls = () => {
      showPaletteCreator.value = !showPaletteCreator.value;
    };

    const changePaletteName = (e: Event) => {
      const target = e.target as HTMLInputElement;

      colorPalette.value.name = target.value;
      colorPalette.value = { ...colorPalette.value };
    };

    const hslToHex = (h: number, s: number, l: number) => {
      h /= 360;
      s /= 100;
      l /= 100;
      let r, g, b;
      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        const hue2rgb = (p: number, q: number, t: number) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const hexToHsl = (hex: string) => {
      hex = hex.replace(/^#/, "");
      const bigint = parseInt(hex, 16);
      let r = (bigint >> 16) & 255;
      let g = (bigint >> 8) & 255;
      let b = bigint & 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h,
        s,
        l = (max + min) / 2;
      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if(s < 0)
          s = ((s * -1) - 1) * 100;
        
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        if (h) h /= 6;
      }
      return [h, s, l];
    };

    const colorChange = (hslChange = true) => {
      if(hslChange)
        customHex.value = hslToHex(customHue.value, customSaturation.value, 50).replace("#", "");
      let newColorPallete = { ...colorPalette.value };
      newColorPallete.colors = newColorPallete.colors.map((color, i) => {
        color.hex = hslToHex(customHue.value, customSaturation.value, shades[i]);
        return { ...color };
      });
      colorPalette.value = newColorPallete;
    };

    colorChange();

    const changePaletteHex = (e: Event) => {

      const target = e.target as HTMLInputElement;
      
      customHex.value = target.value;
      customHex.value = customHex.value.replace("#", "");
      const [hue, saturation, lightness] = hexToHsl(customHex.value);
      
      console.log(hue, saturation, lightness)
      if(hue && saturation){
        customHue.value = hue * 360;
        customSaturation.value = saturation * 100;
        lightness === 50 ? colorChange() : null;
      }

      colorChange(false);
    };

    return {
      customHue,
      customSaturation,
      customHex,
      colorChange,
      colorPalette,
      changePaletteName,
      changePaletteHex,
      showPaletteCreator,
      toggleControls,
    };
  },
  components: { ColorPalette, ButtonControl },
});
</script>

<style scoped></style>
