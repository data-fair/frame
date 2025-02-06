<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Mouse events
    </h1>
    <p>
      User actions across iframes can lack some interaction support.
    </p>

    <h2 class="text-h4 mt-8">
      Capturing click events
    </h2>
    <v-row>
      <v-col class="mt-7">
        <simple-menu />
      </v-col>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/mouse-events`"
          style="max-width:300px;"
          aspect-ratio
          sync-click
          debug
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/mouse-events`"
          style="max-width:300px;"
          aspect-ratio
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
</script>
