<template>
  <div class="q-ma-md row justify-evenly" style="max-width: 700px; width: 100%;">

    <div class="q-ma-md row justify-center items-center full-width">
      <q-toggle v-model="hover" label="Toggle Hover"/>
      <q-toggle v-model="active" label="Toggle Transitions"/>
    </div>

    <div class="description text-center rounded-borders">
      <q-flashcard :no-hover="hover" :style="style">
        <q-flashcard-section transition="slide-left-out" :active="active">
          <div class="row full-width">
            <div class="col-6">
              <img
                src="wspa-logo.svg"
                style="width:100%;max-width:100px;"
              >
            </div>
            <div class="text-center text-black col-6">
              By signing up, you are joining a community of people who are moving the world to protect animals. Join our mailing list to receive email updates about our latest
              news.
            </div>
          </div>
          <div class="row">
            <a href="https://www.worldanimalprotection.ca/" target="_blank" class="my-button">Learn More</a>
          </div>
        </q-flashcard-section>
        <q-flashcard-section transition="slide-left-in" class="fit" :active="active">
          <div class="q-pa-md q-gutter-sm">
            <q-input v-model="email" filled type="email" hint="Email"></q-input>
            <q-flashcard-section transition="roll-left-in" style="top:60%" :active="active">
              <q-btn color="white" text-color="black" label="Submit" class="q-mr-sm"></q-btn>
              <a href="https://www.worldanimalprotection.ca" target="_blank" class="my-button">Learn More</a>
            </q-flashcard-section>
          </div>
        </q-flashcard-section>
      </q-flashcard>
      <div class="text-h5 q-pt-sm">Component Demo #1</div>
    </div>

  </div>
</template>

<script>
import {computed, defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: '',
  setup() {

    const data = reactive({
      email: '',
      hover: false,
      active: false
    })

    const style = computed(() => {
      return {
        width: '320px',
        height: '220px',
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
  background-color: rgba(0, 0, 0, 0.8)
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
