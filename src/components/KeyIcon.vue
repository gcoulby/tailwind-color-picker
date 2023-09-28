<template>
  <img class="w-8 inline" src="../assets/click_icon.svg" width="40" v-if="keyName == 'click'" />
  <div class="border border-slate-300 w-fit p-2 rounded-lg text-slate-300 inline-block" v-else>
    <!-- {{ isMacOS && keyName === "ctrl" ? "cmd" : keyName }} -->
    <template v-if="environment && keyName === 'ctrl'">
      ⌘
    </template>
    <template v-else-if="environment && keyName === 'alt'">
      ⌥
    </template>
    <template v-else-if="keyName === 'shift'">
      ⇧
    </template>
    <template v-else>
      {{keyName}}
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    keyName: {
      type: String,
      required: true,
    },
    environment: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
