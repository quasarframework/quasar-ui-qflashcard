import QFlashcard from '@quasar/quasar-app-extension-qflashcard/component/QFlashcard'
import QFlashcardSection from '@quasar/quasar-app-extension-qflashcard/component/QFlashcardSection'

export default async ({ Vue }) => {
  Vue.component('q-flashcard', QFlashcard)
  Vue.component('q-flashcard-section', QFlashcardSection)
}
