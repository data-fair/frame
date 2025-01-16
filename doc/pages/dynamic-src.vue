<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Dynamic src
    </h1>
    <v-alert
      color="text-info"
      border="start"
      variant="outlined"
      style="width:fit-content"
      class="mb-4"
    >
      This functionality requires loading a <code>d-frame-content.js</code> variant that handles dynamic routing. See the <b>Vue Router integration</b> section in the <router-link
        to="/getting-started"
        text="Getting started"
      /> for an example.
    </v-alert>
    <p>
      If the frame content supports dynamic routing the src of the frame can be changed without triggering a full reload of the page inside.
    </p>

    <h2 class="text-h4 mt-8">
      Using Vue Router
    </h2>
    <p class="my-4">
      In this example the card inside the frame uses <code>@data-fair/frame/lib/vue-router/d-frame-content.js</code> and a simple number parameter is given to the frame src with <code>?param=${param}</code>.
    </p>
    <v-btn
      color="primary"
      variant="elevated"
      class="mb-4"
      @click="param += 1"
    >
      Increment
    </v-btn>
    <d-frame
      :src="`${$config.app.baseURL}children/src-vue-router?param=${param}`"
      style="max-width:300px;"
      resize
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'

const param = ref(0)
</script>
