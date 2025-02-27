<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      V-Iframe compatibility
      <br>
      <source-link />
    </h1>
    <v-alert
      color="text-info"
      border="start"
      variant="outlined"
      style="width:fit-content"
      class="mb-4"
    >
      <a href="https://github.com/koumoul-dev/v-iframe">V-Iframe</a> is a deprecated component that covered some of the functionalities of D-Frame. It is still available for compatibility reasons but it is recommended to use D-Frame instead.
      <br>
      D-Frame proposes some compatibility features to ease the transition from V-Iframe to D-Frame.
    </v-alert>
    <p class="my-4">
      This example illustrates receiving notifications using the notification payload used by V-Iframe.
    </p>
    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/v-iframe-compat-messages`"
          style="max-width:300px;"
          resize
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
          @notif="(frameNotif: CustomEvent<Notif>) => { notif = frameNotif.detail; showSnackBar = true }"
        />
      </v-col>
    </v-row>

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

    <p class="my-4">
      This example reflects the query parameter param1 across children, while param2 is kept segregated with a prefix. It uses <code>sync-params="param1,param2:child1_"</code> and <code>sync-params="param1,param2:child2_"</code> attributes.
    </p>
    <p class="my-4">
      It uses <code>@data-fair/frame/dist/v-iframe-compat/d-frame-content.min.js</code>
    </p>
    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/v-iframe-compat-sync`"
          style="max-width:300px;"
          sync-params="param2:child1_,*"
          .adapter="stateChangeAdapter"
          resize
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/v-iframe-compat-sync`"
          style="max-width:300px;"
          sync-params="param2:child2_,*"
          .adapter="stateChangeAdapter"
          resize
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
import createStateChangeAdapter from '../../lib/vue-router/state-change-adapter'
import type { Notif } from '../../lib/messages'

const showSnackBar = ref(false)
const notif = ref<Notif | null>(null)

const stateChangeAdapter = createStateChangeAdapter(useRouter())
</script>
