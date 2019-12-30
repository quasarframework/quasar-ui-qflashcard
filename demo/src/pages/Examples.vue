<template>
  <hero>
    <div class="q-markdown">
      <q-markdown>
      </q-markdown>
      <example-title title="Transitions" />
      <example-viewer title="Basic" file="Basic" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

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
    this.addToToc('Basic', 2)

    this.addToToc('Combos')

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
