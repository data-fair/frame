<template>
  <v-card
    variant="flat"
    data-iframe-height
  >
    <v-card-text class="text-caption">
      This is a frame that acts as a v-iframe content window.
      <br>
      <v-btn
        color="primary"
        variant="elevated"
        class="mt-4"
        @click="sendNotif(`Simple notif ${inc}`)"
      >
        Send simple text notif
      </v-btn>

      <v-btn
        color="success"
        variant="elevated"
        class="mt-4"
        @click="sendNotif({ type: 'success', msg: `Success notif ${inc}` })"
      >
        Send success notif
      </v-btn>

      <v-btn
        color="error"
        variant="elevated"
        class="mt-4"
        @click="sendNotif({ msg: '', error: new Error(`Raised error ${inc}`) })"
      >
        Send error notif
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { PartialUiNotif } from '../../../lib/v-iframe-compat/ui-notif'
import '../../../lib/v-iframe-compat/d-frame-content'

const inc = ref(0)

const sendNotif = (notif: PartialUiNotif) => {
  inc.value += 1
  window.top?.postMessage({ vIframe: true, uiNotification: notif }, '*')
}
</script>
