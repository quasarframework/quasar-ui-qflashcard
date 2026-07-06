---
title: Upgrade Guide
desc: Migrate to QFlashcard v3
keys: Help, upgrade, migration
related:
  - /getting-started/installation-types
  - /developing/using-qflashcard
  - /other/releases
---

Use this guide to migrate from QFlashcard v1.x or v2.x to QFlashcard v3.0.0-rc.1.

> QFlashcard v3 targets Vue 3, Quasar 2, and Quasar CLI Vite 3. If your app still uses Vue 2 or `@quasar/app-webpack`, migrate the app before installing QFlashcard v3.

> This guide focuses on the changes most likely to affect app code. Check the [Releases](/other/releases) page for the latest release candidate notes, and please open an issue or PR if something is missing.

## QFlashcard v3.0.0 Release Candidate

QFlashcard v3 prepares the package for Quasar CLI Vite 3 and the shared app-extension workspace standard.

Important changes:

- The app extension is Vite-only and requires `@quasar/app-vite` >=3.0.0.
- The webpack app-extension path is no longer supported.
- The package now uses ESM-first exports for Quasar/Vite consumers.
- UMD bundles remain available for CDN and CodePen examples.
- Source files are TypeScript and SCSS.
- Documentation examples now include GitHub source and CodePen playground links through Q-Press where the example can run in UMD.
- Repository tooling now uses pnpm, oxlint, oxfmt, Vitest, and Rolldown.

## Requirements

| Area                          | QFlashcard v3 RC                |
| ----------------------------- | ------------------------------- |
| Vue                           | Vue 3                           |
| Quasar                        | Quasar 2                        |
| Quasar CLI                    | `@quasar/app-vite` >=3.0.0 |
| App extension                 | Vite only                       |
| Node.js for this repo and CI  | `>=22.13`                       |
| Package manager for this repo | `pnpm >=11.5.0`                 |

## Installing The Release Candidate

Install QFlashcard v3 from the default npm dist tag.

```tabs
<<| bash App Extension |>>
quasar ext add @quasar/qflashcard
<<| bash pnpm |>>
pnpm add @quasar/quasar-ui-qflashcard
<<| bash bun |>>
bun add @quasar/quasar-ui-qflashcard
<<| bash yarn |>>
yarn add @quasar/quasar-ui-qflashcard
<<| bash npm |>>
npm install @quasar/quasar-ui-qflashcard
```

## App Extension Changes

The QFlashcard app extension now targets Quasar CLI Vite only.

- Install it only in apps using `@quasar/app-vite` >=3.0.0.
- The extension registers the Vite boot file and stylesheet.
- The extension remains the recommended install path for Quasar apps because it handles plugin registration for you.

If you maintain your own boot file, import `defineBoot` from `#q-app`:

```ts
import { defineBoot } from '#q-app'
import Plugin from '@quasar/quasar-ui-qflashcard'
import '@quasar/quasar-ui-qflashcard/dist/index.css'

export default defineBoot(({ app }) => {
  app.use(Plugin)
})
```

## Direct UI Package Usage

Compiled package imports are the recommended path:

```ts [twoslash]
import { QFlashcard, QFlashcardSection } from '@quasar/quasar-ui-qflashcard'

QFlashcardSection
// ^?
```

Import the component stylesheet alongside the components:

```ts
import '@quasar/quasar-ui-qflashcard/dist/index.css'
```

Direct `src/` imports are still available for advanced use cases. With Quasar CLI Vite 3, dependency transpilation is automatic, so no additional transpile-dependency configuration is needed.

```ts
import Plugin from '@quasar/quasar-ui-qflashcard/src/index'
import '@quasar/quasar-ui-qflashcard/src/index.scss'
```

## Transition Names

Transition names can be passed with or without the `fc-` prefix. For example, `fade-in` and `fc-fade-in` resolve to the same base transition.

The most common upgrade check is to verify your custom transition names still map to a QFlashcard transition class. If you created custom CSS transitions, keep the generated class shape:

```scss
.fc-my-transition-enter-active,
.fc-my-transition-leave-active {
  transition: opacity 0.2s ease;
}
```

## CodePen And UMD Examples

The documentation examples use the UMD bundle when opening in CodePen.

If you maintain custom CodePen or script-tag examples, load the QFlashcard CSS and UMD bundle after Quasar:

```html
<link
  href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@3.0.0-rc.1/dist/index.min.css"
  rel="stylesheet"
/>
<script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard@3.0.0-rc.1/dist/index.umd.min.js"></script>
```

Then register the plugin from the browser global:

```js
app.use(QFlashcard)
```

Examples that reference public images should use absolute URLs in CodePen. The docs CodePen generator rewrites root-relative public asset paths to the current docs origin before submitting the playground.

## Contributor Tooling Changes

The QFlashcard repository now uses:

- `pnpm@11.5.3`
- Node.js `>=22.13`
- `oxlint` instead of ESLint
- `oxfmt` instead of Prettier
- Vitest for runtime coverage
- Rolldown for UI package builds

Use the existing scripts for local verification:

```bash
pnpm format:check
pnpm lint
pnpm test
pnpm build
pnpm typecheck
```
