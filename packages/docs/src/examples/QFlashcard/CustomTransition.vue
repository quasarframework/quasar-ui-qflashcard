<template>
  <div class="q-pa-md row justify-center">
    <div class="custom-transition-demo">
      <q-toggle v-model="active" label="Reveal details" class="q-mb-md" />

      <q-flashcard no-hover class="custom-card">
        <q-flashcard-section
          class="custom-panel custom-panel--front"
          transition="custom-pulse-out"
          :active="active"
        >
          <div class="absolute-center text-center">
            <div class="text-overline">Custom CSS</div>
            <div class="text-h6">Front panel</div>
          </div>
        </q-flashcard-section>

        <q-flashcard-section
          class="custom-panel custom-panel--back"
          transition="custom-pulse-in"
          :active="active"
        >
          <div class="absolute-center text-center">
            <div class="text-overline">Mapped class</div>
            <div class="text-h6">Back panel</div>
          </div>
        </q-flashcard-section>
      </q-flashcard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QFlashcard, QFlashcardSection } from '@quasar/quasar-ui-qflashcard'

defineOptions({ name: 'CustomTransition' })

const active = ref(false)
</script>

<style scoped>
.custom-transition-demo {
  width: min(100%, 360px);
}

.custom-card {
  position: relative;
  height: 220px;
  overflow: hidden;
  border-radius: 18px;
  background: #101821;
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.18);
}

.custom-panel {
  color: white;
}

.custom-panel--front {
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.22), transparent 26%),
    linear-gradient(135deg, #1f7a8c, #2ec4b6);
}

.custom-panel--back {
  background:
    radial-gradient(circle at 78% 22%, rgba(255, 255, 255, 0.22), transparent 28%),
    linear-gradient(135deg, #5f2c82, #49a09d);
}

.custom-card :deep(.fc-custom-pulse-in),
.custom-card :deep(.fc-custom-pulse-out) {
  opacity: 0;
  transform: scale(0.78) rotate(-5deg);
  transition:
    opacity 0.28s ease,
    transform 0.38s cubic-bezier(0.2, 0.9, 0.28, 1.2);
}

.custom-card :deep(.fc-custom-pulse-in--active),
.custom-card :deep(.fc-custom-pulse-out--active) {
  opacity: 1;
  transform: scale(1) rotate(0);
}
</style>
