<template>
  <v-card
    variant="outlined"
    color="primary"
  >
    <v-card-text class="text-caption">
      This is a frame with a delayed initial size calculation.
      <br>
      <v-alert
        v-if="showDelayedContent"
        data-iframe-height="17"
      >
        delayed content
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import '../../../lib/d-frame-content'

const showDelayedContent = ref(false)
setTimeout(() => {
  showDelayedContent.value = true
}, 1000)
</script>
