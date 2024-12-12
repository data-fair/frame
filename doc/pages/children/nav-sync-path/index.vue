<template>
  <div
    data-iframe-height
    class="text-caption"
  >
    This is a frame that can navigate to a child page.
    <br>
    <v-btn
      color="primary"
      variant="elevated"
      class="ml-2"
      to="/children/nav-sync-path/child"
    >
      Go to child
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import dFrameContentVueRouter from '../../../../src/vue-router/d-frame-content'

dFrameContentVueRouter(useRouter())
</script>
