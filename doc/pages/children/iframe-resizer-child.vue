<template>
  <v-card
    variant="outlined"
    color="primary"
  >
    <v-card-text>
      This is a frame with iframeResizer.contentWindow available.
      <div :style="`height:${height}px;`" />
      <v-btn
        color="primary"
        variant="elevated"
        data-iframe-height
        @click="height += 50"
      >
        Add 50px
      </v-btn>
      <br>
      <source-link class="mt-4" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import 'iframe-resizer/js/iframeResizer.contentWindow.js'

const height = ref(0)
</script>
