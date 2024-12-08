<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <v-container
    fluid
    class="text-center"
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

    <p class="my-4 text-subtitle font-italic ">
      An iframe wrapper for powerful Web app integrations.
    </p>
  </v-container>
  <v-container
    fluid
    style="max-width: 650px"
  >
    <v-list class="test">
      <v-list-item :lines="false">
        <v-list-item-title>It is <strong class="text-primary">lighweight</strong></v-list-item-title>
        <v-list-item-subtitle>
          It is made of a few hundred lines of code and no dependency.
        </v-list-item-subtitle>
      </v-list-item>

      <v-list-item :lines="false">
        <v-list-item-title>It is <strong class="text-primary">generic</strong></v-list-item-title>
        <v-list-item-subtitle class="text">
          It is written in vanilla JS using standard Web APIs with optional integration layers for JS frameworks.
        </v-list-item-subtitle>
      </v-list-item>

      <v-list-item :lines="false">
        <v-list-item-title>It handles <strong class="text-secondary">dynamic resizing</strong></v-list-item-title>
        <v-list-item-subtitle class="text">
          The size of the iframe can be dynamically adapted to changes in its content.
        </v-list-item-subtitle>
      </v-list-item>

      <v-list-item :lines="false">
        <v-list-item-title>It handles <strong class="text-secondary">navigation syncing</strong></v-list-item-title>
        <v-list-item-subtitle class="text">
          Changes in the child state can be reflected as query parameters on the parent page.
        </v-list-item-subtitle>
      </v-list-item>

      <v-list-item :lines="false">
        <v-list-item-title>It handles <strong class="text-secondary">notification passing</strong></v-list-item-title>
        <v-list-item-subtitle class="text">
          You can easily send standardized messages from child to parent for top level display.
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
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
