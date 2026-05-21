<template>
  <div class="q-pa-md column items-center q-gutter-lg">
    <div class="row items-center justify-center q-gutter-md full-width">
      <q-toggle v-model="hoverDisabled" label="Disable hover" />
      <q-toggle v-model="active" label="Active" />
    </div>

    <div class="row justify-center q-gutter-lg full-width">
      <q-flashcard :no-hover="hoverDisabled" class="mashup-card">
        <q-flashcard-section transition="flip-left-out" :active="active">
          <img src="/1.webp" alt="Mountain lake" class="mashup-image" />
        </q-flashcard-section>

        <q-flashcard-section transition="flip-left-in" class="mashup-overlay amber" :active="active">
          <q-flashcard-section transition="drop-down" class="mashup-header" :active="active">
            Combo Demo
          </q-flashcard-section>
          <q-flashcard-section transition="slide-up-in" class="mashup-copy" :active="active">
            Layer multiple sections to turn a simple image into a richer content reveal.
          </q-flashcard-section>
          <q-flashcard-section transition="fade-in" class="mashup-action" :active="active">
            <q-btn color="dark" label="Learn More" no-caps />
          </q-flashcard-section>
        </q-flashcard-section>
      </q-flashcard>

      <q-flashcard :no-hover="hoverDisabled" class="mashup-card">
        <q-flashcard-section :transition="['nudge-out', 'fade-out']" :active="active">
          <img src="/2.webp" alt="Ocean coastline" class="mashup-image" />
        </q-flashcard-section>

        <q-flashcard-section transition="fade-in" class="mashup-overlay blue" :active="active">
          <q-flashcard-section transition="shake-down" class="mashup-header" :active="active">
            Mashup Demo
          </q-flashcard-section>
          <q-flashcard-section transition="spin-in" class="mashup-copy" :active="active">
            Transitions can stack, nest, and complement one another for playful reveals.
          </q-flashcard-section>
          <q-flashcard-section transition="slide-up-in" class="mashup-action" :active="active">
            <q-btn color="dark" label="Explore" no-caps />
          </q-flashcard-section>
        </q-flashcard-section>
      </q-flashcard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QFlashcard, QFlashcardSection } from '@quasar/quasar-ui-qflashcard'

defineOptions({ name: 'Mashups' })

const active = ref(false)
const hoverDisabled = ref(false)
</script>

<style scoped>
.mashup-card {
  width: min(340px, 100%);
  height: 230px;
  padding: 10px;
  overflow: hidden;
  border: 10px solid white;
  background-image: url('/bgimg.webp');
  background-size: cover;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
}

.mashup-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mashup-overlay {
  inset: 10px;
  color: white;
}

.amber {
  background-color: rgba(219, 127, 8, 0.75);
}

.blue {
  background-color: rgba(23, 105, 149, 0.78);
}

.mashup-header {
  width: 100%;
  height: 45px;
  margin-top: 18px;
  padding: 10px;
  font-size: 17px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.8);
}

.mashup-copy {
  width: 100%;
  height: 88px;
  margin-top: 62px;
  padding: 18px;
  font-family: Georgia, serif;
  font-size: 13px;
  font-style: italic;
  line-height: 1.35;
  text-align: center;
}

.mashup-action {
  inset: auto 0 18px;
  display: flex;
  justify-content: center;
}
</style>
