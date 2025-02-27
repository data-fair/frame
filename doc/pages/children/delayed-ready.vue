<template>
  <v-card
    variant="outlined"
    color="primary"
  >
    <v-card-text class="text-caption">
      This is a frame with a delayed ready message.
      <br>
      <source-link class="mt-4" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import dFrameContent from '../../../lib/d-frame-content'

setTimeout(() => {
  dFrameContent.ready()
}, 1000)
</script>
