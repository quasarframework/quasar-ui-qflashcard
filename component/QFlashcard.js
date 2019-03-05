import Vue from 'vue'

import slot from 'quasar/src/utils/slot.js'
import './flashcard.styl'

export default Vue.extend({
  name: 'QFlashcard',

  render (h) {
    return h('div', {
      staticClass: 'q-flashcard'
    }, slot(this, 'default'))
  }
})
