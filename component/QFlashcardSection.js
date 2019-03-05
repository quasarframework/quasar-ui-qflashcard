import Vue from 'vue'

import slot from './slot.js'
import './flashcard.styl'

export default Vue.extend({
  name: 'QFlashcardSection',

  props: {
    transition: String
  },

  mounted () {
    this.addTrasitionClass(this.transition)
  },

  watch: {
    transition (newVal, oldVal) {
      this.removeTrasitionClass(oldVal)
      this.addTrasitionClass(newVal)
    }
  },

  methods: {
    addTrasitionClass (transition) {
      if (!transition) {
        return
      }
      const name = `fc-${transition}`
      this.$el.classList.add(name)
    },
    removeTrasitionClass (transition) {
      if (!transition) {
        return
      }
      const name = `fc-${transition}`
      this.$el.classList.remove(name)
    }
  },

  render (h) {
    return h('div', {
      staticClass: 'q-flashcard--section'
    }, [
      slot(this, 'default')
    ])
  }
})
