import { defineBoot } from "@quasar/app-vite";
import VuePlugin from "@quasar/quasar-ui-qflashcard";

export default defineBoot(({ app }) => {
  app.use(VuePlugin);
});
