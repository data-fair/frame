<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Development
      <br>
      <source-link />
    </h1>

    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/_dev?static=1`"
          style="max-width:300px;"
          resize
          debug
          sync-params
          .adapter="stateChangeAdapter"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
import createStateChangeAdapter from '../../lib/vue-router/state-change-adapter'

const stateChangeAdapter = createStateChangeAdapter(useRouter())
</script>
