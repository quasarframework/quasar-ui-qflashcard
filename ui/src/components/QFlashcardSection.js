import { h, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'QFlashcardSection',
  props: {
    active: Boolean,
    transition: [ String, Array ]
  },
  setup(props, { slots }) {

    const __transitionName = (transition, active) => {
      const postfix = active === true ? '--active' : ''
      return (transition.startsWith('fc-')
        ? transition + postfix
        : 'fc-' + transition) + postfix
    }

    const classes = computed(() => {
      if (props.transition === void 0) {
        // no transition specified
        return ''
      }

      let transition = props.transition
      const active = props.active

      // is transiton a string?
      if (typeof transition === 'string') {

        // are we dealing with multiple transitions
        if (transition.includes(' ')) {
          // transition is an array and handled below...
          transition = props.transition.split(' ')
        }
 else {
          // return transition name
          return __transitionName(transition, active)
        }
      }

      if (Array.isArray(transition)) {
        // for each transtion, get name and then
        // combine them all back to a string
        return transition
          .map(t => __transitionName(t, active))
          .join(' ')
      }
      return ''
    })

    return () => h('div', {
      class: [ 'q-flashcard__section', classes.value ]
    }, (slots.default && slots.default()) || [])
  }
})
