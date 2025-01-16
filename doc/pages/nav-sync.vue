<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Navigation syncing
    </h1>
    <p>
      Navigation inside an iframe is usually lost when reloading the parent page. With <code>d-frame</code> it is easy to reflect the navigation in the iframe as a navigation on the parent page.
    </p>

    <h2 class="text-h4 mt-8">
      Reflecting query parameters
    </h2>
    <p class="my-4">
      This example reflects all query parameters exactly as they are from parent to frame and the contrary. It uses the <code>sync-params</code> attribute.
    </p>
    <d-frame
      :src="`${$config.app.baseURL}children/nav-sync`"
      style="max-width:300px;"
      resize
      sync-params
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />

    <h2 class="text-h4 mt-8">
      Receiving state change events
    </h2>
    <p class="my-4">
      This example does not reflect query parameters in the parent frame, but it listens to state changes in the child frame. It uses the <code>state-change-events</code> attribute and <code>@state-change</code> event handler. This mode lets you store the state of the child frame in your own way.
    </p>
    <p class="my-4">
      State URL: <code>{{ stateUrl }}</code>
    </p>
    <d-frame
      :src="`${$config.app.baseURL}children/nav-sync`"
      style="max-width:300px;"
      resize
      debug
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
      state-change-events
      @state-change="storeState"
    />
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'

const stateUrl = ref('')

const storeState = (state: { detail: [string, string] }) => {
  stateUrl.value = state.detail[1]
}
</script>
