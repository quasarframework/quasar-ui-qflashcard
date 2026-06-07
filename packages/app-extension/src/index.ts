/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 */

import { defineIndexScript } from "@quasar/app-vite";

export default defineIndexScript((api) => {
  api.compatibleWith("quasar", "^2.0.0");
  api.compatibleWith("@quasar/app-vite", ">=3.0.0-beta.39");

  api.registerDescribeApi("QFlashcard", "~@quasar/quasar-ui-qflashcard/dist/api/QFlashcard.json");
  api.registerDescribeApi(
    "QFlashcardSection",
    "~@quasar/quasar-ui-qflashcard/dist/api/QFlashcardSection.json",
  );

  api.extendQuasarConf(() => ({
    boot: ["~@quasar/quasar-app-extension-qflashcard/dist/boot/vite-register.js"],
    css: ["~@quasar/quasar-ui-qflashcard/src/index.scss"],
  }));
});
