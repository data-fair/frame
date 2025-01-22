<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Extra attributes
    </h1>
    <p>You can add extra attributes to the <code>iframe</code> element created by d-frame. To do so simply set the attribute with a "iframe-" prefix. This is useful to define accessibility related attributes for example.</p>

    <p class="my-4">
      The following example has <code>iframe-title="My iframe title"</code>.
    </p>

    <d-frame
      id="extra-attrs-title"
      :src="`${$config.app.baseURL}children/basic`"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2 d-frame-css1"
      iframe-title="My iframe title"
      debug
    />

    <p class="mt-6 mb-4">
      The next example has the <code>iframe-loading="lazy"</code> attribute and is pushed 5000px to the bottom. If you scroll down you shoud see a message displayed when the iframe is loaded as you get closer to the bottom.
    </p>

    <div style="height:5000px" />
    <d-frame
      id="extra-attrs-lazy"
      :src="`${$config.app.baseURL}children/basic`"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2 d-frame-css1"
      debug
      iframe-loading="lazy"
      @ready="ready = true"
    />

    <v-snackbar
      v-model="ready"
      location="bottom right"
    >
      Iframe is ready
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'

const ready = ref(false)
</script>

<style scoped>
</style>
