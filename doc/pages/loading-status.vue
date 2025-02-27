<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Loading status
      <br>
      <source-link />
    </h1>
    <p>
      The <code>d-frame</code> element provides a few possibilities to manage the initial loading status of the content.
    </p>

    <h2 class="text-h4 mt-8">
      Receiving the ready event
    </h2>
    <p class="my-4">
      A <code>ready</code> event is emitted by the d-frame element based on a few conditions.
    </p>
    <p class="my-4">
      <ul class="ml-6">
        <li>If the <code>ready-message</code> attribute is set the frame is ready when the <code>ready()</code> function is called from the content page.</li>
        <li>Else, if the <code>resize</code> attribute is set to "yes" or empty the frame is ready when the initial size is defined.</li>
        <li>Else, the frame is ready when the iframe element emitted the standard "load" event.</li>
      </ul>
    </p>
    <v-btn
      color="primary"
      class="mb-4"
      @click="redraw(0); ready[0].value = false; ready[1].value = false; ready[2].value = false"
    >
      re-create
    </v-btn>
    <v-row>
      <v-col>
        <p class="text-caption&quot;">
          ready = {{ ready[0].value }}
        </p>
        <d-frame
          v-if="drawn[0].value"
          id="d-frame-ready1"
          :src="`${$config.app.baseURL}children/delayed-ready`"
          style="max-width:300px;height:130px;"
          ready-message
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
          @ready="ready[0].value = true"
        />
      </v-col>
      <v-col>
        <p class="text-caption&quot;">
          ready = {{ ready[1].value }}
        </p>
        <d-frame
          v-if="drawn[0].value"
          id="d-frame-ready2"
          :src="`${$config.app.baseURL}children/delayed-resize`"
          resize
          height="80px"
          style="max-width:300px;"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
          @ready="ready[1].value = true"
        />
      </v-col>
      <v-col>
        <p class="text-caption&quot;">
          ready = {{ ready[2].value }}
        </p>
        <d-frame
          v-if="drawn[0].value"
          id="d-frame-ready2"
          :src="`${$config.app.baseURL}children/basic`"
          style="max-width:300px;height:130px;"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
          @ready="ready[2].value = true"
        />
      </v-col>
    </v-row>

    <h2 class="text-h4 mt-8">
      Using the loading slot
    </h2>
    <p class="my-4">
      In this example the card inside the d-frame has a <code>loading</code> slot that uses Vuetify's VSkeletonLoader component.
    </p>
    <p class="my-4">
      The same conditions apply for the display of the <code>loading</code> slot as for the emission of the <code>ready</code> event.
    </p>
    <v-btn
      color="primary"
      class="mb-4"
      @click="redraw(1)"
    >
      re-create
    </v-btn>

    <v-row>
      <v-col>
        <d-frame
          v-if="drawn[1].value"
          id="d-frame-ready1"
          :src="`${$config.app.baseURL}children/delayed-ready`"
          style="max-width:300px;height:130px;"
          ready-message
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
          @ready="ready[0].value = true"
        >
          <div slot="loading">
            <v-skeleton-loader type="paragraph" />
          </div>
        </d-frame>
      </v-col>
      <v-col>
        <d-frame
          v-if="drawn[1].value"
          id="d-frame-ready2"
          :src="`${$config.app.baseURL}children/delayed-resize`"
          resize
          style="max-width:300px;"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
          @ready="ready[1].value = true"
        >
          <div slot="loading">
            <v-skeleton-loader type="paragraph" />
          </div>
        </d-frame>
      </v-col>
      <v-col>
        <d-frame
          v-if="drawn[1].value"
          id="d-frame-ready2"
          :src="`${$config.app.baseURL}children/basic`"
          style="max-width:300px;height:130px;"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
          @ready="ready[2].value = true"
        >
          <div slot="loading">
            <v-skeleton-loader type="paragraph" />
          </div>
        </d-frame>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
import { nextTick } from 'vue'

const ready = [ref(false), ref(false), ref(false)]
const drawn = [ref(true), ref(true), ref(true)]

const redraw = (index: number) => {
  drawn[index].value = false
  nextTick(() => {
    drawn[index].value = true
  })
}
</script>
