<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Mouse events
      <br>
      <source-link />
    </h1>
    <p>
      User actions across iframes can lack some interaction support.
    </p>

    <h2 class="text-h4 mt-8">
      Capturing click events
    </h2>
    <p class="my-4">
      This example uses the <code>mouse-events</code> attribute without a value to signal that the default events (click, dblclick, mousedown and mouseup) should be emitted when captured inside the iframe. It also defines event handler on the <code>d-frame</code> element to log those events.
    </p>
    <v-row>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/mouse-events`"
          style="max-width:250px;"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
          mouse-events
          @click="events.push('click')"
          @dblclick="events.push('dblclick')"
          @mousedown="events.push('mousedown')"
          @mouseup="events.push('mouseup')"
        />
      </v-col>
      <v-col>
        <h3 class="text-h6">
          Events
        </h3>
        <span class="text-caption">{{ events.join(', ') }}</span>
      </v-col>
    </v-row>

    <h2 class="text-h4 mt-8">
      Usage with "click-outside" interactions
    </h2>

    <p class="my-4">
      This example illustrates how the <code>mouse-events</code> attribute can be used to provide compatibility with components that check if there was a click event outside of them.
      In this case the buttons use the <code>v-click-outside</code> directive from Vuetify.
      The first <code>d-frame</code> element has the <code>mouse-events</code> attribute and is therefore compatible with the button's expected behavior. The second <code>d-frame</code> element doesn't have the attribute and is not compatible.
    </p>

    <v-row>
      <v-col class="mt-7">
        <click-outside-button />
      </v-col>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/mouse-events-outside`"
          style="max-width:300px;"
          mouse-events
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
      <v-col>
        <d-frame
          :src="`${$config.app.baseURL}children/mouse-events-outside`"
          style="max-width:300px;"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'

const events = ref<string[]>([])
</script>
