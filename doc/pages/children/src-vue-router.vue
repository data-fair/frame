<template>
  <div
    data-iframe-height
    class="text-caption"
  >
    This is a frame with a parameter from Vue Router. Param={{ $route.query.param }}.
    <br>
    <source-link class="mt-4" />
  </div>
</template>

<script setup lang="ts">
import dFrameContentVueRouter from '../../../lib/vue-router/d-frame-content'

dFrameContentVueRouter(useRouter())
</script>
