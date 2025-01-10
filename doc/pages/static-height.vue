<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Static height
    </h1>
    <p>There are multiple ways of managing the height of the frame.</p>

    <h2 class="text-h4 mt-8">
      CSS styling
    </h2>
    <p class="my-4">
      If a height is applied to the d-frame element through CSS it is respected. The following example has <code>style="height:100px;"</code>.
    </p>
    <d-frame
      :src="`${$config.app.baseURL}children/basic`"
      style="height:100px;max-width:300px;"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />

    <h2 class="text-h4 mt-8">
      Auto aspect ratio
    </h2>
    <p class="my-4">
      Without a height restriction from the style a default aspect ratio is used. This aspect ratio is calculated based on the width of the frame like so:
    </p>
    <ul class="ml-8 mb-4">
      <li>&lt; 500 px &rArr; 1</li>
      <li>&lt; 800 px &rArr; 4 / 3</li>
      <li>&lt; 1200 px &rArr; 16 / 9 </li>
      <li>&rArr; 21 / 9</li>
    </ul>
    <d-frame
      :src="`${$config.app.baseURL}children/basic`"
      style="max-width:300px;"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />

    <h2 class="text-h4 mt-8">
      Explicit aspect ratio
    </h2>
    <p class="my-4">
      The default aspect ratio can be overwritten with an attribute. The following example has <code>aspect-ratio="2"</code>.
    </p>
    <d-frame
      :src="`${$config.app.baseURL}children/basic`"
      aspect-ratio="2"
      style="max-width:300px;"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />

    <h2 class="text-h4 mt-8">
      Explicit height
    </h2>
    <p class="my-4">
      The height can be overwritten with an attribute. The following has <code>height="50vh"</code>.
    </p>
    <d-frame
      debug
      :src="`${$config.app.baseURL}children/basic`"
      height="50vh"
      style="max-width:300px;"
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />
  </v-container>
</template>

<script setup lang="ts">
import '../../lib/d-frame'
</script>
