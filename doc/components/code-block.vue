<!-- eslint-disable vue/no-v-html -->
<template>
  <p
    v-if="caption"
    class="text-caption"
  >
    {{ caption }}
  </p>
  <v-card
    :variant="caption ? 'tonal' : 'text'"
    class="mb-3"
  >
    <pre class="code-block"><code
:class="`language-${language}`"
             v-html="html"
    /></pre>
  </v-card>
</template>

<script setup>
import { useSlots, computed } from 'vue'
import Prism from '../assets/prism.js'

Prism.manual = true

const props = defineProps({
  caption: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: 'javascript',
  },
})

const slots = useSlots()

const html = computed(() => {
  const code = slots.default?.()[0].children
  if (!code) return ''
  return Prism.highlight(code, Prism.languages[props.language], props.language)
})
</script>

<style>
.code-block {
  padding: 8px;
  border-radius: 4px;
}
</style>
