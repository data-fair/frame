<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Navigation syncing and top links
      <br>
      <source-link />
    </h1>

    <p class="mb-4">
      You can generate actual HTML links to navigate inside an iframe (instead of programmatically calling the history API).
      But if the user uses "right-click > open in a new tab" on the link then they will navigate to a new tab with only the iframe content instead of the full parent context.
    </p>

    <p class="mb-4">
      To fix this problem <code>d-frame-content</code> exposes <code>addParentUrlListener</code> and <code>removeParentUrlListener</code> methods.
      This will allow the content code to create full links for the parent page with the correctly synced navigation for the child page.
    </p>

    <p class="mb-4">
      In the Vue ecosystem this capability is wrapped in a <code>useDFrameParentUrls</code> composable for ease of use.
    </p>

    <v-row class="mt-4">
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-top-links/`"
          style="max-width:550px;"
          resize
          sync-path
          sync-params
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
