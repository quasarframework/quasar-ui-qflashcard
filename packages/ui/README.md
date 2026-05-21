# QFlashcard

QFlashcard is a Quasar component that provides CSS transition flashcards for Vue and Quasar applications.

[![npm](https://img.shields.io/npm/v/@quasar/quasar-ui-qflashcard/beta?label=@quasar/quasar-ui-qflashcard)](https://www.npmjs.com/package/@quasar/quasar-ui-qflashcard)
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-ui-qflashcard)](https://www.npmjs.com/package/@quasar/quasar-ui-qflashcard)

[![Discord](https://img.shields.io/badge/discord-join%20server-738ADB?style=for-the-badge&logo=discord&logoColor=738ADB)](https://chat.quasar.dev)
[![X](https://img.shields.io/badge/follow-@jgalbraith64-1DA1F2?style=for-the-badge&logo=x&logoColor=1DA1F2)](https://twitter.com/jgalbraith64)

## Usage

### Quasar CLI Project

Install the [App Extension](../app-extension).

Or install the UI package directly:

```bash
pnpm add @quasar/quasar-ui-qflashcard
# bun add @quasar/quasar-ui-qflashcard
# yarn add @quasar/quasar-ui-qflashcard
# npm install @quasar/quasar-ui-qflashcard
```

Then create and register a boot file:

```js
import { defineBoot } from "@quasar/app-vite";
import VuePlugin from "@quasar/quasar-ui-qflashcard";
import "@quasar/quasar-ui-qflashcard/dist/index.css";

export default defineBoot(({ app }) => {
  app.use(VuePlugin);
});
```

### Vue 3 Project

```js
import { createApp } from "vue";
import VuePlugin from "@quasar/quasar-ui-qflashcard";
import "@quasar/quasar-ui-qflashcard/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(VuePlugin);
app.mount("#app");
```

### Component Import

```html
<style src="@quasar/quasar-ui-qflashcard/dist/index.css"></style>

<script setup lang="ts">
  import { QFlashcard, QFlashcardSection } from "@quasar/quasar-ui-qflashcard";
</script>
```

### UMD Variant

The UMD bundle exports `window.QFlashcard`.

```html
<link
  href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard/dist/index.min.css"
  rel="stylesheet"
  type="text/css"
/>
<script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard/dist/index.umd.min.js"></script>
```

## Setup

This project is a pnpm workspace mono-repo.

```bash
pnpm install
pnpm build:ui
pnpm build:docs
```

## Donate

If you appreciate the work that went into this project, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

## License

MIT (c) Jeff Galbraith <jeff@quasar.dev>
