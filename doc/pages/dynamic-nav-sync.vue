<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Dynamic navigation syncing
    </h1>
    <v-alert
      color="text-info"
      border="start"
      variant="outlined"
      style="width:fit-content"
      class="mb-4"
    >
      This functionality requires loading a <code>d-frame-content.js</code> variant that handles dynamic routing and adding a state change adapter to <code>d-frame</code>. See the <b>Vue Router integration</b> section in the <router-link
        to="/getting-started"
        text="Getting started"
      /> for an example.
    </v-alert>
    <p>
      It is possible to handle complex cases of parameters syncing, across parent and children.
    </p>

    <p class="my-4">
      This example reflects the query parameter param1 across children, while param2 is kept segregated with a prefix. It uses <code>sync-params="param1,param2:child1_"</code> and <code>sync-params="param1,param2:child2_"</code> attributes.
    </p>
    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-vue-router`"
          style="max-width:300px;"
          resize
          sync-params="param2:child1_,*"
          .adapter="stateChangeAdapter"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-vue-router`"
          style="max-width:300px;"
          resize
          sync-params="param2:child2_,*"
          .adapter="stateChangeAdapter"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
import createStateChangeAdapter from '../../lib/vue-router/state-change-adapter'

const stateChangeAdapter = createStateChangeAdapter(useRouter())
</script>
