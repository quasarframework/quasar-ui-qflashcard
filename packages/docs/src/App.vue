<template>
  <router-view />
</template>

<script setup lang="ts">
import { useMeta } from 'quasar'
import { useDark } from '@/.q-press/composables/dark'

import getMeta from '@/.q-press/assets/get-meta'

const { initDark } = useDark()
initDark()

useMeta({
  title: 'QFlashcard for Vue and Quasar',
  titleTemplate: (title) => `${title} | QFlashcard`,

  meta: getMeta(
    'QFlashcard - CSS transition flashcards for Vue and Quasar',
    'QFlashcard is a Vue and Quasar component for CSS-driven flashcard transitions.',
  ),
})
</script>
