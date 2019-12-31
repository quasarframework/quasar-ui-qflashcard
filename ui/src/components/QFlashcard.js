import { slot } from 'quasar/src/utils/slot.js'

export default {
  name: 'QFlashcard',

  props: {
    noHover: Boolean
  },

  render (h) {
    return h('div', {
      staticClass: 'q-flashcard' + (this.noHover === true ? ' no-hover' : '')
    }, slot(this, 'default'))
  }
}
