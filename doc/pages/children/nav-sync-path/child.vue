<template>
  <div
    data-iframe-height
    class="text-caption"
  >
    This is a frame in a subdirectory that can navigate to its parent.
    <br>
    <v-btn
      color="primary"
      variant="elevated"
      class="ml-2"
      to="./"
    >
      Go to parent
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import dFrameContentVueRouter from '../../../../src/vue-router/d-frame-content'

dFrameContentVueRouter(useRouter())
</script>
