<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Dynamic height
    </h1>
    <v-alert
      color="text-info"
      border="start"
      variant="outlined"
      style="width:fit-content"
      class="mb-4"
    >
      This functionality requires loading <code>d-frame-content.js</code> in the content page.
    </v-alert>
    <p>
      If the frame content contains one or more elements with a <code>data-iframe-height</code> attribute, the height will be adjusted based on their position.
      This is done dynamically when the content changes.
    </p>

    <h2 class="text-h4 mt-8">
      Tagging an element
    </h2>
    <p class="my-4">
      In this example the card inside the frame has a <code>data-iframe-height</code> attribute.
    </p>
    <d-frame
      id="dynamic-height"
      :src="`${$config.app.baseURL}children/resize`"
      style="max-width:300px;"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />

    <h2 class="text-h4 mt-8">
      Adding an offset on a tagged element
    </h2>
    <p class="my-4">
      In this example the button at the bottom of the frame has a <code>data-iframe-height="30"</code> attribute.
    </p>
    <d-frame
      id="dynamic-height-offset"
      :src="`${$config.app.baseURL}children/resize-offset`"
      style="max-width:300px;"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />

    <h2 class="text-h4 mt-8">
      Forced resize and initial height
    </h2>
    <p class="my-4">
      If the parent is aware that the child supports dynamic resizing, it can set an initial height of 0 for example using the <code>height</code> attribute.
    </p>
    <v-btn
      color="primary"
      class="mb-4"
      @click="redraw()"
    >
      re-create
    </v-btn>
    <d-frame
      v-if="drawn"
      id="dynamic-height"
      height="0"
      :src="`${$config.app.baseURL}children/resize`"
      style="max-width:300px;"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
import { nextTick } from 'vue'

const drawn = ref(true)
const redraw = () => {
  drawn.value = false
  nextTick(() => {
    drawn.value = true
  })
}
</script>
