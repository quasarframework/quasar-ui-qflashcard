import QFlashcard from './components/QFlashcard'
import QFlashcardSection from './components/QFlashcardSection'

const version = __UI_VERSION__

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
