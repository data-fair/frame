<template>
  <div>
    <a
      :href="link"
      target="blank"
      class="text-caption text-primary"
    >view source code</a>
  </div>
</template>

<script setup lang="ts">
import { version } from '~/../package.json'

const route = useRoute()

const { path, index } = defineProps({ path: String, index: Boolean })

const link = computed(() => {
  let currentPath = path ?? route.path
  if (currentPath.endsWith('/')) {
    currentPath = currentPath.slice(0, -1)
  }
  if (index) {
    currentPath = currentPath + '/index'
  }
  return `https://github.com/data-fair/frame/blob/v${version}/doc/pages${currentPath}.vue`
})
</script>
