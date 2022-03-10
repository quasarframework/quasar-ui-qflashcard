---
title: Installation Types
desc: How to install QFlashcard
keys: All about QFlashcard
related:
  - /all-about-qflashcard/what-is-qflashcard
  - /contributing/bugs-and-feature-requests
  - /contributing/sponsor
---
## Quasar CLI

### App Extension

#### Install

To add as an App Extension to your Quasar application, run the following (in your Quasar app folder):
```bash
quasar ext add @quasar/qflashcard@next
```
Notice the `@next` at the end.

#### Uninstall

To remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):
```
$ quasar ext remove @quasar/qflashcard
```

#### Describe
When installed as an App Extension, you can use `quasar describe QFlashcard`.


### Or Create and register a boot file

```
$ yarn add @quasar/quasar-ui-qflashcard
# or
$ npm install @quasar/quasar-ui-qflashcard
```

Then

```js
import { boot } from 'quasar/wrappers'
import Plugin from '@quasar/quasar-ui-qflashcard'
import '@quasar/quasar-ui-qflashcard/dist/index.css'

export default boot(({ app }) => {
  app.use(Plugin)
})
```

or from sources

```js
import { boot } from 'quasar/wrappers'
import Plugin from '@quasar/quasar-ui-qflashcard/src/QFlashcard.js'

export default boot(({ app }) => {
  app.use(Plugin)
})
```

Additionally, because you are accessing the sources this way, you will need to make sure your project will transpile the code.

In `quasar.conf.js` update the following:
```js
// Note: using ~ tells Quasar the file resides in node_modules
css: [
  'app.sass',
  '~quasar-ui-qflashcard/src/QFlashcard.sass'
],

build: {
  transpile = true,
  transpileDependencies: [
    /quasar-ui-qflashcard[\\/]src/
  ]
}
```

### Or target as a component import

:::
```html
<style src="@quasar/quasar-ui-qflashcard/dist/QFlashcard.min.css"></style>

<script>
import { QFlashcard } from '@quasar/quasar-ui-qflashcard/dist/QFlashcard.esm.js'

export default {
  components: {
    QFlashcard
  }
}
</script>
```
:::

## Vue CLI or Vite
### Vue project from src

:::
```js
import Plugin from '@quasar/quasar-ui-qflashcard/src/QFlashcard.js'
import '@quasar/quasar-ui-qflashcard/src/QFlashcard.sass'
import App from './App.vue'

const app = createApp(App)
  .use(Plugin)
```
:::

### Vue project from dist

:::
```js
import Plugin from '@quasar/quasar-ui-qflashcard/dist/QFlashcard.esm.js'
import '@quasar/quasar-ui-qflashcard/dist/QFlashcard.min.css'
import App from './App.vue'

const app = createApp(App)
  .use(Plugin)
```
:::

### Or component import

:::
```html
<style src="@quasar/quasar-ui-qflashcard/dist/QFlashcard.min.css"></style>

<script>
import { QFlashcard } from '@quasar/quasar-ui-qflashcard/dist/QFlashcard.esm.js'

export default {
  components: {
    QFlashcard
  }
}
</script>
```
:::

## UMD variant

Exports `window.QFlashcard`.

### Quasar install

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@next/dist/QFlashcard.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@next/dist/QFlashcard.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@next/dist/QFlashcard.rtl.min.css" rel="stylesheet" type="text/css">
```

### Vue install

```html
<head>
  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@next/dist/QFlashcard.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body: -->
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@next/dist/QFlashcard.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@next/dist/QFlashcard.rtl.min.css" rel="stylesheet" type="text/css">
```

Your Vue source:
```js
const app = Vue.createApp({
  setup() {
    // ...your set up methods
  }
});

app.component("QFlashcard", QFlashcard.QFlashcard);
app.mount("#app");
```


## Testing on Codepen
[QFlashcard UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/ZEemBjm) // TBD

# Project source
Can be found [here](https://github.com/quasarframework/quasar-ui-qflashcard/tree/next).
