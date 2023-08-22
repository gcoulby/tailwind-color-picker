<template>
  <div>
    <p class="mb-4 text-slate-300 italic">
      If the code has not updated after changing, adding or deleting a palette, click <span class="font-bold">Hide Code Exporter</span> then
      <span class="font-bold">Show Code Exporter</span> to refresh.
    </p>
    <div class="pt-2 bg-slate-800 shadow-lg group rounded-2xl overflow-hidden mb-6">
      <div class="flex text-slate-400 text-xs leading-6">
        <div class="flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
          tailwind.config.js
        </div>
        <div class="flex-auto bg-slate-700/50 border border-slate-500/30 rounded-tl">
          <ButtonControl class="w-40 dark:bg-blue-500 hover:dark:bg-blue-600" @click="copyToClipboard">📋 Copy to clipboard</ButtonControl>
        </div>
      </div>
      <div class="children:my-0 children:!shadow-none children:bg-transparent">
        <PrismCode class="language-js">{{ code }}</PrismCode>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonControl from "@/ui/ButtonControl.vue";
import Prism from "prismjs";
import "prismjs/components/prism-javascript.js";
import PrismCode from "@/ui/PrismCode.vue";
import { IColorPalette } from "@/interfaces";

export default defineComponent({
  components: {
    ButtonControl,
    PrismCode,
  },
  props: {
    colorPalettes: {
      type: Array as () => IColorPalette[],
      required: true,
    },
  },

  setup(props) {
    const showCodeExporter = ref(false);

    const code = ref("");

    const updateCodeString = () => {
      let newCode = "/** @type {import('tailwindcss').Config} */";
      newCode += "\nmodule.exports = {";
      newCode += "\n  theme: {";
      newCode += "\n    extend: {";
      newCode += "\n      colors: {";

      props.colorPalettes.forEach((colorPalette) => {
        newCode += `\n        ${colorPalette.name}: {`;
        colorPalette.colors.forEach((color) => {
          newCode += `\n          ${color.shade}: '${color.hex}',`;
        });
        newCode += "\n        },";
      });

      newCode += "\n      },";
      newCode += "\n    },";
      newCode += "\n  },";
      newCode += "\n};";
      code.value = newCode;
      Prism.highlightAll();
    };

    const copyToClipboard = () => {
      navigator.clipboard.writeText(code.value);
    };

    updateCodeString();
    return {
      showCodeExporter,
      code,
      copyToClipboard,
    };
  },
});
</script>

<style>
.token {
  margin: 0;
  padding: 0;
}
/* vs code dark colors for javascript */
.token.comment {
  color: #6a9955;
}
.token.string {
  color: #ce9178;
}
.token.keyword {
  color: #c586c0;
}
.token.operator {
  color: #d4d4d4;
}
.token.punctuation {
  color: #d4d4d4;
}
.token.number {
  color: #b5cea8;
}
.token.function {
  color: #dcdcaa;
}
.token.class-name {
  color: #4ec9b0;
}
.token.tag {
  color: #569cd6;
}
.token.attr-name {
  color: #9cdcfe;
}
.token.attr-value {
  color: #ce9178;
}
.token.property {
  color: #9cdcfe;
}
.token.variable {
  color: #9cdcfe;
}
.token.parameter {
  color: #9cdcfe;
}
.token.boolean {
  color: #569cd6;
}
.token.constant {
  color: #4ec9b0;
}
.token.important {
  color: #c586c0;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
</style>
