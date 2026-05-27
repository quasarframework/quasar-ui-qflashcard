# QFlashcard Task List

Last Updated: 2026-05-20

Use this file as the per-repo checklist for migrating QFlashcard to the current shared app-extension standard.

## Repo Identity

- Repo: `quasar-ui-qflashcard`
- Branch: `v3-beta`
- Target version: `3.0.0-beta.0`
- Base branch: `origin/dev`
- Target `@quasar/app-vite` version verified as published: `3.0.0-beta.27`

## Completed

- [x] Branch created from the correct base
- [x] Repo moved to `packages/` layout
- [x] Root workspace migrated to pnpm
- [x] Root `.npmrc` aligned with the shared standard
- [x] Root scripts aligned with the shared standard
- [x] `oxlint` added at the root
- [x] `oxfmt` added at the root
- [x] Package-local ESLint configs/scripts removed in favor of `oxlint`
- [x] Package-local Prettier configs/scripts removed in favor of `oxfmt`
- [x] Legacy `jsconfig.json` files removed where no longer needed
- [x] Legacy repo-owned `yarn.lock` / `package-lock.json` / other package-manager lockfiles removed where pnpm is canonical
- [x] Legacy `.sass` files converted to `.scss`
- [x] Sass build scripts use the modern JS API, `compileAsync`
- [x] UI package migrated from Vue 2 render API to Vue 3 render API
- [x] UI JavaScript build migrated from Rollup to Rolldown
- [x] Direct Rollup/Babel bundler dependencies removed where no longer needed
- [x] App extension package migrated to `@quasar/app-vite`
- [x] Old webpack-only app-extension path removed
- [x] Docs package migrated to `@quasar/app-vite`
- [x] Docs package migrated to shared `md-plugins` / Q-Press flow
- [x] Quasar docs package uses `tsconfig.json` extending `./.quasar/tsconfig.json`
- [x] Quasar docs Vue SFCs use `<script setup lang="ts">`
- [x] Docs release/changelog naming normalized to `Releases`
- [x] Docs secondary navigation uses the shared `Other` menu grouping
- [x] Shared workspace tooling versions aligned
- [x] Packages audited against latest compatible releases and updated where appropriate
- [x] Peer dependency warnings resolved
- [x] Real tests added
- [x] GitHub Actions use Node 24-native action versions
- [x] Netlify config added with the workspace publish path, `packages/docs/dist/spa`
- [x] Generated static `docs/` output removed from source control in favor of rebuilding from `packages/docs`
- [x] READMEs updated to the new layout and package-manager guidance
- [x] Representative old demo examples ported into Q-Press docs
- [x] Transition class tests added beyond the initial smoke test
- [x] Horizontal shake keyframe typo fixed during runtime audit

## Validation

- [x] `pnpm install`
- [x] `pnpm format:check`
- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm test`
- [x] `pnpm peers check`
- [x] `pnpm build:ui`
- [x] `pnpm build:docs`
- [x] `pnpm build`

## Remaining Follow-Ups

- [ ] Port any remaining useful examples/content from the old demo into the new Q-Press docs.
- [ ] Expand coverage around rendered DOM behavior and interaction states.
- [ ] Continue runtime behavior audit against Vue 3 edge cases.
- [ ] Add a CI policy for detecting API JSON/type drift after build generation.
- [ ] Review Sass `@import` usage and replace with `@use` where practical.
- [ ] Verify the App Extension manually in a fresh external Quasar CLI Vite 3 app.
- [ ] Release prep once the branch is reviewed.

## Notes

- The UI build now generates ESM, UMD, CSS, API JSON, Vetur metadata, and TypeScript declarations from the `packages/ui` package. CJS output was removed for the v3 ESM-only package surface.
- `quasar-json-api` currently needs a direct `@babel/parser` v7 resolution workaround while its dependency tree can resolve Babel parser v8 RC.
- The docs app builds through Q-Press and `@md-plugins/q-press`; output is emitted to `packages/docs/dist/spa`.
