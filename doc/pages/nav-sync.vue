<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Navigation syncing
    </h1>
    <p>
      .
    </p>

    <h2 class="text-h4 mt-8">
      Reflecting query parameters
    </h2>
    <p class="my-4">
      .
    </p>
    <d-frame
      :src="`${$config.app.baseURL}children/nav-sync`"
      style="max-width:300px;"
      resize
      sync-params
      class="border-dashed border-md border-secondary border-opacity-100 pa-2"
    />
  </v-container>
</template>

<script setup lang="ts">
import '../../src/d-frame'
</script>
