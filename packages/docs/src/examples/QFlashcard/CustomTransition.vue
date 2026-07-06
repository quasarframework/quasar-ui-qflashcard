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
  border: 1px solid var(--qpress-border-subtle);
  background: var(--qpress-surface-raised);
  box-shadow: var(--qpress-card-shadow);
}

.custom-panel {
  border: 1px solid var(--qpress-border-subtle);
  color: var(--qpress-text-primary);
  background: var(--qpress-surface-raised);
}

.custom-panel--front {
  background:
    radial-gradient(circle at 20% 18%, rgb(var(--qpress-rgb-primary) / 0.14), transparent 34%),
    linear-gradient(135deg, rgb(var(--qpress-rgb-primary) / 0.1), transparent),
    var(--qpress-surface-raised);
}

.custom-panel--back {
  background:
    radial-gradient(circle at 78% 24%, rgb(var(--qpress-rgb-accent) / 0.14), transparent 34%),
    linear-gradient(135deg, rgb(var(--qpress-rgb-primary) / 0.1), transparent),
    var(--qpress-surface-raised);
}

.custom-card :deep(.fc-custom-pulse-out) {
  opacity: 1;
  transform: scale(1) rotate(0);
  transition:
    opacity 0.28s ease,
    transform 0.38s cubic-bezier(0.2, 0.9, 0.28, 1.2);
}

.custom-card :deep(.fc-custom-pulse-in) {
  opacity: 0;
  transform: scale(0.78) rotate(-5deg);
  transition:
    opacity 0.28s ease,
    transform 0.38s cubic-bezier(0.2, 0.9, 0.28, 1.2);
}

.custom-card :deep(.fc-custom-pulse-out--active) {
  opacity: 0;
  transform: scale(1.08) rotate(5deg);
}

.custom-card :deep(.fc-custom-pulse-in--active) {
  opacity: 1;
  transform: scale(1) rotate(0);
}
</style>
