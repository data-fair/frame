<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Managing the clipping effect
    </h1>
    <p>
      When using dynamic resizing of the frame some degree of clipping effect is to be expected. Some strategies can be applied to mitigate this.
    </p>

    <h2 class="text-h4 mt-8">
      Setting the resize attribute
    </h2>
    <p class="my-4">
      The <code>resize</code> attribute can be defined as "yes", "no" or "auto". The default value is "auto" and setting the attribute without a value is equivalent to "yes".
      If the parent has prior knowledge that the child supports dynamic resizing, it is sometimes better to set the <code>resize</code> attribute so that the default aspect ratio is not applied.
    </p>
    <d-frame
      id="d-frame-resize"
      :src="`${$config.app.baseURL}children/delayed-resize`"
      style="max-width:300px;"
      resize
      debug
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    />

    <h2 class="text-h4 mt-8">
      Using the loader slot with the resize attribute
    </h2>
    <p class="my-4">
      In this example the card inside the d-frame has a <code>loader</code> slot that uses Vuetify's VSkeletonLoader component. When the resize attribute is defined this loader is hidden after the initial size is applied.
    </p>
    <d-frame
      id="d-frame-loader"
      :src="`${$config.app.baseURL}children/delayed-resize`"
      style="max-width:300px;"
      resize
      class="border-dashed border-md border-text-info border-opacity-100 pa-2"
    >
      <div slot="loader">
        <v-skeleton-loader type="paragraph" />
      </div>
    </d-frame>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
</script>
