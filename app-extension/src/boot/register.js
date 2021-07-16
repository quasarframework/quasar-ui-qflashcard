import { boot } from 'quasar/wrappers'
import VuePlugin from '@quasar/quasar-ui-qflashcard'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
