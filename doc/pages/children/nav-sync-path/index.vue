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
      @click="router.push('/children/nav-sync-path/child')"
    >
      Go to child
    </v-btn>
    <br>
    <source-link
      class="mt-4"
      index
    />
  </div>
</template>

<script setup lang="ts">
import dFrameContentVueRouter from '../../../../lib/vue-router/d-frame-content'

const router = useRouter()
dFrameContentVueRouter(router)
</script>
