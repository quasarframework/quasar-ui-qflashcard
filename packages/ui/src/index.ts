import type { App } from 'vue'

import QFlashcard from './components/QFlashcard'
import QFlashcardSection from './components/QFlashcardSection'
import { version } from './version'

function install(app: App): void {
  app.component(String(QFlashcard.name), QFlashcard)
  app.component(String(QFlashcardSection.name), QFlashcardSection)
}

export { version, QFlashcard, QFlashcardSection, install }

export default {
  version,
  QFlashcard,
  QFlashcardSection,
  install,
}
