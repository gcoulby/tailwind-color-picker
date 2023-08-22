<template>
  <div>
    <div id="controls mt-3 ">
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
                <KeyCombo :combo="combo" />
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
