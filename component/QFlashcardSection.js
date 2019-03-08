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
      if (typeof transition === 'string') {
        if (transition.includes(' ')) {
          transition = this.transition.split(' ')
        } else {
          return this.transitionName(transition)
        }
      }

      if (Array.isArray(transition)) {
        return transition.map(t => {
          return this.transitionName(t)
        }).join(' ')
      }
      return null
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
