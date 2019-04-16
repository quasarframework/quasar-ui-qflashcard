<template>
  <q-page class="flex flex-center">
    <div class="row justify-around q-pa-lg" style="width: 100%;">
      <q-card class="my-card bg-black text-white" style="max-width: 600px; width: 100%">
        <q-card-section>
          <div class="text-h6">QFlashcard</div>
        </q-card-section>
        <q-card-section>
          <p><span class="text-bold">QFlashcard</span>&nbsp;is a Quasar App Extension. Basically, by taking a number of CSS Transitions and mashing them up, you can achieve very amazing results.</p>
          <p>This component works with mouse hover on the desktop. For mobile users, touch the QFlashcard (for hover). Touch something else to emulate mouse out.</p>
          <p>There are a lot of CSS Transitions available for use. And, you can even use your own. You can look at them below.</p>
        </q-card-section>
      </q-card>
    </div>

    <div class="row q-pa-xs" style="width:100%;">
      <q-separator></q-separator>
    </div>
    <div class="row q-pa-xs justify-center text-h4" style="width:100%;">
      QFlashcard Combo Demos
    </div>
    <div class="row q-pa-xs" style="width:100%;">
      <q-separator></q-separator>
    </div>

    <div class="row justify-around" style="width:100%;">
      <!-- Examples -->

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p>  {{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="flip-left-out">
              <img src="statics/1.jpg" width=300 height=200>
            </q-flashcard-section>
            <q-flashcard-section transition="flip-left-in" class="fit" style="top:0;background-color: rgba(219,127,8, 0.7);">
              <q-flashcard-section class="text-center my-header">
                Combo Demo #1
              </q-flashcard-section>
              <q-flashcard-section class="my-text">
                For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
              </q-flashcard-section>
              <q-flashcard-section class="fit flex justify-center items-end">
                <a href="#" class="my-button">Learn More</a>
              </q-flashcard-section>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Combo Demo #1</div>
        </div>
      </div>

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p> {{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="spin-out">
              <img src="statics/2.jpg" width=300 height=200>
            </q-flashcard-section>
            <q-flashcard-section transition="spin-in" class="fit" style="top:0;background-color:rgba(219,127,8, 0.7);">
              <q-flashcard-section class="text-center my-header">
                Combo Demo #2
              </q-flashcard-section>
              <q-flashcard-section class="my-text">
                For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
              </q-flashcard-section>
              <q-flashcard-section class="fit flex justify-center items-end">
                <a href="#" class="my-button">Learn More</a>
              </q-flashcard-section>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Combo Demo #2</div>
        </div>
      </div>

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p>{{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="fade-out">
              <img src="statics/1.jpg" width=300 height=200>
            </q-flashcard-section>
            <q-flashcard-section transition="fade-in" class="fit" style="top:0;background-color: rgba(219,127,8, 0.7);">
              <q-flashcard-section class="text-center my-header">
                Combo Demo #3
              </q-flashcard-section>
              <q-flashcard-section class="my-text">
                For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
              </q-flashcard-section>
              <q-flashcard-section class="fit flex justify-center items-end">
                <a href="#" class="my-button">Learn More</a>
              </q-flashcard-section>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Combo Demo #3</div>
        </div>
      </div>

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p>{{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="zoom-out">
              <img src="statics/2.jpg" width=300 height=200>
            </q-flashcard-section>
            <q-flashcard-section transition="zoom-in" class="fit" style="top:0;background-color: rgba(219,127,8, 0.7);">
              <q-flashcard-section class="text-center my-header">
                Combo Demo #4
              </q-flashcard-section>
              <q-flashcard-section class="my-text">
                For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
              </q-flashcard-section>
              <q-flashcard-section class="fit flex justify-center items-end">
                <a href="#" class="my-button">Learn More</a>
              </q-flashcard-section>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Combo Demo #4</div>
        </div>
      </div>

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p>{{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="slide-right-out">
              <img src="statics/1.jpg" width=300 height=200>
            </q-flashcard-section>
            <q-flashcard-section transition="slide-right-in" class="fit" style="top:0;background-color: rgba(219,127,8, 0.7);">
              <q-flashcard-section class="text-center my-header">
                Combo Demo #5
              </q-flashcard-section>
              <q-flashcard-section class="my-text">
                For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
              </q-flashcard-section>
              <q-flashcard-section class="fit flex justify-center items-end">
                <a href="#" class="my-button">Learn More</a>
              </q-flashcard-section>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Combo Demo #5</div>
        </div>
      </div>

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p>{{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="slide-up-out">
              <img src="statics/2.jpg" width=300 height=200>
            </q-flashcard-section>
            <q-flashcard-section transition="slide-up-in" class="fit" style="bottom:20px;top:0;background-color:rgba(219,127,8, 0.7);">
              <q-flashcard-section class="text-center my-header">
                Combo Demo #6
              </q-flashcard-section>
              <q-flashcard-section class="my-text">
                For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
              </q-flashcard-section>
              <q-flashcard-section class="fit flex justify-center items-end">
                <a href="#" class="my-button">Learn More</a>
              </q-flashcard-section>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Combo Demo #6</div>
        </div>
      </div>

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p>{{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="flip-up-out">
              <img src="statics/1.jpg" width=300 height=200>
            </q-flashcard-section>
            <q-flashcard-section transition="flip-up-in" class="fit" style="top:0;background-color: rgba(219,127,8, 0.7);">
              <q-flashcard-section class="text-center my-header">
                Combo Demo #7
              </q-flashcard-section>
              <q-flashcard-section class="my-text">
                For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
              </q-flashcard-section>
              <q-flashcard-section class="fit flex justify-center items-end">
                <a href="#" class="my-button">Learn More</a>
              </q-flashcard-section>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Combo Demo #7</div>
        </div>
      </div>

    <div class="row q-pa-xs" style="width:100%;">
      <q-separator></q-separator>
    </div>
    <div class="row q-pa-xs justify-center text-h4" style="width:100%;">
      QFlashcard Mashup Demos
    </div>
    <div class="row q-pa-xs" style="width:100%;">
      <q-separator></q-separator>
    </div>

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p>{{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="nudge-in">
              <img src="statics/2.jpg" width=300 height=200>
            </q-flashcard-section>
            <q-flashcard-section transition="fade-in" class="fit">
              <div class="fit" style="background-color: rgba(219,127,8, 0.7);"></div>
              <q-flashcard-section transition="drop-down" class="text-center my-header">
                Mashup Demo #1
              </q-flashcard-section>
              <q-flashcard-section transition="slide-up-in" class="my-text">
                For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
              </q-flashcard-section>
              <q-flashcard-section transition="fade-in" class="fit flex justify-center items-end">
                <a href="#" class="my-button">Learn More</a>
              </q-flashcard-section>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Mashup Demo #1</div>
        </div>
      </div>

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p>{{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="['nudge-out', 'fade-out']">
              <img src="statics/1.jpg" width=300 height=200>
            </q-flashcard-section>
            <q-flashcard-section transition="fade-in" class="fit" style="top:0;background-color: rgba(219,127,8, 0.7);"></q-flashcard-section>
            <q-flashcard-section transition="shake-down" class="fit">
              <div class="text-center my-header">
                Mashup Demo #2
              </div>
            </q-flashcard-section>
            <q-flashcard-section transition="spin-in" class="fit">
              <div class="my-text">
                For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
              </div>
            </q-flashcard-section>
            <q-flashcard-section transition="slide-up-in" class="fit flex justify-center items-end" style="transition: all 1s ease-in-out !important;">
              <a href="#" class="my-button">Learn More</a>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Mashup Demo #2</div>
        </div>
      </div>

    <div class="row q-pa-xs" style="width:100%;">
      <q-separator></q-separator>
    </div>
    <div class="row q-pa-xs justify-center text-h4" style="width:100%;">
      QFlashcard Quasar Component Demos
    </div>
    <div class="row q-pa-xs" style="width:100%;">
      <q-separator></q-separator>
    </div>

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p>{{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="slide-left-out">
              <div class="row full-width">
                <div class="col-6">
                  <img
                    src="statics/wspa-logo.svg"
                    style="width:100%;max-width:100px;"
                  >
                </div>
                <div class="text-center text-black col-6">
                  By signing up, you are joining a community of people who are moving the world to protect animals. Join our mailing list to receive email updates about our latest news.
                </div>
              </div>
              <div class="row">
                <a href="www.worldanimalprotection.ca" target="_blank" class="my-button">Learn More</a>
              </div>
            </q-flashcard-section>
            <q-flashcard-section transition="slide-left-in" class="fit">
              <div class="q-pa-md q-gutter-sm">
                <q-input v-model="email" filled type="email" hint="Email"></q-input>
                <q-flashcard-section transition="roll-left-in" style="top:60%">
                  <q-btn color="white" text-color="black" label="Submit" class="q-mr-sm"></q-btn>
                  <a href="https://www.worldanimalprotection.ca" target="_blank" class="my-button">Learn More</a>
                </q-flashcard-section>
              </div>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Component Demo #1</div>
        </div>
      </div>

      <div class="q-pa-sm">
        <div class="description text-center rounded-borders">
          <p>{{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section transition="nudge-out">
              <img src="statics/1.jpg" width=300 height=200>
            </q-flashcard-section>
            <q-flashcard-section transition="slide-up-in" class="fit">
              <div style="margin-top: 50%; opacity:0.65">
                  <q-toolbar class="bg-white text-black q-my-md shadow-2">

                    <q-space></q-space>

                    <q-btn-toggle
                      v-model="model"
                      flat stretch
                      toggle-color="yellow"
                      :options="[
                        {label: 'Task#1', value: 'one'},
                        {label: 'Task#2', value: 'two'},
                        {label: 'Task#3', value: 'three'}
                      ]"
                    ></q-btn-toggle>
                  </q-toolbar>
                </div>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">Component Demo #2</div>
        </div>
      </div>

    </div>
    <div class="row q-pa-xs" style="width:100%;">
      <q-separator></q-separator>
    </div>
    <div class="row q-pa-xs justify-center text-h4" style="width:100%;">
      Transitions
    </div>
    <div class="row q-pa-xs" style="width:100%;">
      <q-separator></q-separator>
    </div>

    <!-- Transitions -->
    <div class="row justify-around" style="width:100%;">
      <div class="q-pa-sm" v-for="(transition, index) in transitions" :key="index">
        <div class="description text-center rounded-borders">
          <p>{{ touchOrClick }} the example below:</p>
          <q-flashcard :style="style">
            <q-flashcard-section :transition="transition">
              <img :src="getImage(index)" width=300 height=200>
            </q-flashcard-section>
          </q-flashcard>
          <div class="text-h5 q-pt-sm">transition="{{transition}}"</div>
        </div>
      </div>
    </div>

    <div class="row q-pa-xs" style="width:100%;">
      <q-separator></q-separator>
    </div>

    <div class="row q-pt-md flex justify-center items-end">
      <a class="my-button text-no-wrap" href="https://www.behance.net/gallery/53029631/AGEof-RUINS" target="_blank">IMAGES BY ANDREY YAKOVLEV & LILI ALEEVA</a>
    </div>

  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      email: '',
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
    touchOrClick () {
      return this.$q.platform.is.desktop ? 'Hover your mouse over' : 'Touch'
    },
    style () {
      return {
        width: '320px',
        height: '220px',
        backgroundImage: 'url(../statics/bgimg.jpg)',
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
        backgroundImage: 'url(../statics/bgimg.jpg)',
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
        return 'statics/1.jpg'
      }
      return 'statics/2.jpg'
    }
  }
}
</script>

<style>
.description {
  padding: 10px;
  background-color: black;
  color: white;
  box-shadow: 1px 1px 2px #e6e6e6;
}

.my-header {
  width:100%;
  top:0;
  height:45px;
  color:white;
  background-color:rgba(0,0,0,0.8);
  text-transform:uppercase;
  text-align:center;
  font-size:17px;
  margin:20px 0 0 0;
  padding:10px;
}

.my-text {
  width:100%;
  top:0;
  height:80px;
  color:white;
  text-align:center;
  font-size:12px;
  margin:60px 0 0 0;
  padding:20px;
  line-height:normal;
  font-family:Georgia, serif;
  font-style:italic;
}

.my-button-container {
  width:100%;
}

.my-button {
  text-decoration: none;
  text-transform: uppercase;
  margin:0 0 20px 0;
  text-align: center;
  padding: 7px 14px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0 0 1px #000;
  transition-delay: 0.2s;
}

.my-button:hover {
  box-shadow: 0 0 5px #000;
}
</style>
