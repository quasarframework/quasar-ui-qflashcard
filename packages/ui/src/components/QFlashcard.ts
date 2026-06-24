import { defineComponent, h, type SlotsType, type VNode } from 'vue'

export interface QFlashcardSlots {
  /**
   * Anything can go into this slot, but one or more QFlashcardSection components are expected.
   */
  default: () => VNode[]
}

export default defineComponent({
  name: 'QFlashcard',

  props: {
    /**
     * Turns off mouse hover/touch support. In this case, use the `active` property to control resting/active state.
     *
     * @category behavior
     */
    noHover: Boolean,
  },

  slots: Object as SlotsType<QFlashcardSlots>,

  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: ['q-flashcard', { 'no-hover': props.noHover === true }],
        },
        slots.default?.(),
      )
  },
})
