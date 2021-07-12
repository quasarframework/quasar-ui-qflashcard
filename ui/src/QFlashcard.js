import QFlashcard from './components/QFlashcard'
import QFlashcardSection from './components/QFlashcardSection'
import pkg from '../package.json'
const { version } = pkg

export {
  version,
  QFlashcard,
  QFlashcardSection
}

export default {
  version,
  QFlashcard,
  QFlashcardSection,

  install (Vue) {
    Vue.component(QFlashcard.name, QFlashcard)
    Vue.component(QFlashcardSection.name, QFlashcardSection)
  }
}
