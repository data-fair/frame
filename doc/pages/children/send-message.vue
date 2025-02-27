<template>
  <v-card
    variant="outlined"
    color="primary"
    data-iframe-height
  >
    <v-card-text class="text-caption">
      This is a frame that can send a simple custom message to its parent.
      <br>
      <v-btn
        color="primary"
        variant="elevated"
        class="mt-4"
        @click="() => { inc+= 1; dFrameContent.sendMessage({ data: 'Success ' + inc }) }"
      >
        Send message
      </v-btn>
      <br>
      <source-link class="mt-4" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import dFrameContentVueRouter from '../../../lib/vue-router/d-frame-content'

const inc = ref(0)
const dFrameContent = dFrameContentVueRouter(useRouter())
</script>
