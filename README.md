# QFlashcard

![@quasar/quasar-ui-qflashcard](https://img.shields.io/npm/v/@quasar/quasar-ui-qflashcard?label=@quasar/quasar-ui-qflashcard)
![@quasar/quasar-app-extension-qflashcard](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qflashcard?label=@quasar/quasar-app-extension-qflashcard)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9e50f4ba-d3b2-4885-a631-8278786b648c/deploy-status)](https://app.netlify.com/projects/qflashcard/deploys)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quasarframework/quasar-ui-qflashcard)]()
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/quasarframework/quasar-ui-qflashcard)]()
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-app-extension-qflashcard)](https://www.npmjs.com/package/@quasar/quasar-app-extension-qflashcard)

[![Discord](https://img.shields.io/badge/discord-join%20server-738ADB?style=for-the-badge&logo=discord&logoColor=738ADB)](https://chat.quasar.dev)
[![X](https://img.shields.io/badge/follow-@jgalbraith64-1DA1F2?style=for-the-badge&logo=x&logoColor=1DA1F2)](https://twitter.com/jgalbraith64)

QFlashcard is a [Quasar](https://quasar.dev) component that provides CSS transition flashcards for Vue and Quasar applications.

## QFlashcard v3.0.0 Release Candidate

QFlashcard v3 prepares the project for Quasar CLI Vite 3. The app extension is Vite-only, requires `@quasar/app-vite` >=3.0.0-rc.2, and no longer supports webpack-based Quasar apps.

# Structure

This is a pnpm workspace mono-repo. You cannot use npm for building.

- [/ui](packages/ui) - standalone npm package (go here for more information)
- [/app-extension](packages/app-extension) - Quasar app extension
- [/docs](packages/docs) - Q-Press documentation site with docs, demos, and examples
- [live demo](https://qflashcard.netlify.app/) - **live Q-Press docs, demos, and examples**

## Local Development

```bash
pnpm install
pnpm build:ui
pnpm build:docs
pnpm --filter docs dev
```

## Support

If QFlashcard is useful in your workflow and you want to support ongoing maintenance:

- GitHub Sponsors: https://github.com/sponsors/hawkeye64
- PayPal: https://paypal.me/hawkeye64

## License

MIT (c) Jeff Galbraith <jeff@quasar.dev>
