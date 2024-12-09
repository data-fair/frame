<template>
  <div
    data-iframe-height
    class="text-caption"
  >
    This is a frame with a parameter from Vue Router. Param={{ $route.query.param }}.
  </div>
</template>

<script setup lang="ts">
import dFrameContentVueRouter from '../../../src/d-frame-content-vue-router'

const router = useRouter()
dFrameContentVueRouter({ router })
</script>
