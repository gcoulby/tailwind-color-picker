<template>
  <img class="w-8 inline" src="../assets/click_icon.svg" width="40" v-if="keyName == 'click'" />
  <div class="border border-slate-300 w-fit p-2 rounded-lg text-slate-300 inline-block" v-else>
    {{ keyName }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    keyName: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
