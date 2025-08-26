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
      @click="router.push('/children/nav-sync-path/')"
    >
      Go to parent
    </v-btn>
    <br>
    <source-link class="mt-4" />
  </div>
</template>

<script setup lang="ts">
import dFrameContentVueRouter from '../../../../lib/vue-router/d-frame-content'

const router = useRouter()
dFrameContentVueRouter(router)
</script>
