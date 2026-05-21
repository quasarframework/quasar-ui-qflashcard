<template>
  <div class="q-pa-md column items-center q-gutter-md">
    <div class="row items-center justify-center q-gutter-md full-width">
      <q-toggle v-model="hoverDisabled" label="Disable hover" />
      <q-toggle v-model="active" label="Active" />
    </div>

    <q-flashcard :no-hover="hoverDisabled" class="combo-card">
      <q-flashcard-section transition="flip-left-out" :active="active">
        <img src="/1.webp" alt="Mountain lake" class="combo-image" />
      </q-flashcard-section>

      <q-flashcard-section transition="flip-left-in" :active="active" class="combo-back">
        <q-flashcard-section class="combo-header" :active="active">
          Combo Flashcard
        </q-flashcard-section>

        <q-flashcard-section class="combo-copy" :active="active">
          Combine QFlashcard sections and transitions to build richer reveal effects.
        </q-flashcard-section>

        <q-flashcard-section class="combo-action flex justify-center items-end" :active="active">
          <q-btn color="dark" text-color="white" label="Learn More" no-caps />
        </q-flashcard-section>
      </q-flashcard-section>
    </q-flashcard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QFlashcard, QFlashcardSection } from '@quasar/quasar-ui-qflashcard'

defineOptions({ name: 'Combo' })

const active = ref(false)
const hoverDisabled = ref(false)
</script>

<style scoped>
.combo-card {
  width: min(320px, 100%);
  height: 220px;
  padding: 10px;
  overflow: hidden;
  border: 10px solid white;
  background-image: url('/bgimg.webp');
  background-size: cover;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
}

.combo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.combo-back {
  inset: 10px;
  color: white;
  background-color: rgba(219, 127, 8, 0.75);
}

.combo-header {
  width: 100%;
  height: 45px;
  margin-top: 20px;
  padding: 10px;
  font-size: 17px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.8);
}

.combo-copy {
  width: 100%;
  height: 90px;
  margin-top: 62px;
  padding: 18px;
  font-family: Georgia, serif;
  font-size: 13px;
  font-style: italic;
  line-height: 1.35;
  text-align: center;
}

.combo-action {
  inset: auto 0 18px;
}
</style>
