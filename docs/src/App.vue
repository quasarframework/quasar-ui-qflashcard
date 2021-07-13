<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useMeta } from 'quasar'

import { provideMarkdownStore } from 'assets/markdown-store.js'
import getMeta from 'assets/get-meta.js'

export default defineComponent({
  name: 'App',

  setup () {
    useMeta({
      title: 'QFlashcard » mashups and transitions Quasar apps',
      titleTemplate: title => `${ title } » QFlashcard`,

      meta: getMeta(
        'QFlashcard - mashups and transitions for your Quasar apps',
        'QFlashcard allows mashups and transitions for your Quasar apps.'
      )
    })

    provideMarkdownStore()
  }
})
</script>
