<template>
  <div>
    <div id="controls mt-3 ">
      <label class="relative inline-flex items-center cursor-pointer border-slate-700 pb-6 text-slate-500 my-4 w-full">
      <input type="checkbox" class="sr-only peer" :checked="environment" @change="toggleEnvironment($event)" />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none ring-1 ring-stone-800 peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-stone-800 rounded-full peer dark:bg-gray-950 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
      ></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">is MACOS</span>
    </label>
      <div class="border-b border-slate-700 pb-6 text-slate-500 mb-4">
        <table class="table-fixed text-left">
          <thead>
            <tr>
              <th>Combo</th>
              <th>Prefix</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="combo in combos" v-bind:key="combo.id">
              <td class="pe-6">
                <KeyCombo :combo="combo" :environment="environment"/>
              </td>
              <td class="pe-6">
                <FormControl :value="combo.prefix" @input="updatePrefix($event, combo.id)"></FormControl>
              </td>
              <td v-if="combo.prefix === '!hex'">#64748b</td>
              <td v-else>{{ combo.prefix }}slate-500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { KeyCombination } from "@/interfaces";
import { defineComponent } from "vue";
import FormControl from "./FormControl.vue";
import KeyCombo from "./KeyCombo.vue";

export default defineComponent({
  props: {
    combos: {
      type: Array as () => KeyCombination[],
      required: true,
    },
    updatePrefix: {
      type: Function,
      required: true,
    },
    environment: {
      type: Boolean,
      required: true,
      default: true,
    },
    toggleEnvironment: {
      type: Function,
      required: true,
    },
  },
  components: {
    KeyCombo,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
