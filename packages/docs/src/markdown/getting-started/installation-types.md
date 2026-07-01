---
title: Installation Types
desc: How to install QFlashcard
keys: Getting Started
related:
  - /getting-started/introduction
  - /other/upgrade-guide
  - /developing/using-qflashcard
---

QFlashcard can be installed as a Quasar App Extension, as a Vue plugin, as a direct component import, or through the UMD bundle.

## Recommended Path

::: steps

## Use the App Extension in Quasar CLI apps

Choose the App Extension when you want Quasar to add the boot file and stylesheet for you.

## Use the Vue plugin for manual registration

Install the UI package directly when your app owns plugin registration or when you are not using the Quasar CLI App Extension flow.

## Import components directly for targeted bundles

Import `QFlashcard` and `QFlashcardSection` directly when you only want to register the components used by a specific page or feature.
:::

## Quasar CLI

### App Extension

To add QFlashcard to your Quasar application, run the following in your Quasar app folder:

```bash
quasar ext add @quasar/qflashcard
```

The QFlashcard v3 App Extension targets Quasar CLI Vite 3 and requires `@quasar/app-vite` >=3.0.0-rc.5. It does not support webpack-based Quasar applications.

### Manual Boot File

If you do not install through the App Extension, install the UI package directly:

```tabs
<<| bash pnpm |>>
pnpm add @quasar/quasar-ui-qflashcard
<<| bash bun |>>
bun add @quasar/quasar-ui-qflashcard
<<| bash yarn |>>
yarn add @quasar/quasar-ui-qflashcard
<<| bash npm |>>
npm install @quasar/quasar-ui-qflashcard
```

Then create and register a boot file:

```js
import { defineBoot } from '#q-app'
import Plugin from '@quasar/quasar-ui-qflashcard'
import '@quasar/quasar-ui-qflashcard/dist/index.css'

export default defineBoot(({ app }) => {
  app.use(Plugin)
})
```

## Vue 3 Or Vite

```js
import { createApp } from 'vue'
import Plugin from '@quasar/quasar-ui-qflashcard'
import '@quasar/quasar-ui-qflashcard/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Plugin)
app.mount('#app')
```

## Component Import

```html
<style src="@quasar/quasar-ui-qflashcard/dist/index.css"></style>

<script setup lang="ts">
  import { QFlashcard, QFlashcardSection } from '@quasar/quasar-ui-qflashcard'
</script>
```
