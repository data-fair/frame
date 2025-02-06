<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        variant="flat"
        color="primary"
      >
        Open
      </v-btn>
    </template>
    <v-list density="compact">
      <v-list-item>Menu item 1</v-list-item>
      <v-list-item>Menu item 2</v-list-item>
    </v-list>
  </v-menu>
</template>
