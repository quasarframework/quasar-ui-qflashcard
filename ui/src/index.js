import QFlashcard from './components/QFlashcard.js'
import QFlashcardSection from './components/QFlashcardSection.js'
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

  install (app) {
    app.component(QFlashcard.name, QFlashcard)
    app.component(QFlashcardSection.name, QFlashcardSection)
  }
}
