<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Iframe resizer example
    </h1>
    <p>Used for comparison and reverse-engineering.</p>

    <iframe
      id="iframe"
      src="/children/iframe-resizer-child"
    />
  </v-container>
</template>

<script setup lang="ts">
import 'iframe-resizer/js/iframeResizer.js'

onMounted(() => {
  window.iFrameResize({
    scrolling: 'no',
    heightCalculationMethod: 'taggedElement',
  }, `#iframe`)
})
</script>
