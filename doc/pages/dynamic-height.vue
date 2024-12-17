<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Dynamic height
    </h1>
    <v-alert
      color="secondary"
      border="start"
      variant="outlined"
      style="width:fit-content"
      class="mb-4"
    >
      This functionality requires loading <code>d-frame-content.js</code> or a <code>d-frame-content-*.js</code> variant in the content page.
    </v-alert>
    <p>
      If the frame content contains one or more elements with a <code>data-iframe-height</code> attribute, the height will be adjusted based on their position.
      This is done dynamically when the content changes.
    </p>

    <h2 class="text-h4 mt-8">
      Tagging an element
    </h2>
    <p class="my-4">
      In this example the card inside the frame has a <code>data-iframe-height</code> attribute.
    </p>
    <d-frame
      :src="`${$config.app.baseURL}children/resize`"
      style="max-width:300px;"
      class="border-dashed border-md border-secondary border-opacity-100 pa-2"
    />

    <h2 class="text-h4 mt-8">
      Adding an offset on a tagged element
    </h2>
    <p class="my-4">
      In this example the button at the bottom of the frame has a <code>data-iframe-height="30"</code> attribute.
    </p>
    <d-frame
      :src="`${$config.app.baseURL}children/resize-offset`"
      style="max-width:300px;"
      class="border-dashed border-md border-secondary border-opacity-100 pa-2"
    />
  </v-container>
</template>

<script setup lang="ts">
import '../../lib/d-frame'
</script>
