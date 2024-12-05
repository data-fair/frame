<template>
  <v-container
    fluid
    class="text-center index-container"
  >
    <div
      style="height:130px"
      class="mt-16"
    >
      <span
        class="px-8 text-h2 text-white font-weight-bold bg-secondary rounded-shaped"
        style="width:fit-content"
      >d-frame</span>
    </div>

    <p class="my-4">
      An iframe wrapper for powerful Web app integrations.
    </p>

    <p class="my-4">
      Lightweight, vanilla JS, no dependency.
    </p>

    <p class="mt-4">
      Supports navigation syncing, error passing, aspect ratio and dynamic resize.
    </p>
  </v-container>
</template>

<script setup>
import { VContainer } from 'vuetify/components'

useHead({
  title: 'd-frame',
})
</script>

<style lang="css" scoped>
</style>
