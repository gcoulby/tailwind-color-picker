<template>
  <div class="mb-4">
    <KeyIcon keyName="ctrl" v-if="combo.ctrl" :environment="environment"/>
    <span class="inline-block mx-2" v-if="combo.ctrl">+</span>
    <KeyIcon keyName="shift" v-if="combo.shift" :environment="environment"/>
    <span class="inline-block mx-2" v-if="combo.shift">+</span>
    <KeyIcon keyName="alt" v-if="combo.alt" :environment="environment"/>
    <span class="inline-block mx-2" v-if="combo.alt">+</span>
    <KeyIcon keyName="click" :environment="environment"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KeyIcon from "./KeyIcon.vue";
import { v4 } from "uuid";
import { KeyCombination } from "@/interfaces";

export default defineComponent({
  props: {
    combo: {
      type: Object as () => KeyCombination,
      required: true,
    },
    environment: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  setup() {
    const keyId = v4();
    return {
      keyId,
    };
  },
  components: { KeyIcon },
});
</script>

<style scoped></style>
