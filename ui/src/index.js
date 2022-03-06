import QFlashcard from './components/QFlashcard'
import QFlashcardSection from './components/QFlashcardSection'

import { version } from './version'

export {
  version,
  QFlashcard,
  QFlashcardSection
}

export default {
  version,
  QFlashcard,
  QFlashcardSection,

  install (app, options) {
    app.component(QFlashcard.name, QFlashcard)
    app.component(QFlashcardSection.name, QFlashcardSection)
  }
}
