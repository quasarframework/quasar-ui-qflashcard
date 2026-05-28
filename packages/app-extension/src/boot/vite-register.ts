import { defineBoot } from "#q-app";
import VuePlugin from "@quasar/quasar-ui-qflashcard";

export default defineBoot(({ app }) => {
  app.use(VuePlugin);
});
