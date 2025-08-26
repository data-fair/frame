<template>
  <div
    data-iframe-height
    class="text-caption"
  >
    This is a frame that can navigate to a child page through an adapted link.
    <br>
    <br>
    Original link: /children/nav-sync-top-links/child
    <br>
    Adapted link: {{ parentUrls.get('/children/nav-sync-top-links/child').value }}
    <br>
    <br>
    Try "right-click > open in a new tab" on the following link.
    <br>
    <br>
    <router-link
      target="_top"
      to="/children/nav-sync-top-links/child"
      :href="parentUrls.get('/children/nav-sync-top-links/child').value"
    >
      Go to child
    </router-link>
    <br>
    <source-link
      class="mt-4"
      index
    />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import useDFrameParentUrls from '../../../../lib/vue/use-parent-urls'
import dFrameContentVueRouter from '../../../../lib/vue-router/d-frame-content'

const router = useRouter()
const dFrameContent = dFrameContentVueRouter(router)

const parentUrls = useDFrameParentUrls(dFrameContent, router)
</script>
