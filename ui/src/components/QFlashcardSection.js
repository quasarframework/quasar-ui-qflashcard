export default {
  name: 'QFlashcardSection',

  props: {
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
      const postfix = this.active === true ? '--active' : ''
      return (transition.startsWith('fc-')
        ? transition
        : 'fc-' + transition) + postfix
    }
  },

  render (h) {
    const slot = this.$slots.default

    return h('div', {
      staticClass: 'q-flashcard__section',
      class: this.classes
    }, slot)
  }
}
