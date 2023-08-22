<template>
  <pre class="p-4 text-white font-bold"><code class="language-js "><slot></slot></code>
    </pre>
</template>

<script lang="ts">
import Prism from "prismjs";
export default {
  name: "PrismCode",
  mounted() {
    Prism.highlightAll();
  },
};
</script>
