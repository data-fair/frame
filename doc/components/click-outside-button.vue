<template>
  <v-card
    v-click-outside="onClickOutside"
    :color="active ? 'primary' : undefined"
    :dark="active"
    class="mx-auto"
    height="100"
    rounded="xl"
    width="150"
    @click="active = true"
  >
    <div class="text-h6 fill-height d-flex align-center justify-center">
      {{ active ? 'Click Outside' : 'Click Me' }}
    </div>
  </v-card>
</template>

<script setup lang="ts">
const active = ref(false)
const onClickOutside = () => active.value = false
</script>
