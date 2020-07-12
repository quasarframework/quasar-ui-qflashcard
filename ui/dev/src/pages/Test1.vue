<template>
  <q-page padding>

    <div class="row justify-around" style="width:100%;">
      <div class="q-pa-sm" v-for="(transition, index) in transitions" :key="index">
        <div class="description text-center rounded-borders">
          <p>Touch or click the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section :transition="transition">
              <img :src="getImage(index)" width=300 height=200>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">transition="{{transition}}"</div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      model: false,
      transitions: [
        'nudge-in',
        'nudge-out',

        'fade-in',
        'fade-out',

        'zoom-out',
        'zoom-in',

        'roll-left-in',
        'roll-left-out',
        'roll-right-in',
        'roll-right-out',

        'roll-top-in',
        'roll-top-out',
        'roll-bottom-in',
        'roll-bottom-out',

        'slide-left-out',
        'slide-left-in',
        'slide-right-out',
        'slide-right-in',

        'slide-down-in',
        'slide-down-out',
        'slide-up-in',
        'slide-up-out',

        'spin-in',
        'spin-out',

        'flip-right-in',
        'flip-right-out',
        'flip-left-in',
        'flip-left-out',

        'flip-up-in',
        'flip-up-out',
        'flip-down-in',
        'flip-down-out',

        'shake-down',
        'shake-up',
        'shake-left',
        'shake-right'
      ]
    }
  },

  computed: {
    style () {
      return {
        width: '320px',
        height: '220px',
        backgroundImage: `url('bgimg.jpg')`, // eslint-disable-line
        padding: '10px',
        border: '10px solid #fff',
        textAlign: 'center',
        boxShadow: '1px 1px 2px #e6e6e6'
      }
    },
    style2 () {
      return {
        width: '620px',
        height: '420px',
        backgroundImage: `url('bgimg.jpg')`, // eslint-disable-line
        padding: '10px',
        border: '10px solid #fff',
        textAlign: 'center',
        boxShadow: '1px 1px 2px #e6e6e6'
      }
    }
  },

  methods: {
    getImage (index) {
      if (index % 2) {
        return '1.jpg'
      }
      return '2.jpg'
    }
  }
}
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
