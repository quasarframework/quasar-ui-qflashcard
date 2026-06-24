import { computed, defineComponent, h, type PropType, type SlotsType, type VNode } from 'vue'

import type { FlashcardTransition } from '../../types/types'

function getTransitionName(transition: string, active: boolean): string {
  const postfix = active === true ? '--active' : ''
  return (transition.startsWith('fc-') ? transition : 'fc-' + transition) + postfix
}

export interface QFlashcardSectionSlots {
  /**
   * Anything can go into this slot.
   */
  default: () => VNode[]
}

export default defineComponent({
  name: 'QFlashcardSection',

  props: {
    /**
     * Use along with `no-hover` property to control the non-active/active state.
     *
     * @category model
     */
    active: Boolean,
    /**
     * One or more transitions to be used.
     *
     * @category behavior
     * @tsType FlashcardTransition
     * @example transition="fade-in"
     * @example transition="fade-in flip-left-in"
     * @example :transition="['fade-in', 'flip-left-in']"
     */
    transition: [String, Array] as PropType<FlashcardTransition>,
  },

  slots: Object as SlotsType<QFlashcardSectionSlots>,

  setup(props, { slots }) {
    const classes = computed(() => {
      if (props.transition === void 0) {
        return ''
      }

      const transition = props.transition

      if (typeof transition === 'string') {
        return transition.includes(' ')
          ? transition
              .split(' ')
              .map((name) => getTransitionName(name, props.active))
              .join(' ')
          : getTransitionName(transition, props.active)
      }

      if (Array.isArray(transition)) {
        return transition.map((name) => getTransitionName(name, props.active)).join(' ')
      }

      return ''
    })

    return () =>
      h(
        'div',
        {
          class: ['q-flashcard__section', classes.value],
        },
        slots.default?.(),
      )
  },
})
