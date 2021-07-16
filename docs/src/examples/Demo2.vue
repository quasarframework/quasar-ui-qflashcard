<template>
  <div class="q-ma-md row justify-center q-gutter-sm">

    <div class="q-ma-md row justify-center items-center full-width">
      <q-toggle v-model="hover" label="Toggle Hover" />
      <q-toggle v-model="active" label="Toggle Transitions" />
    </div>

    <div class="description text-center rounded-borders">
      <q-flashcard :no-hover="hover" :style="style">
        <q-flashcard-section transition="spin-out" :active="active">
          <img :src="getImage(0)" width=320 height=210>
        </q-flashcard-section>
        <q-flashcard-section transition="spin-in" class="fit" style="top:0;background-color:rgba(219,127,8, 0.7);" :active="active">
          <q-flashcard-section class="text-center my-header" :active="active">
            Combo Demo #2
          </q-flashcard-section>
          <q-flashcard-section class="my-text" :active="active">
            For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
          </q-flashcard-section>
          <q-flashcard-section class="fit flex justify-center items-end" :active="active">
            <a href="#" class="my-button">Learn More</a>
          </q-flashcard-section>
        </q-flashcard-section>
      </q-flashcard>
      <div class="text-h6 q-pt-sm">Combo Demo #2</div>
    </div>

  </div>
</template>

<script>
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { QFlashcard, QFlashcardSection } from '@quasar/quasar-ui-qflashcard'
import '@quasar/quasar-ui-qflashcard/src/index.sass'

export default defineComponent({
  name: 'Demo2',
  components: {
    QFlashcard,
    QFlashcardSection
  },
  setup() {

    const data = reactive({
      email: '',
      hover: false,
      active: false
    })

    const style = computed(() => {
      return {
        width: '340px',
        height: '230px',
        backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/next/docs/public/bgimg.webp')`, // eslint-disable-line
        padding: '10px',
        border: '10px solid #fff',
        textAlign: 'center',
        boxShadow: '1px 1px 2px #e6e6e6'
      }
    })

    const getImage = (index) => {
      if (index % 2) {
        return 'https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/next/docs/public/1.webp'
      }
      return 'https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/next/docs/public/2.webp'
    }

    return {
      getImage,
      style,
      ...toRefs(data)
    }
  }
})
</script>

<style lang="sass" scoped>
.description
  padding: 10px
  background-color: black
  color: white
  box-shadow: 1px 1px 2px #e6e6e6

.my-header
  width: 100%
  top: 0
  height: 45px
  color: white
  background-color: rgba(0,0,0,0.8)
  text-transform: uppercase
  text-align: center
  font-size: 17px
  margin: 20px 0 0 0
  padding: 10px

.my-text
  width: 100%
  top: 0
  height: 80px
  color: white
  text-align: center
  font-size: 12px
  margin: 60px 0 0 0
  padding: 20px
  line-height: normal
  font-family: Georgia, serif
  font-style: italic

.my-button-container
  width: 100%

.my-button
  text-decoration: none
  text-transform: uppercase
  margin: 0 0 20px 0
  text-align: center
  padding: 7px 14px
  background-color: #000
  color: #fff
  text-transform: uppercase
  box-shadow: 0 0 1px #000
  transition-delay: 0.2s

.my-button:hover
  box-shadow: 0 0 5px #000
</style>
