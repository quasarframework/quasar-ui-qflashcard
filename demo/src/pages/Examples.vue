<template>
  <hero>
    <div class="q-markdown">
      <example-title title="Transitions" />
      <q-markdown>
By default, all the transitions are mouse hover aware. This can be changed by using the `no-hover` and `active` proerties together to give more control.

For the examples in the Transitions section, either hover with your mouse or if on a touch screen tap.
      </q-markdown>
      <example-viewer title="Nudge" file="Nudge" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Fade" file="Fade" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Zoom" file="Zoom" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Roll (Left/Right)" file="RollLeftRight" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Roll (Up/Down)" file="RollUpDown" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Slide (Left/Right)" file="SlideLeftRight" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Slide (Up/Down)" file="SlideUpDown" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Flip (Left/Right)" file="FlipLeftRight" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Flip (Up/Down)" file="FlipUpDown" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Shake" file="Shake" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

      <example-title title="Manual Transitions" />
      <q-markdown>
By default, all the transitions are mouse hover aware. This can be changed by using the `no-hover` and `active` properties together to give more control.

For the examples in the Transitions section, either hover with your mouse or if on a touch screen tap.
      </q-markdown>
      <example-viewer title="Nudge (Manual)" file="NudgeManual" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Fade (Manual)" file="FadeManual" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Zoom (Manual)" file="ZoomManual" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Roll (Left/Right) (Manual)" file="RollLeftRightManual" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Roll (Up/Down) (Manual)" file="RollUpDownManual" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Slide (Left/Right) (Manual)" file="SlideLeftRightManual" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Slide (Up/Down) (Manual)" file="SlideUpDownManual" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Flip (Left/Right) (Manual)" file="FlipLeftRightManual" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Flip (Up/Down) (Manual)" file="FlipUpDownManual" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Shake (Manual)" file="ShakeManual" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

      <example-title title="Combos" />

      <example-title title="Mashups" />

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
    this.addToToc('Roll (Left/Right)', 2)
    this.addToToc('Roll (Up/Down)', 2)
    this.addToToc('Slide (Left/Right)', 2)
    this.addToToc('Slide (Up/Down)', 2)
    this.addToToc('Flip (Left/Right)', 2)
    this.addToToc('Flip (Up/Down)', 2)
    this.addToToc('Shake', 2)

    this.addToToc('Manual Transitions')
    this.addToToc('Nudge (Manual)', 2)
    this.addToToc('Fade (Manual)', 2)
    this.addToToc('Zoom (Manual)', 2)
    this.addToToc('Roll (Left/Right) (Manual)', 2)
    this.addToToc('Roll (Up/Down) (Manual)', 2)
    this.addToToc('Slide (Left/Right) (Manual)', 2)
    this.addToToc('Slide (Up/Down) (Manual)', 2)
    this.addToToc('Flip (Left/Right) (Manual)', 2)
    this.addToToc('Flip (Up/Down) (Manual)', 2)
    this.addToToc('Shake (Manual)', 2)

    this.addToToc('Mashups')

    // this.addToToc('On Component', 2)
    // this.addToToc('Theme Selection', 2)
    // this.addToToc('Theme Quasar Components', 2)

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
