QFlashcard
===

**QFlashcard** adds css mashups and transitions in your Quasar application.

# Features
- Show fullscreen overlays
- Show component-level overlays
- Turn off scrollbars
- Put a component/element on top of the overlay

# Installation Types

## Quasar CLI

**App Extension**

:::
#### Install

To add as an App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add @quasar/qflashcard
```

#### Uninstall

To remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):
```
quasar ext remove @quasar/qflashcard
```

#### Describe
When installed as an App Extension, you can use `quasar describe QFlashcard` and `quasar describe QFlashcardSection`
:::

**OR**:

:::
Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from '@quasar/quasar-ui-qflashcard'
import '@quasar/quasar-ui-qflashcard/dist/index.css'

Vue.use(Plugin)
```
:::

**OR**:

:::
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
:::

## Vue CLI project

:::
```js
import Vue from 'vue'
import Plugin from '@quasar/quasar-ui-qflashcard'
import '@quasar/quasar-ui-qflashcard/dist/index.css'

Vue.use(Plugin)
```
:::

**OR**:

:::
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
:::

## UMD variant

Exports `window.QFlashcard`.

Add the following tag(s) after the Quasar ones:

:::
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
:::

## Testing on Codepen
[UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/wvBKVNB)

# Docs
Can be found [here](https://quasarframework.github.io/quasar-ui-qflashcard).

# Examples
Can be found [here](https://quasarframework.github.io/quasar-ui-qflashcard/examples).

# Demo (source) Project
Can be found [here](https://github.com/quasarframework/quasar-ui-qflashcard/tree/master/demo).

~~~
