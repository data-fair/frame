<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Navigation syncing with path
    </h1>
    <p>
      If the navigation inside the frame includes path changes and you want to reflect this in the parent URL too, you can use the <code>sync-path</code> attribute.
    </p>

    <h2 class="text-h4 mt-8">
      Storing child path in query param
    </h2>

    <p class="my-4">
      If the <code>sync-path</code> attribute is empty the path parameter will be named "p", it you set a value to the attribute it will be used as parameter name.
      This example uses <code>sync-path="path1"</code> and <code>sync-path="path2"</code> attributes.
    </p>
    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-path/`"
          style="max-width:300px;"
          resize
          sync-path="path1"
          .adapter="stateChangeAdapter"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-path/`"
          style="max-width:300px;"
          resize
          sync-path="path2"
          .adapter="stateChangeAdapter"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
    </v-row>

    <h2 class="text-h4 mt-8">
      Storing child path in hash
    </h2>

    <p class="my-4">
      This example uses <code>sync-path="#"</code>. The special value "#" will store the path in the hash part of the URL.
    </p>

    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-path/`"
          style="max-width:300px;"
          resize
          sync-path="#"
          .adapter="stateChangeAdapter"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
    </v-row>

    <h2 class="text-h4 mt-8">
      Mirroring child path into parent path
    </h2>

    <p class="my-4">
      This example uses <code>sync-path="/nav-sync-path/"</code>. The first character "/" indicates that the path should be mirrored into the parent path using the value as a prefix.
    </p>

    <v-alert
      color="text-info"
      border="start"
      variant="outlined"
      style="width:fit-content"
      class="mb-4"
    >
      The parent application needs to mirror all the paths that the child application might navigate too.
    </v-alert>

    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/nav-sync-path/`"
          style="max-width:300px;"
          resize
          sync-path="/nav-sync-path/"
          debug
          .adapter="stateChangeAdapter"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
      <v-col>
        <div style="max-width:300px;">
          <router-view />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
import createStateChangeAdapter from '../../lib/vue-router/state-change-adapter'

const stateChangeAdapter = createStateChangeAdapter(useRouter())
</script>
