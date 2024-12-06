<template>
  <v-card
    variant="outlined"
    color="primary"
  >
    <v-card-text>
      This is a simple frame content
      <div :style="`height:${height}px;`" />
      <v-btn
        color="primary"
        variant="elevated"
        data-iframe-height
        @click="height += 50"
      >
        Add 50px
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import '../../../src/d-frame-content'

const height = ref(0)
</script>
