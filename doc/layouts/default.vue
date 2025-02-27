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
        <v-list-item to="/loading-status">
          <v-list-item-title>
            Loading status
          </v-list-item-title>
        </v-list-item>
        <!-- <v-list-item to="/clipping">
          <v-list-item-title>
            Clipping effect
          </v-list-item-title>
        </v-list-item> -->
        <v-list-item to="/dynamic-src">
          <v-list-item-title>
            Dynamic src
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/nav-sync">
          <v-list-item-title>
            Navigation syncing
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/nav-sync-prefix">
          <v-list-item-title>
            Navigation syncing with prefix
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/nav-sync-path">
          <v-list-item-title>
            Navigation syncing with path
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/dynamic-nav-sync">
          <v-list-item-title>
            Dynamic navigation syncing
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/messages">
          <v-list-item-title>
            Messages
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/mouse-events">
          <v-list-item-title>
            Mouse events
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/extra-attrs">
          <v-list-item-title>
            Extra attributes
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/force-reload">
          <v-list-item-title>
            Force reload
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/v-iframe-compat">
          <v-list-item-title>
            V-Iframe compatibility
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <template #append>
        <v-row class="ma-0 px-4 pb-2">
          <span class="text-caption">Maintained by&nbsp;<a
            href="https://koumoul.com"
            class="text-white text-decoration-none font-weight-bold"
          >Koumoul</a></span>
        </v-row>
        <v-row class="ma-0 px-4 pb-4">
          <v-btn
            href="https://github.com/sponsors/koumoul-dev"
            rounded="pill"
            color="surface"
            variant="flat"
            style="text-transform: none;"
            class="font-weight-bold"
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
          <v-spacer />
          <v-btn
            :icon="mdiGithub"
            href="https://github.com/data-fair/frame"
            color="primary"
            variant="flat"
            title="repository on github"
            size="lg"
          />
        </v-row>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      v-if="temporary"
      app
      density="compact"
      collapse
      scroll-behavior="elevate"
      style="max-width: 50px;"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
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
