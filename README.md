QFlashcard (Vue Plugin, UMD and Quasar App Extension)
===

![@quasar/quasar-ui-qflashcard](https://img.shields.io/npm/v/@quasar/quasar-ui-qflashcard.svg?label=@quasar/quasar-ui-qflashcard)
![@quasar/quasar-app-extension-qflashcard](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qflashcard.svg?label=@quasar/quasar-app-extension-qflashcard)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quasarframework/quasar-ui-qflashcard.svg)]()
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/quasarframework/quasar-ui-qflashcard.svg)]()

# Structure

* [/ui](ui) - standalone npm package
* [/app-extension](app-extension) - Quasar app extension
* [/demo](demo.old) - docs, demo and examples project
* [live demo](https://quasarframework.github.io/quasar-ui-qflashcard/docs) - live docs, demo and examples

# Demo Workflow
If you fork or download this project, make sure you have the Quasar CLI globally installed:

```
$ npm i -g @quasar/cli
```

The workflow to build the demo, on a fresh project, is as follows:
```
$ cd ui
$ yarn
$ yarn build
$ cd ../demo
$ yarn
$ quasar dev
```

# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
