<template>
  <div class="q-pa-md row justify-center">
    <div class="q-gutter-md" style="width: 320px">
      <q-toggle v-model="active" label="Show answer" />

      <q-flashcard class="flashcard-demo">
        <q-flashcard-section class="question-panel" transition="fade-out" :active="active">
          <div class="absolute-center text-center">
            <div class="text-h6">Question</div>
            <div>What makes QFlashcard useful?</div>
          </div>
        </q-flashcard-section>

        <q-flashcard-section class="answer-panel" transition="fade-in zoom-in" :active="active">
          <div class="absolute-center text-center">
            <div class="text-h6">Answer</div>
            <div>Small, CSS-driven transitions for compact content swaps.</div>
          </div>
        </q-flashcard-section>
      </q-flashcard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QFlashcard, QFlashcardSection } from "@quasar/quasar-ui-qflashcard";

defineOptions({ name: "Basic" });

const active = ref(false);
</script>

<style scoped>
.flashcard-demo {
  width: 320px;
  height: 200px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: linear-gradient(135deg, #f6fbff, #e6f4ff);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
}

.question-panel {
  color: #173349;
}

.answer-panel {
  color: white;
  background: linear-gradient(135deg, #176995, #2a9ab8);
}
</style>
