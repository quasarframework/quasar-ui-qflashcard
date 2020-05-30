QFlashcard
===

[![npm](https://img.shields.io/npm/v/@quasar/quasar-ui-qflashcard.svg?label=@quasar/quasar-ui-qflashcard)](https://www.npmjs.com/package/@quasar/quasar-ui-qflashcard)
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-ui-qflashcard.svg)](https://www.npmjs.com/package/@quasar/quasar-ui-qflashcard)

QFlashcard is a [Quasar](https://quasar.dev) component. It allows you to add css mashups and transitions to your Quasar app.

# Examples and Documentation
Can be found [here](https://quasarframework.github.io/quasar-ui-qflashcard)


# Usage

## Quasar CLI project

Install the [App Extension](../app-extension).

**OR**:

Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from '@quasar/quasar-ui-qflashcard'
import '@quasar/quasar-ui-qflashcard/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="@quasar/quasar-ui-qflashcard/dist/index.css"></style>

<script>
import { QFlashcard } from '@quasar/quasar-ui-qflashcard'

export default {
  components: {
    QFlashcard
  }
}
</script>
```

## Vue CLI project

```js
import Vue from 'vue'
import Plugin from '@quasar/quasar-ui-qflashcard'
import '@quasar/quasar-ui-qflashcard/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="@quasar/quasar-ui-qflashcard/dist/index.css"></style>

<script>
import { QFlashcard } from '@quasar/quasar-ui-qflashcard'

export default {
  components: {
    QFlashcard
  }
}
</script>
```

## UMD variant

Exports `window.QFlashcard`.

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard/dist/index.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard/dist/index.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard/dist/index.rtl.min.css" rel="stylesheet" type="text/css">
```

[UMD example on Codepen](https://codepen.io/Hawkeye64/pen/qBEPVEG)

# Building the Projects

## Setup

In both the `ui` and `ui/dev` folders:

```bash
$ yarn
```

## Developing

In the `ui` folder

```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

## Building package

```bash
$ yarn build
```

# build just the JSON API
```bash
$ yarn build:api
```

# Donate

If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
