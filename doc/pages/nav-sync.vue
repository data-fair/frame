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
      Adding prefixes to the query parameters
    </h2>
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
import '../../lib/d-frame'
</script>
