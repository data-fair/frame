<template>
  <v-card
    variant="outlined"
    color="primary"
    class="h-100"
  >
    <v-card-text class="text-caption">
      <v-row>
        <v-col>
          <simple-menu />
        </v-col>
        <v-col>
          <simple-menu />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import '../../../lib/d-frame-content'
</script>
