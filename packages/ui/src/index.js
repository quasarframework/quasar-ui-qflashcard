import { version } from "../package.json";
import QFlashcard from "./components/QFlashcard";
import QFlashcardSection from "./components/QFlashcardSection";

export { version, QFlashcard, QFlashcardSection };

export default {
  version,
  QFlashcard,
  QFlashcardSection,

  install(app) {
    app.component(QFlashcard.name, QFlashcard);
    app.component(QFlashcardSection.name, QFlashcardSection);
  },
};
