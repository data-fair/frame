<template>
  <div
    data-iframe-height
    class="text-caption"
  >
    {{ route.fullPath }}
    <br>
    <v-btn
      color="primary"
      variant="elevated"
      class="ml-2"
      to="/children/_dev/"
    >
      Go to parent
    </v-btn>
    <br>
    <source-link class="mt-4" />
  </div>
</template>

<script setup lang="ts">
import dFrameContentVueRouter from '../../../../lib/vue-router/d-frame-content'

const route = useRoute()

dFrameContentVueRouter(useRouter())
</script>
