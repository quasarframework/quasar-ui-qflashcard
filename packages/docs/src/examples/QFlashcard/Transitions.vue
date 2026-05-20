<template>
  <div class="q-pa-md column items-center q-gutter-md">
    <div class="row items-center justify-center q-gutter-md full-width">
      <q-toggle v-model="active" label="Active" />
      <q-select
        v-model="selected"
        filled
        dense
        label="Transition"
        :options="transitions"
        option-label="label"
        style="min-width: 240px"
      />
    </div>

    <q-flashcard no-hover class="transition-card">
      <q-flashcard-section :transition="selected.front" :active="active">
        <div class="absolute-center text-center">
          <div class="text-overline">Front</div>
          <div class="text-h6">{{ selected.front }}</div>
        </div>
      </q-flashcard-section>

      <q-flashcard-section :transition="selected.back" :active="active">
        <div class="absolute-center text-center">
          <div class="text-overline">Back</div>
          <div class="text-h6">{{ selected.back }}</div>
        </div>
      </q-flashcard-section>
    </q-flashcard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QFlashcard, QFlashcardSection } from '@quasar/quasar-ui-qflashcard'

defineOptions({ name: 'Transitions' })

const transitions = [
  { label: 'Fade', front: 'fade-out', back: 'fade-in' },
  { label: 'Zoom', front: 'zoom-out', back: 'zoom-in' },
  { label: 'Flip Left', front: 'flip-left-out', back: 'flip-left-in' },
  { label: 'Flip Up', front: 'flip-up-out', back: 'flip-up-in' },
  { label: 'Slide Left', front: 'slide-left-out', back: 'slide-left-in' },
  { label: 'Slide Up', front: 'slide-up-out', back: 'slide-up-in' },
  { label: 'Roll Left', front: 'roll-left-out', back: 'roll-left-in' },
  { label: 'Spin', front: 'spin-out', back: 'spin-in' },
] as const

const active = ref(false)
const selected = ref<(typeof transitions)[number]>(transitions[0])
</script>

<style scoped>
.transition-card {
  width: min(320px, 100%);
  height: 210px;
  overflow: hidden;
  border-radius: 18px;
  color: white;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2), transparent 28%),
    linear-gradient(135deg, #124f6f, #2a9ab8);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.16);
}
</style>
