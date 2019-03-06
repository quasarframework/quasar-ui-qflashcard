import Vue from 'vue'
import slot from 'quasar/src/utils/slot.js'

export default Vue.extend({
  name: 'QFlashcardSection',

  props: {
    transition: [String,Array]
  },
  computed: {
    classes () {
      if (this.transition === void 0) {
        return null
      }
      let transition = this.transition
      if (typeof this.transition === 'string') {
        if (this.transition.includes(' ')) {
          transition = this.transition.split(' ')
        }
        else {
          return this.transitionName(this.transition)
        }
      }

      if (Array.isArray(this.transition)) {
        return this.transition.map(t => {
          return this.transitionName(this.transition)
        }).join(' ')
      }
    }
  },

  methods: {
    transitionName (transition) {
      if (transition.startsWith('fc-')) {
        return transition
      }
      return 'fc-' + transition
    }
  },

  render (h) {
    return h('div', {
      staticClass: 'q-flashcard--section',
      class: this.classes
    }, slot(this, 'default'))
  }
})
