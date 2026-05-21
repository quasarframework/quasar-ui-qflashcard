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
          <div class="mashup-content">
            <div class="mashup-header">Combo Demo</div>
            <div class="mashup-copy">
              Layer multiple sections to turn a simple image into a richer content reveal.
            </div>
            <div class="mashup-action">
              <q-btn color="dark" label="Learn More" no-caps />
            </div>
          </div>
        </q-flashcard-section>
      </q-flashcard>

      <q-flashcard :no-hover="hoverDisabled" class="mashup-card">
        <q-flashcard-section :transition="['nudge-out', 'fade-out']" :active="active">
          <img src="/2.webp" alt="Ocean coastline" class="mashup-image" />
        </q-flashcard-section>

        <q-flashcard-section transition="fade-in" class="mashup-overlay blue" :active="active">
          <div class="mashup-content">
            <div class="mashup-header">Mashup Demo</div>
            <div class="mashup-copy">
              Transitions can stack, nest, and complement one another for playful reveals.
            </div>
            <div class="mashup-action">
              <q-btn color="dark" label="Explore" no-caps />
            </div>
          </div>
        </q-flashcard-section>
      </q-flashcard>

      <q-flashcard :no-hover="hoverDisabled" class="mashup-card">
        <q-flashcard-section>
          <img src="/2.webp" alt="Ocean coastline" class="mashup-image" />
        </q-flashcard-section>

        <q-flashcard-section transition="fade-in" class="mashup-scrim" :active="active" />

        <q-flashcard-section transition="slide-up-in" class="mashup-panel" :active="active">
          <div class="panel-kicker">Layered Reveal</div>
          <div class="panel-title">Scrim plus content panel</div>
          <div class="panel-copy">
            Keep the base image visible while separate sections fade in the tint and slide in the copy.
          </div>
        </q-flashcard-section>
      </q-flashcard>

      <q-flashcard :no-hover="hoverDisabled" class="mashup-card teal-card">
        <q-flashcard-section :transition="['fade-out', 'zoom-out']" :active="active" class="center-stage">
          <q-icon name="touch_app" size="52px" />
          <div class="text-h6 q-mt-sm">Action Card</div>
          <div class="text-caption">Fade and zoom away</div>
        </q-flashcard-section>

        <q-flashcard-section transition="spin-in" class="mashup-chip" :active="active">
          <q-badge color="white" text-color="primary" label="New" />
        </q-flashcard-section>

        <q-flashcard-section transition="shake-left" class="mashup-action-card" :active="active">
          <div class="text-h6">Attention cue</div>
          <div class="text-caption q-mt-xs">
            Shake transitions are useful for focused reveals instead of full card swaps.
          </div>
          <q-btn class="q-mt-md" color="white" text-color="primary" label="Try It" no-caps />
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

.teal-card {
  color: white;
  background: radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.22), transparent 18%),
    linear-gradient(135deg, #18617d, #2faabd);
}

.mashup-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mashup-overlay {
  color: white;
}

.amber {
  background-color: rgba(219, 127, 8, 0.75);
}

.blue {
  background-color: rgba(23, 105, 149, 0.78);
}

.mashup-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
}

.mashup-header {
  width: 100%;
  height: 45px;
  padding: 10px;
  font-size: 17px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.8);
}

.mashup-copy {
  width: 100%;
  max-width: 280px;
  margin: 0;
  font-family: Georgia, serif;
  font-size: 13px;
  font-style: italic;
  line-height: 1.35;
  text-align: center;
}

.mashup-action {
  display: flex;
  justify-content: center;
}

.mashup-scrim {
  background: linear-gradient(180deg, rgba(7, 25, 38, 0.08), rgba(7, 25, 38, 0.78));
}

.mashup-panel {
  display: flex;
  height: auto;
  min-height: 46%;
  flex-direction: column;
  justify-content: center;
  padding: 18px 22px;
  color: white;
  background: rgba(10, 34, 48, 0.82);
  backdrop-filter: blur(3px);
}

.panel-kicker {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.72;
}

.panel-title {
  margin-top: 4px;
  font-size: 18px;
  font-weight: 700;
}

.panel-copy {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.35;
}

.center-stage,
.mashup-action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
}

.mashup-chip {
  display: flex;
  height: auto;
  justify-content: flex-end;
  padding: 16px;
}

.mashup-action-card {
  color: #123142;
  background: rgba(255, 255, 255, 0.92);
}
</style>
