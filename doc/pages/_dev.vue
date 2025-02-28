<template>
  <v-container>
    <h1 class="text-h3 mb-6">
      Development
      <br>
      <source-link />
    </h1>

    <v-row>
      <v-col>
        <v-btn
          color="primary"
          variant="elevated"
          class="mb-4"
          @click="reload += 1"
        >
          Reload
        </v-btn>
        <br>
        <v-btn
          color="primary"
          variant="elevated"
          class="mb-4"
          @click="destroy"
        >
          Destroy
        </v-btn>
        <d-frame
          v-if="!disconnected"
          key="dev"
          :src="`${$config.app.baseURL}children/_dev/?static=1`"
          style="max-width:300px;"
          resize
          debug
          sync-params
          :sync-path="`${$config.app.baseURL}_dev/`"
          .adapter="stateChangeAdapter"
          :reload="reload"
          class="border-dashed border-md border-text-info border-opacity-100 pa-2"
        />
      </v-col>
      <v-col>
        <div style="max-width:300px;">
          <router-view />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import '../components/d-frame-redefine'
import createStateChangeAdapter from '../../lib/vue-router/state-change-adapter'

const stateChangeAdapter = createStateChangeAdapter(useRouter())
const reload = ref(0)

const disconnected = ref(false)
const destroy = () => {
  disconnected.value = true
  setTimeout(() => {
    disconnected.value = false
  }, 1000)
}
</script>
