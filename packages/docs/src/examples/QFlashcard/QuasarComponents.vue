<template>
  <div class="q-pa-md column items-center q-gutter-lg">
    <div class="row justify-center q-gutter-lg full-width">
      <q-flashcard no-hover class="component-card">
        <q-flashcard-section transition="slide-left-out" :active="formActive">
          <div class="row fit">
            <div class="col-6">
              <img src="/1.webp" alt="Mountain lake" class="component-image" />
            </div>
            <div class="col-6 q-pa-md text-dark">
              <div class="text-h6">Quasar Inside</div>
              <p class="text-caption">
                Flashcard sections can contain layouts, inputs, buttons, and forms.
              </p>
              <q-btn color="primary" label="Open Form" no-caps @click="formActive = true" />
            </div>
          </div>
        </q-flashcard-section>

        <q-flashcard-section transition="slide-left-in" class="form-panel" :active="formActive">
          <q-input
            v-model="email"
            filled
            dense
            :dark="false"
            bg-color="grey-1"
            color="primary"
            input-class="text-dark"
            label="Email"
            label-color="primary"
            type="email"
          />
          <div class="row justify-between q-mt-md">
            <q-btn flat color="grey-8" label="Back" no-caps @click="formActive = false" />
            <q-btn color="primary" label="Subscribe" no-caps />
          </div>
        </q-flashcard-section>
      </q-flashcard>

      <q-flashcard no-hover class="component-card dark-card">
        <q-flashcard-section transition="nudge-out" :active="controlsActive">
          <div class="absolute-center text-center">
            <div class="text-h6">Pick a mode</div>
            <div class="text-caption">Hover or activate to reveal controls</div>
            <q-btn
              class="q-mt-md"
              color="white"
              text-color="primary"
              label="Show Controls"
              no-caps
              @click="controlsActive = true"
            />
          </div>
        </q-flashcard-section>

        <q-flashcard-section transition="slide-up-in" class="toggle-panel" :active="controlsActive">
          <q-toolbar class="bg-white text-dark rounded-borders shadow-2">
            <q-btn-toggle
              v-model="mode"
              no-caps
              rounded
              unelevated
              toggle-color="primary"
              :options="modeOptions"
            />
            <q-space />
            <q-btn
              flat
              round
              dense
              icon="close"
              aria-label="Close controls"
              @click="controlsActive = false"
            />
          </q-toolbar>
        </q-flashcard-section>
      </q-flashcard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QFlashcard, QFlashcardSection } from '@quasar/quasar-ui-qflashcard'

defineOptions({ name: 'QuasarComponents' })

const formActive = ref(false)
const controlsActive = ref(false)
const email = ref('')
const mode = ref('preview')
const modeOptions = [
  { label: 'Preview', value: 'preview' },
  { label: 'Edit', value: 'edit' },
  { label: 'Share', value: 'share' },
]
</script>

<style scoped>
.component-card {
  width: min(340px, 100%);
  height: 230px;
  overflow: hidden;
  border-radius: 18px;
  background: #f7fbff;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.16);
}

.dark-card {
  color: white;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2), transparent 28%),
    linear-gradient(135deg, #1c394f, #287b8d);
}

.component-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-panel {
  padding: 28px;
  color: #263238;
  background: white;
}

.toggle-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>
