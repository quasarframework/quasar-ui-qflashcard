<template>
  <div class="q-pa-md column items-center q-gutter-lg">
    <div class="row items-center justify-center q-gutter-md full-width">
      <q-toggle v-model="hoverDisabled" label="Disable hover" />
      <q-toggle v-model="active" label="Active" />
    </div>

    <div class="transition-grid">
      <q-card
        v-for="item in transitionItems"
        :key="item.label"
        flat
        bordered
        class="transition-demo"
      >
        <q-card-section>
          <div class="text-subtitle2">{{ item.label }}</div>
          <div class="text-caption text-grey-7">{{ item.caption }}</div>
        </q-card-section>

        <q-card-section>
          <q-flashcard :no-hover="hoverDisabled" class="transition-card">
            <q-flashcard-section :transition="item.front" :active="active">
              <div class="absolute-center text-center">
                <div class="text-overline">Front</div>
                <div>{{ item.front }}</div>
              </div>
            </q-flashcard-section>

            <q-flashcard-section v-if="item.back" :transition="item.back" :active="active">
              <div class="absolute-center text-center">
                <div class="text-overline">Back</div>
                <div>{{ item.back }}</div>
              </div>
            </q-flashcard-section>
          </q-flashcard>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QFlashcard, QFlashcardSection } from "@quasar/quasar-ui-qflashcard";

defineOptions({ name: "TransitionFamilies" });

const active = ref(false);
const hoverDisabled = ref(false);

interface TransitionItem {
  label: string;
  caption: string;
  front: string;
  back?: string;
}

const transitionItems: TransitionItem[] = [
  { label: "Nudge", caption: "Single-panel movement", front: "nudge-out" },
  { label: "Fade", caption: "Opacity in and out", front: "fade-out", back: "fade-in" },
  { label: "Zoom", caption: "Scale in and out", front: "zoom-out", back: "zoom-in" },
  { label: "Spin", caption: "Rotational reveal", front: "spin-out", back: "spin-in" },
  {
    label: "Flip left/right",
    caption: "Horizontal 3D flip",
    front: "flip-left-out",
    back: "flip-right-in",
  },
  {
    label: "Flip up/down",
    caption: "Vertical 3D flip",
    front: "flip-up-out",
    back: "flip-down-in",
  },
  {
    label: "Slide left/right",
    caption: "Horizontal slide",
    front: "slide-left-out",
    back: "slide-right-in",
  },
  {
    label: "Slide up/down",
    caption: "Vertical slide",
    front: "slide-up-out",
    back: "slide-down-in",
  },
  {
    label: "Roll left/right",
    caption: "Horizontal roll",
    front: "roll-left-out",
    back: "roll-right-in",
  },
  {
    label: "Roll top/bottom",
    caption: "Vertical roll",
    front: "roll-top-out",
    back: "roll-bottom-in",
  },
  { label: "Shake left", caption: "Attention cue", front: "shake-left" },
  { label: "Shake up", caption: "Attention cue", front: "shake-up" },
];
</script>

<style scoped>
.transition-grid {
  display: grid;
  width: 100%;
  max-width: 1060px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 18px;
}

.transition-demo {
  overflow: hidden;
}

.transition-card {
  width: 100%;
  height: 155px;
  overflow: hidden;
  border-radius: 16px;
  color: white;
  background:
    radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.2), transparent 28%),
    linear-gradient(135deg, #1b546a, #38a6b9);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
}
</style>
