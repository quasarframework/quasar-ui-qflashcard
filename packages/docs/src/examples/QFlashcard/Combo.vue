<template>
  <div class="q-pa-md column items-center q-gutter-lg">
    <div class="row items-center justify-center q-gutter-md full-width">
      <q-toggle v-model="hoverDisabled" label="Disable hover" />
      <q-toggle v-model="active" label="Active" />
    </div>

    <div class="row justify-center q-gutter-lg full-width">
      <q-flashcard :no-hover="hoverDisabled" class="combo-card photo-card">
        <q-flashcard-section transition="flip-left-out" :active="active">
          <img src="/1.webp" alt="Mountain lake" class="combo-image" />
        </q-flashcard-section>

        <q-flashcard-section
          transition="flip-left-in"
          :active="active"
          class="combo-back amber-back"
        >
          <div class="combo-back-content">
            <div class="combo-header">Image Flip</div>

            <div class="combo-copy">
              Pair matching `flip-left-out` and `flip-left-in` sections for a classic front/back
              card.
            </div>

            <div class="combo-action">
              <q-btn color="dark" text-color="white" label="Learn More" no-caps />
            </div>
          </div>
        </q-flashcard-section>
      </q-flashcard>

      <q-flashcard :no-hover="hoverDisabled" class="combo-card">
        <q-flashcard-section
          transition="slide-up-out"
          :active="active"
          class="combo-front gradient-front"
        >
          <q-icon name="style" size="44px" />
          <div class="text-h6 q-mt-sm">Content Card</div>
          <div class="text-caption">Slide the front away</div>
        </q-flashcard-section>

        <q-flashcard-section transition="slide-up-in" :active="active" class="combo-back blue-back">
          <div class="combo-back-content">
            <q-badge color="white" text-color="primary" label="Recipe" />
            <div class="combo-copy">
              Slide transitions work well when the back panel is a compact callout or quick action.
            </div>
            <q-btn color="white" text-color="primary" label="Open Details" no-caps />
          </div>
        </q-flashcard-section>
      </q-flashcard>

      <q-flashcard :no-hover="hoverDisabled" class="combo-card">
        <q-flashcard-section
          :transition="['fade-out', 'zoom-out']"
          :active="active"
          class="combo-front stats-front"
        >
          <div class="text-overline">Status</div>
          <div class="text-h4">86%</div>
          <div class="text-caption">Completion</div>
        </q-flashcard-section>

        <q-flashcard-section
          :transition="['fade-in', 'zoom-in']"
          :active="active"
          class="combo-back dark-back"
        >
          <div class="combo-back-content">
            <div class="combo-header compact">Next Step</div>
            <div class="combo-copy">
              Array syntax lets you combine transitions, such as fading and zooming the same
              section.
            </div>
            <q-btn outline color="white" label="Review" no-caps />
          </div>
        </q-flashcard-section>
      </q-flashcard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QFlashcard, QFlashcardSection } from "@quasar/quasar-ui-qflashcard";

defineOptions({ name: "Combo" });

const active = ref(false);
const hoverDisabled = ref(false);
</script>

<style scoped>
.combo-card {
  width: min(320px, 100%);
  height: 220px;
  padding: 10px;
  overflow: hidden;
  border: 10px solid white;
  background-image: url("/bgimg.webp");
  background-size: cover;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
}

.photo-card {
  background-image: url("/bgimg.webp");
}

.combo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.combo-front {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.combo-back {
  color: white;
}

.combo-back-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  text-align: center;
}

.combo-header {
  width: 100%;
  height: 45px;
  padding: 10px;
  font-size: 17px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.8);
}

.combo-header.compact {
  height: auto;
  padding: 8px 12px;
}

.combo-copy {
  width: 100%;
  max-width: 260px;
  margin: 0;
  font-family: Georgia, serif;
  font-size: 13px;
  font-style: italic;
  line-height: 1.35;
  text-align: center;
}

.combo-action {
  display: flex;
  justify-content: center;
}

.amber-back {
  background-color: rgba(219, 127, 8, 0.75);
}

.blue-back {
  background: linear-gradient(135deg, rgba(20, 91, 154, 0.95), rgba(37, 173, 194, 0.9));
}

.dark-back {
  background: linear-gradient(135deg, #1d2733, #39485c);
}

.gradient-front {
  color: white;
  background: linear-gradient(135deg, #1d7897, #30b5c6);
}

.stats-front {
  color: #173349;
  background: radial-gradient(circle at 30% 20%, #fff 0, #e4f3fb 48%, #c5e3f0 100%);
}
</style>
