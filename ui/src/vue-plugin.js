import QFlashcard from './components/QFlashcard'
import QFlashcardSection from './components/QFlashcardSection'

import { version } from './version'

function install (app) {
  app.component(QFlashcard.name, QFlashcard)
  app.component(QFlashcardSection.name, QFlashcardSection)
}

export {
  version,
  QFlashcard,
  QFlashcardSection,

  install
}
