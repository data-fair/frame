<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Dynamic navigation syncing
    </h1>
    <v-alert
      color="secondary"
      border="start"
      variant="outlined"
      style="width:fit-content"
      class="mb-4"
    >
      This functionality requires loading a <code>d-frame-content-*.js</code> variant that handles dynamic routing and adding a state change adapter to <code>d-frame</code>.
    </v-alert>
    <p>
      It is possible to handle complex cases of parameters syncing, accross parent and children.
    </p>

    <h2 class="text-h4 mt-8">
      Sharing query parameters
    </h2>
    <p class="my-4">
      This examples reflects the query parameter param1 accross children, while param2 is kept segregated with a prefix. It uses <code>sync-params="param1,param2:child1_"</code> and <code>sync-params="param1,param2:child2_"</code> attributes.
    </p>
    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-vue-router`"
          style="max-width:300px;"
          resize
          sync-params="param2:child1_,*"
          .adapter="stateChangeAdapter"
          class="border-dashed border-md border-secondary border-opacity-100 pa-2"
        />
      </v-col>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-vue-router`"
          style="max-width:300px;"
          resize
          sync-params="param2:child2_,*"
          .adapter="stateChangeAdapter"
          class="border-dashed border-md border-secondary border-opacity-100 pa-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../../src/d-frame'
import createStateChangeAdapter from '../../src/vue-router/state-change-adapter'

const stateChangeAdapter = createStateChangeAdapter(useRouter())
</script>
