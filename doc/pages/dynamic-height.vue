<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Dynamic height
    </h1>
    <v-alert
      type="warning"
      border="start"
      variant="outlined"
      style="width:fit-content"
      class="mb-4"
    >
      This functionality requires loading <code>d-frame-content.js</code> in the content page.
    </v-alert>
    <p>If the frame content contains one or more elements with a <code>data-iframe-height</code> attribute, the height will be adjusted based on their position.</p>

    <h2 class="text-h4 mt-8">
      Interactive resize
    </h2>
    <p class="my-4">
      The iframe height is adjusted dynamically after user interactions.
    </p>
    <d-frame
      src="/children/resize"
      style="max-width:300px;"
    />
  </v-container>
</template>

<script setup lang="ts">
import '../../src/d-frame'
</script>
