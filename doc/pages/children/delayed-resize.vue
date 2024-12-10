<template>
  <v-card
    variant="outlined"
    color="primary"
  >
    <v-card-text class="text-caption">
      This is a frame with a delayed rendering to show the effect of initial resizing.
      <br>
      <v-btn
        v-if="showButton"
        color="primary"
        variant="elevated"
        class="mt-4"
        data-iframe-height="17"
        @click="delayRendering"
      >
        Hide
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import '../../../src/d-frame-content'

const showButton = ref(false)
const delayRendering = () => {
  showButton.value = false
  setTimeout(() => {
    showButton.value = true
  }, 1500)
}
delayRendering()
</script>
