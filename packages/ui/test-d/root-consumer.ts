import { QFlashcard, QFlashcardSection, version } from '@quasar/quasar-ui-qflashcard'
import type { FlashcardTransition } from '@quasar/quasar-ui-qflashcard'

const transition: FlashcardTransition = ['fade-in', 'flip-left-in']

QFlashcard.name?.toString()
QFlashcardSection.name?.toString()
version.toString()
transition.at(0)?.toString()
