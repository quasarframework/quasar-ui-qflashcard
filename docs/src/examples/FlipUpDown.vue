<template>
  <div class="q-ma-md row justify-center q-gutter-sm">

    <div class="q-ma-md row justify-center items-center full-width">
      <q-toggle v-model="hover" label="Toggle Hover" />
      <q-toggle v-model="active" label="Toggle Transitions" />
    </div>

    <div class="description text-center rounded-borders">
      <q-flashcard :no-hover="hover" :style="style">
        <q-flashcard-section transition="flip-up-in" :active="active">
          <img :src="getImage(0)" width=320 height=210>
        </q-flashcard-section>
      </q-flashcard>
      <div class="text-h6 q-pt-sm">transition="flip-up-in"</div>
    </div>

    <div class="description text-center rounded-borders">
      <q-flashcard :no-hover="hover" :style="style">
        <q-flashcard-section transition="flip-up-out" :active="active">
          <img :src="getImage(0)" width=320 height=210>
        </q-flashcard-section>
      </q-flashcard>
      <div class="text-h6 q-pt-sm">transition="flip-up-out"</div>
    </div>

    <div class="description text-center rounded-borders">
      <q-flashcard :no-hover="hover" :style="style">
        <q-flashcard-section transition="flip-down-in" :active="active">
          <img :src="getImage(1)" width=320 height=210>
        </q-flashcard-section>
      </q-flashcard>
      <div class="text-h6 q-pt-sm">transition="flip-down-in"</div>
    </div>

    <div class="description text-center rounded-borders">
      <q-flashcard :no-hover="hover" :style="style">
        <q-flashcard-section transition="flip-down-out" :active="active">
          <img :src="getImage(1)" width=320 height=210>
        </q-flashcard-section>
      </q-flashcard>
      <div class="text-h6 q-pt-sm">transition="flip-down-out"</div>
    </div>

  </div>
</template>

<script>
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { QFlashcard, QFlashcardSection } from '@quasar/quasar-ui-qflashcard'
import '@quasar/quasar-ui-qflashcard/src/index.sass'

export default defineComponent({
  name: 'FlipUpDown',
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
        backgroundImage: `url('bgimg.webp')`, // eslint-disable-line
        padding: '10px',
        border: '10px solid #fff',
        textAlign: 'center',
        boxShadow: '1px 1px 2px #e6e6e6'
      }
    })

    const getImage = (index) => {
      if (index % 2) {
        return '1.webp'
      }
      return '2.webp'
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
