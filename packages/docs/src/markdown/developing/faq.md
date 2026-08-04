---
title: FAQ
desc: Frequently asked questions
keys: developing
---

:::details Q. Do I need to import QFlashcard CSS myself?

The App Extension adds the stylesheet for you.

If you install the UI package directly, import the stylesheet in your boot file or app entry:

```ts
import '@quasar/quasar-ui-qflashcard/dist/index.css'
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

:::details Q. How do I type an App Extension-registered QFlashcard template ref?

Keep runtime component registration in the App Extension and import only the component instance type in `<script setup>`:

```ts
import { useTemplateRef } from 'vue'
import type { QFlashcard } from '@quasar/quasar-ui-qflashcard'

const flashcardRef = useTemplateRef<QFlashcard>('flashcard')
```

A normal value import of `QFlashcard` creates a local component binding in `<script setup>` and takes precedence over the globally registered component. Use a normal import only when you intend to use the UI component directly, and follow the manual boot file installation path instead of registering it through both paths.

Because application source imports the type, add the UI package as a direct application dependency:

```bash
pnpm add @quasar/quasar-ui-qflashcard
```

Applications that only use the globally registered component in templates do not need this extra direct dependency.

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
