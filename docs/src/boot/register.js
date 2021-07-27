import { boot } from 'quasar/wrappers'
import JsonApiViewer from 'quasar-ui-json-api-viewer/src/components/JsonApiViewer'
import MarkdownPage from '../components/MarkdownPage.vue'
import MarkdownLink from '../components/MarkdownLink.vue'
import ExampleViewer, { setDefaults } from 'quasar-ui-example-viewer/src'
import pkg from '@quasar/quasar-ui-qflashcard/package.json'
const { version } = pkg


setDefaults({
  locationUrl: 'https://github.com/quasarframework/quasar-ui-qflashcard/tree/next/docs/src/examples',
  jsPaths: [`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@${ version }/dist/index.umd.js`],
  cssPaths: [
    `https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@${ version }/dist/index.min.css`
  ],
  // noEdit: true,
  importName: [
    {
      from: '@quasar/quasar-ui-qflashcard',
      to: 'QFlashcard'
    },
    {
      from: '@quasar/quasar-ui-qflashcard',
      to: 'QFlashcardSection'
    }
  ]
})

export default boot(({ app }) => {
  // app.use(VuePlugin)
  app.use(ExampleViewer)
  app.component('JsonApiViewer', JsonApiViewer)
  app.component('MarkdownPage', MarkdownPage)
  app.component('MarkdownLink', MarkdownLink)
})
