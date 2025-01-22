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
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
</script>

<style scoped>
</style>
