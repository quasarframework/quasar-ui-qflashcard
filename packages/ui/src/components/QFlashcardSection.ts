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
     * @category state
     */
    active: Boolean,
    /**
     * One or more built-in or custom transition names to be used.
     *
     * Built-in names can be passed with or without the `fc-` prefix. Custom names can be used
     * when matching `.fc-name` and `.fc-name--active` classes are supplied.
     *
     * @category behavior
     * @tsType FlashcardTransition
     * @values fade-in, fade-out, zoom-in, zoom-out, spin-in, spin-out, nudge-in, nudge-out, slide-left-in, slide-left-out, slide-right-in, slide-right-out, slide-up-in, slide-up-out, slide-down-in, slide-down-out, flip-left-in, flip-left-out, flip-right-in, flip-right-out, flip-up-in, flip-up-out, flip-down-in, flip-down-out, roll-left-in, roll-left-out, roll-right-in, roll-right-out, roll-top-in, roll-top-out, roll-bottom-in, roll-bottom-out, shake-left, shake-right, shake-up, shake-down
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
