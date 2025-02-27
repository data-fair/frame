<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Force reload
      <br>
      <source-link />
    </h1>
    <p class="mb-4">
      If you want to force the frame to reload, you can use the <code>reload</code> attribute. This will reload the frame every time the value is changed.
    </p>

    <v-row>
      <v-col>
        <v-btn
          color="primary"
          variant="elevated"
          class="mb-4"
          @click="reload += 1"
        >
          Reload
        </v-btn>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-path/`"
          style="max-width:300px;"
          resize
          debug
          :reload="reload"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'

const reload = ref(0)
</script>
