import {h, defineComponent} from 'vue'

export default defineComponent({
  name: 'QFlashcard',
  props: {
    noHover: Boolean
  },
  setup(props, {slots}) {
    return () => h('div', {
      class: 'q-flashcard' + (props.noHover === true ? ' no-hover' : '')
    }, (slots.default && slots.default()) || [])
  }
})
