import Vue from 'vue'

import slot from 'quasar/src/utils/slot.js'
import './flashcard.styl'

export default Vue.extend({
  name: 'QFlashcardSection',

  props: {
    transition: String
  },

  render (h) {
    return h('div', {
      staticClass: 'q-flashcard--section',
      class: this.transition !== void 0 ? 'fc-' + this.transition : null
    }, slot(this, 'default'))
  }
})
