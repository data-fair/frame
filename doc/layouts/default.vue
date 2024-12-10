<template>
  <v-app>
    <NuxtRouteAnnouncer />
    <v-navigation-drawer
      v-model="drawer"
      app
      color="primary"
      :temporary="temporary"
      :permanent="!temporary"
    >
      <v-list
        class="py-0"
      >
        <v-list-item
          to="/"
          class="py-2"
        >
          <v-list-item-title class="text-h6 font-weight-bold">
            d-frame
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-bold">
            {{ version }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-list
        class="pt-0"
      >
        <v-list-item to="/getting-started">
          <v-list-item-title>
            Getting started
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-list nav>
        <v-list-subheader class="text-white">
          Examples
        </v-list-subheader>
        <v-list-item to="/static-height">
          <v-list-item-title>
            Static height
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/dynamic-height">
          <v-list-item-title>
            Dynamic height
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/clipping">
          <v-list-item-title>
            Clipping effect
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/dynamic-src">
          <v-list-item-title>
            Dynamic src
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <template #append>
        <v-footer color="transparent">
          <v-spacer />
          <span class="text-caption">Maintained by&nbsp;<a
            href="https://koumoul.com"
            class="text-white text-decoration-none font-weight-bold"
          >Koumoul</a></span>
        </v-footer>
      </template>
    </v-navigation-drawer>
    <!-- <v-app-bar app :color="$vuetify.display.smAndDown ? 'white' : 'transparent'" dense flat> -->
    <v-app-bar
      app
      scroll-behavior="elevate"
    >
      <v-app-bar-nav-icon
        v-if="temporary"
        @click.stop="drawer = !drawer"
      />
      <v-spacer />
      <v-btn
        href="https://github.com/sponsors/koumoul-dev"
        variant="outlined"
        rounded="pill"
        color="primary"
        style="text-transform: none;"
        class="mx-2 font-weight-bold elevation-4"
      >
        <template #prepend>
          <v-icon
            color="pink-accent-3"
            size="large"
            :icon="mdiHeart"
          />
        </template>
        Sponsor
      </v-btn>
      <!-- <v-btn
        fab
        small
        href="https://gitter.im/koumoul-dev/vjsf"
        color="primary"
        class="ml-2"
        title="chat on gitter"
      >
        <v-icon>mdi-chat</v-icon>
      </v-btn> -->
      <v-btn
        :icon="mdiGithub"
        href="https://github.com/data-fair/frame"
        color="black"
        size="x-large"
        density="compact"
        title="repository on github"
      />
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { mdiGithub, mdiHeart } from '@mdi/js'
import { useDisplay } from 'vuetify'
import { version } from '~/../package.json'

const display = useDisplay()

const drawer = ref(false)
const temporary = computed(() => display.smAndDown.value)
</script>
