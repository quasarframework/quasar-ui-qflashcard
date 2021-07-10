<template>
  <hero>
    <div class="q-markdown">
      <q-markdown>
::: info
All images courtesy of [ANDREY YAKOVLEV & LILI ALEEVA](https://www.behance.net/gallery/53029631/AGEof-RUINS)
:::
      </q-markdown>

      <example-title title="Transitions" />
      <q-markdown>
By default, all the transitions are mouse hover/touch aware. This can be changed by using the `no-hover` and `active` properties together to give more control.

For the examples below, play with mouse hover/touch, then turn on `no-hover` (Toggle hover) and turn on `active` (Toggle Transitions) to see the difference.
      </q-markdown>
      <example-viewer title="Nudge" file="Nudge" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Fade" file="Fade" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Zoom" file="Zoom" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Spin" file="Spin" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Roll (Left/Right)" file="RollLeftRight" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Roll (Up/Down)" file="RollUpDown" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Slide (Left/Right)" file="SlideLeftRight" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Slide (Up/Down)" file="SlideUpDown" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Flip (Left/Right)" file="FlipLeftRight" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Flip (Up/Down)" file="FlipUpDown" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Shake" file="Shake" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

      <example-title title="Combos" />
      <q-markdown>
Combos are when you have two main transitions.
      </q-markdown>
      <example-viewer title="Demo #1" file="Demo1" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Demo #2" file="Demo2" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Demo #3" file="Demo3" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Demo #4" file="Demo4" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Demo #5" file="Demo5" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Demo #6" file="Demo6" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Demo #7" file="Demo7" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

      <example-title title="Mashups" />
      <q-markdown>
Mashups are when you have more than two transitions that work together.
      </q-markdown>
      <example-viewer title="Mashup #1" file="Mashup1" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Mashup #2" file="Mashup2" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

      <example-title title="Quasar Components" />
      <q-markdown>
The examples below show how you can use Quasar components with QFlashcard animations.
      </q-markdown>
      <example-viewer title="Component Demo #1" file="Component1" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Component Demo #2" file="Component2" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
    </div>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import ExampleTitle from '../components/ExampleTitle'
import { slugify } from '../utils/page-utils'
import { version } from 'ui'

export default {
  name: 'Examples',

  components: {
    Hero,
    ExampleTitle
  },

  data () {
    return {
      tempToc: [],
      locationUrl: 'https://github.com/quasarframework/quasar-ui-qflashcard/tree/dev/demo/src/examples/',
      jsPaths: [
        `https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@${version}/dist/index.umd.min.js`
      ],
      cssPaths: [
        `https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@${version}/dist/index.min.css`
      ]
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []
    this.addToToc('Transitions')
    this.addToToc('Nudge', 2)
    this.addToToc('Fade', 2)
    this.addToToc('Zoom', 2)
    this.addToToc('Spin', 2)
    this.addToToc('Roll (Left/Right)', 2)
    this.addToToc('Roll (Up/Down)', 2)
    this.addToToc('Slide (Left/Right)', 2)
    this.addToToc('Slide (Up/Down)', 2)
    this.addToToc('Flip (Left/Right)', 2)
    this.addToToc('Flip (Up/Down)', 2)
    this.addToToc('Shake', 2)

    this.addToToc('Combos')
    this.addToToc('Demo #1', 2)
    this.addToToc('Demo #2', 2)
    this.addToToc('Demo #3', 2)
    this.addToToc('Demo #4', 2)
    this.addToToc('Demo #5', 2)
    this.addToToc('Demo #6', 2)
    this.addToToc('Demo #7', 2)

    this.addToToc('Mashups')
    this.addToToc('Mashup #1', 2)
    this.addToToc('Mashup #2', 2)

    this.addToToc('Quasar Components')
    this.addToToc('Component Demo #1', 2)
    this.addToToc('Component Demo #2', 2)

    this.toc = this.tempToc
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    addToToc (name, level = 1) {
      let n = name
      if (level > 1) {
        n = 'example-' + n
      }
      const slug = slugify(n)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    }
  }
}
</script>

<style lang="stylus">
.example-page
  padding: 16px 46px;
  font-weight: 300;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
</style>
