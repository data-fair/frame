<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Navigation syncing with prefix
    </h1>

    <p class="my-4">
      This example reflects query parameters and adds a different prefix for both frames. It uses <code>sync-params="*:child1_"</code> and <code>sync-params="*:child2_"</code> attributes.
    </p>
    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync`"
          style="max-width:300px;"
          resize
          sync-params="*:child1_"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync`"
          style="max-width:300px;"
          resize
          sync-params="*:child2_"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
</script>
