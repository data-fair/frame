<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container class="doc-content-page">
    <h1 class="text-h3 mb-8">
      {{ title }}
    </h1>

    <h2 class="text-h4 my-4">
      Setup from NPM
    </h2>

    <code-block language="bash">
      <pre>
npm install @data-fair/frame</pre>
    </code-block>

    <p>Parent page:</p>
    <code-block language="markup">
      <pre>
&lt;script&gt;
  import '@data-fair/frame/src/d-frame.js'
&lt;/script&gt;
&lt;template&gt;
  &lt;d-frame src="..." /&gt;
&lt;/template&gt;</pre>
    </code-block>

    <p class="pt-2">
      Child page:
    </p>
    <code-block language="markup">
      <pre>
&lt;script&gt;
  import '@data-fair/frame/src/d-frame-content.js'
&lt;/script&gt;</pre>
    </code-block>

    <h2 class="text-h4 my-4">
      Setup from CDN
    </h2>

    <p>Parent page:</p>
    <code-block language="markup">
      <pre>
&lt;script src="https://cdn.jsdelivr.net/npm/@data-fair/frame@0/dist/d-frame.min.js" /&gt;
&lt;template&gt;
  &lt;d-frame src="..." /&gt;
&lt;/template&gt;</pre>
    </code-block>

    <p class="pt-2">
      Child page:
    </p>
    <code-block language="markup">
      <pre>
&lt;script src="https://cdn.jsdelivr.net/npm/@data-fair/frame@0/dist/d-frame-content.min.js" /&gt;</pre>
    </code-block>

    <h2 class="text-h4 my-4">
      Vue Router integration
    </h2>
    <p>
      For fully reactive navigation syncing functionalities you need a small integration layer with your JS routing system. The source code for the Vue Router integration is available <a href="https://github.com/data-fair/frame/tree/main/src/vue-router">here</a>.
    </p>

    <p class="mt-6">
      First follow the documentation for <a href="https://vuejs.org/guide/extras/web-components#using-custom-elements-in-vue">using custom elements in Vue</a> as d-frame uses the Web Components API.
    </p>

    <p class="mt-6">
      Parent page:
    </p>
    <code-block language="markup">
      <pre>
&lt;script&gt;
  import '@data-fair/frame/src/d-frame.js'
  import createDFrameAdapter from '@data-fair/frame/src/vue-router/state-change-adapter.js'

  const dFrameAdapter = createDFrameAdapter(useRouter())
&lt;/script&gt;
&lt;template&gt;
  &lt;d-frame src="..." .adapter="dFrameAdapter" /&gt;
&lt;/template&gt;</pre>
    </code-block>

    <p class="mt-6">
      Child page:
    </p>
    <code-block language="markup">
      <pre>
&lt;script&gt;
  import dFrameContent from '@data-fair/frame/src/vue-router/d-frame-content.js'

  dFrameContent(useRouter())
&lt;/script&gt;</pre>
    </code-block>
  </v-container>
</template>

<script setup>
import { VContainer } from 'vuetify/components'

const title = 'Getting started'

useHead({
  title: 'd-frame - ' + title,
})
</script>
