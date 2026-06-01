---
title: FAQ
desc: Frequently asked questions
keys: developing
---

:::details Q. Do I need to import QFlashcard CSS myself?

The App Extension adds the stylesheet for you.

If you install the UI package directly, import the stylesheet in your boot file or app entry:

```ts
import "@quasar/quasar-ui-qflashcard/dist/index.css";
```

Quasar CLI projects can also centralize the stylesheet in `quasar.config.ts`:

```ts
// Note: using ~ tells Quasar the file resides in node_modules
css: [
  "app.scss",
  "~@quasar/quasar-ui-qflashcard/dist/index.css",
],
```

:::

:::details Q. Can I inspect the component API from the Quasar CLI?

Yes. After the App Extension is installed, run:

```bash
quasar describe QFlashcard
quasar describe QFlashcardSection
```

The same generated API is shown on the [Using QFlashcard](/developing/using-qflashcard) page.

:::

:::details Q. Can QFlashcard be controlled without hover?

Yes. Use `no-hover` on `QFlashcard`, then control each `QFlashcardSection` with its `active` prop.

:::

:::details Q. Can I combine transitions?

Yes. `transition` accepts a string or an array. A string with spaces, such as `fade-in flip-left-in`, is split into multiple transition classes.
:::
