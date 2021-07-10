import {h, defineComponent, computed} from 'vue'

export default defineComponent({
  name: 'QFlashcardSection',
  props: {
    active: Boolean,
    transition: [String, Array]
  },
  setup(props, {slots}) {

    const __transitionName = (transition) => {
      const postfix = props.active === true ? '--active' : ''
      return (transition.startsWith('fc-')
        ? transition
        : 'fc-' + transition) + postfix
    }

    const classes = computed(() => {
      if (props.transition === void 0) {
        return ''
      }
      let transition = props.transition
      if (typeof transition === 'string') {
        if (transition.includes(' ')) {
          // now transition is an array and handled below...
          transition = props.transition.split(' ')
        } else {
          return __transitionName(transition)
        }
      }

      if (Array.isArray(transition)) {
        return transition
          .map(t => __transitionName(t))
          .join(' ')
      }
      return ''
    })

    return () => h('div', {
      class: ['q-flashcard__section', classes.value]
    }, (slots.default && slots.default()) || [])
  }
})
