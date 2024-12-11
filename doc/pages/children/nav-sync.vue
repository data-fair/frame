<template>
  <div
    data-iframe-height
    class="text-caption"
  >
    This is a frame that updates its own query parameters. Param={{ param }}.
    <br>
    <v-btn
      color="primary"
      variant="elevated"
      @click="param += 1"
    >
      Increment
    </v-btn>
    <v-btn
      color="primary"
      variant="elevated"
      class="ml-2"
      @click="param = 0"
    >
      Clear
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import '../../../src/d-frame-content'

const router = useRouter()
const route = useRoute()
const param = computed({
  get() {
    return Number(route.query.param ?? 0)
  },
  set(value: number) {
    router.replace({ query: { ...route.query, param: value || undefined } })
  },
})
</script>
