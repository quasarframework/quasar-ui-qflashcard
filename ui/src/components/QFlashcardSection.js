import { slot } from 'quasar/src/utils/slot.js'

export default {
  name: 'QFlashcardSection',

  props: {
    noHover: Boolean,
    active: Boolean,
    transition: [String, Array]
  },

  computed: {
    classes () {
      if (this.transition === void 0) {
        return ''
      }
      let transition = this.transition
      if (typeof transition === 'string') {
        if (transition.includes(' ')) {
          // now transition is an array and handled below...
          transition = this.transition.split(' ')
        } else {
          return this.__transitionName(transition)
        }
      }

      if (Array.isArray(transition)) {
        return transition
          .map(t => this.__transitionName(t))
          .join(' ')
      }

      return ''
    }
  },

  methods: {
    __transitionName (transition) {
      return transition.startsWith('fc-')
        ? transition
        : 'fc-' + transition
    }
  },

  render (h) {
    return h('div', {
      staticClass: 'q-flashcard__section',
      class: this.classes
    }, slot(this, 'default'))
  }
}
