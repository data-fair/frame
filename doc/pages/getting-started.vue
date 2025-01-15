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
      <pre>npm install @data-fair/frame</pre>
    </code-block>

    <code-block
      language="markup"
      caption="Parent page"
    >
      <pre>&lt;script&gt;
  import '@data-fair/frame/lib/d-frame.js'
&lt;/script&gt;
&lt;d-frame src="..." /&gt;</pre>
    </code-block>

    <code-block
      language="js"
      caption="Child page"
    >
      <pre>
import '@data-fair/frame/lib/d-frame-content.js'</pre>
    </code-block>

    <h2 class="text-h4 mt-6 mb-3">
      Setup from CDN
    </h2>

    <code-block
      language="markup"
      caption="Parent page"
    >
      <pre>&lt;script src="https://cdn.jsdelivr.net/npm/@data-fair/frame@0/dist/d-frame.min.js" /&gt;
&lt;d-frame src="..." /&gt;</pre>
    </code-block>

    <code-block
      language="markup"
      caption="Child page"
    >
      <pre>&lt;script src="https://cdn.jsdelivr.net/npm/@data-fair/frame@0/dist/d-frame-content.min.js" /&gt;</pre>
    </code-block>

    <h2 class="text-h4 mt-6 mb-3">
      Vue Router integration
    </h2>
    <p>
      For fully reactive navigation syncing functionalities you need a small integration layer with your JS routing system. The source code for the Vue Router integration is available <a href="https://github.com/data-fair/frame/tree/main/lib/vue-router">here</a>.
    </p>

    <p class="my-4">
      First follow the documentation for <a href="https://vuejs.org/guide/extras/web-components#using-custom-elements-in-vue">using custom elements in Vue</a> as d-frame uses the Web Components API.
    </p>

    <code-block
      language="markup"
      caption="Parent page"
    >
      <pre>&lt;script setup&gt;
  import '@data-fair/frame/lib/d-frame.js'
  import createDFrameAdapter from '@data-fair/frame/lib/vue-router/state-change-adapter.js'
  const dFrameAdapter = createDFrameAdapter(useRouter())
&lt;/script&gt;
&lt;template&gt;
  &lt;d-frame src="..." .adapter="dFrameAdapter" /&gt;
&lt;/template&gt;</pre>
    </code-block>

    <code-block
      language="js"
      caption="Child page"
    >
      <pre>
import dFrameContent from '@data-fair/frame/lib/vue-router/d-frame-content.js'
dFrameContent(useRouter())</pre>
    </code-block>

    <h2 class="text-h4 mt-6 mb-3">
      Vue reactive object integration
    </h2>
    <p class="mb-4">
      If instead of using Vue Router you manage reactive search params using a Reactive Vue object you can use another provided adapter. The source code for this integration is available <a href="https://github.com/data-fair/frame/tree/main/lib/vue-reactive">here</a>.
    </p>

    <code-block
      language="js"
      caption="Parent page"
    >
      <pre>
import createDFrameAdapter from '@data-fair/frame/lib/vue-reactive/state-change-adapter.js'
const dFrameAdapter = createDFrameAdapter(reactiveParams)</pre>
    </code-block>

    <code-block
      language="js"
      caption="Child page"
    >
      <pre>
import dFrameContent from '@data-fair/frame/lib/vue-reactive/d-frame-content.js'
dFrameContent(reactiveParams)</pre>
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
