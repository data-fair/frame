<template>
  <div
    data-iframe-height
    class="text-caption"
  >
    This is a frame in a subdirectory that can navigate to its parent through an adapted link.
    <br>
    <br>
    Original link: /children/nav-sync-top-links/
    <br>
    Adapted link: {{ parentUrls.get('/children/nav-sync-top-links/').value }}
    <br>
    <br>
    Try "right-click > open in a new tab" on the following link.
    <br>
    <br>
    <router-link
      target="_top"
      to="/children/nav-sync-top-links/"
      :href="parentUrls.get('/children/nav-sync-top-links/').value"
    >
      Go to parent
    </router-link>
    <br>
    <source-link class="mt-4" />
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
