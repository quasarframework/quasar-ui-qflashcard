export default {
  name: 'QFlashcard',

  props: {
    noHover: Boolean
  },

  render (h) {
    const slot = this.$slots.default

    return h('div', {
      staticClass: 'q-flashcard' + (this.noHover === true ? ' no-hover' : '')
    }, slot)
  }
}
