<template>
  <v-card
    variant="outlined"
    color="primary"
    data-iframe-height
  >
    <v-card-text class="text-caption">
      This is a frame that can send a simple notif to its parent.
      <br>
      <v-btn
        color="primary"
        variant="elevated"
        class="mt-4"
        @click="() => { inc+= 1; dFrameContent.sendNotif({ type: 'success', title: 'Success ' + inc, detail: 'This is a notification sent from a child.' }) }"
      >
        Send notif
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import dFrameContentVueRouter from '../../../lib/vue-router/d-frame-content'

const inc = ref(0)
const dFrameContent = dFrameContentVueRouter(useRouter())
</script>
