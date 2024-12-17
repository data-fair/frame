<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Messages
    </h1>
    <p>
      You can send simple notifications and custom messages through d-frame. In this case d-gframe acts as a simple wrapper around the postMessage API exposed as custom events on the d-frame element.
    </p>

    <h2 class="text-h4 mt-8">
      Sending notification
    </h2>
    <p class="my-4">
      You can use a very simple Notif type to send notifications from child to parent. This is useful because it is often preferable to centralize notification display in the parent window.
      This example uses an event handler like so : <code>@notif="(frameNotif: CustomEvent&lt;Notif&gt;) => { notif = frameNotif.detail; showSnackBar = true }"</code>
    </p>
    <d-frame
      :src="`${$config.app.baseURL}children/send-notif`"
      style="max-width:300px;"
      resize
      class="border-dashed border-md border-secondary border-opacity-100 pa-2"
      @notif="(frameNotif: CustomEvent<Notif>) => { notif = frameNotif.detail; showSnackBar = true }"
    />

    <v-snackbar
      v-if="!!notif"
      v-model="showSnackBar"
      :color="notif.type"
      location="bottom right"
    >
      {{ notif.title }}
      <p
        v-if="notif.detail"
        class="ml-4"
      >
        {{ notif.detail }}
      </p>
    </v-snackbar>

    <h2 class="text-h4 mt-8">
      Sending a custom message
    </h2>
    <p class="my-4">
      If the Notif type doesn't cover your use case, more generic custom messages can also be sent.
      This example uses an event handler like so : <code>@message="(frameMessage: CustomEvent) => { message = frameMessage.detail; showSnackBar = true }"</code>
    </p>
    <d-frame
      :src="`${$config.app.baseURL}children/send-message`"
      style="max-width:300px;"
      resize
      class="border-dashed border-md border-secondary border-opacity-100 pa-2"
      @message="(frameMessage: CustomEvent<any>) => { message = frameMessage.detail; showSnackBar2 = true }"
    />

    <v-snackbar
      v-if="!!message"
      v-model="showSnackBar2"
      location="bottom right"
    >
      {{ message }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import '../../lib/d-frame'
import type { Notif } from '../../lib/messages'

const showSnackBar = ref(false)
const notif = ref<Notif | null>(null)

const showSnackBar2 = ref(false)
const message = ref()
</script>
