<template>
  <div
    data-iframe-height
    class="text-caption"
  >
    {{ route.fullPath }}
    <v-btn
      color="primary"
      variant="elevated"
      class="ml-2"
      to="/children/_dev/child"
    >
      Go to child
    </v-btn>
    <br>
    <br>
    Push:
    <v-btn
      color="primary"
      variant="elevated"
      @click="push(param + 1)"
    >
      Increment
    </v-btn>
    <v-btn
      color="primary"
      variant="elevated"
      class="ml-2"
      @click="push(undefined)"
    >
      Clear
    </v-btn>
    <br>
    <br>
    Replace:
    <v-btn
      color="primary"
      variant="elevated"
      @click="replace(param + 1)"
    >
      Increment
    </v-btn>
    <v-btn
      color="primary"
      variant="elevated"
      class="ml-2"
      @click="replace(undefined)"
    >
      Clear
    </v-btn>
    <br>
    <source-link />
  </div>
</template>

<script setup lang="ts">
import dFrameContentVueRouter from '../../../../lib/vue-router/d-frame-content'

const router = useRouter()
const route = useRoute()

// trigger a replace too early, this will be ignored for now, but should be logged as an error in the console
router.replace({ query: { param: 10 } })

dFrameContentVueRouter(router)
dFrameContentVueRouter(router) // should be ignored

const push = (param: number | undefined) => {
  // do not preserve the input parameter "static" to trigger a secondary replace after each change
  router.push({ query: { param } })
}

const replace = (param: number | undefined) => {
  router.replace({ query: { param } })
}

const param = computed(() => Number(route.query.param ?? 0))
</script>
