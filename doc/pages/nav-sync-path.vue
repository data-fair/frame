<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Navigation syncing with path
    </h1>
    <p>
      If the navigation inside the frame includes path changes and you want to reflect this in the parent URL too, you can use the <code>sync-path</code> attribute. If empty the path parameter will be named "p", it you set a value to the attribute it will be used as parameter name.
    </p>

    <p class="my-4">
      This example uses <code>sync-path="path1"</code> and <code>sync-path="path2"</code> attributes.
    </p>
    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-path/`"
          style="max-width:300px;"
          resize
          sync-path="path1"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-path/`"
          style="max-width:300px;"
          resize
          sync-path="path2"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
</script>
