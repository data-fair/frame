<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Static height
    </h1>
    <p>There are multiple ways of managing the height of the frame.</p>

    <h2 class="text-h4 mt-8">
      Default layout / CSS styling
    </h2>
    <p class="my-4">
      By default the <code>d-frame</code> element acts as a standard <code>block</code> element that can be styled as usual.
    </p>
    <p class="my-4">
      The following example has a class that affects the rules <code>{height: 30vh; width: 50%;}</code>.
    </p>
    <d-frame
      :src="`${$config.app.baseURL}children/basic`"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2 d-frame-css"
    />

    <h2 class="text-h4 mt-8">
      Auto aspect ratio
    </h2>
    <p class="my-4">
      You can use the <code>aspect-ratio</code> attribute without a value to apply a default aspect ratio. This aspect ratio is calculated based on the width of the frame like so:
    </p>
    <ul class="ml-8 mb-4">
      <li>&lt; 500 px &rArr; 1</li>
      <li>&lt; 800 px &rArr; 4 / 3</li>
      <li>&lt; 1200 px &rArr; 16 / 9 </li>
      <li>&rArr; 21 / 9</li>
    </ul>
    <v-slider
      v-model="width1"
      color="accent"
      label="width"
      min="300"
      max="1300"
      step="1"
      thumb-label
      max-width="500"
    >
      <template #thumb-label="{ modelValue }">
        {{ modelValue }}&nbsp;px
      </template>
    </v-slider>
    <d-frame
      :src="`${$config.app.baseURL}children/basic`"
      :style="`width:${width1}px;`"
      aspect-ratio
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />

    <h2 class="text-h4 mt-8">
      Explicit aspect ratio
    </h2>
    <p class="my-4">
      The default aspect ratio can be overwritten with an attribute. The following example has <code>aspect-ratio="2"</code>.
    </p>
    <v-slider
      v-model="width2"
      color="accent"
      label="width"
      min="300"
      max="1300"
      step="1"
      thumb-label
      max-width="500"
    >
      <template #thumb-label="{ modelValue }">
        {{ modelValue }}&nbsp;px
      </template>
    </v-slider>
    <d-frame
      :src="`${$config.app.baseURL}children/basic`"
      aspect-ratio="2"
      :style="`width:${width2}px;`"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />

    <h2 class="text-h4 mt-8">
      Explicit height
    </h2>
    <p class="my-4">
      The height can be overwritten with an attribute. The following has <code>height="30vh"</code>.
    </p>
    <d-frame
      debug
      :src="`${$config.app.baseURL}children/basic`"
      height="30vh"
      style="max-width:300px;"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />
  </v-container>
</template>

<script setup lang="ts">
import '../../lib/d-frame'

const width1 = ref(600)
const width2 = ref(600)
</script>

<style scoped>
.d-frame-css {
  height: 30vh;
  width: 50%;
}
</style>
