import { QBadge } from 'quasar'

export default {
  name: 'QFlashcard',

  render (h) {
    return h(QBadge, {
      staticClass: 'QFlashcard',
      props: {
        label: 'QFlashcard'
      }
    })
  }
}
