import QFlashcard from '@quasar/quasar-app-extension-qflashcard/src/component/QFlashcard'
import QFlashcardSection from '@quasar/quasar-app-extension-qflashcard/src/component/QFlashcardSection'

export default ({ Vue }) => {
  Vue.component('q-flashcard', QFlashcard)
  Vue.component('q-flashcard-section', QFlashcardSection)
}
