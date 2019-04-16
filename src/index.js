/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendWithFlashcard = function (conf) {
  // make sure qflashcard boot file is registered
  conf.boot.push('~@quasar/quasar-app-extension-qflashcard/boot/qflashcard.js')
  console.log(` App Extension (qflashcard) Info: 'Adding qflashcard boot reference to your quasar.conf.js'`)

  // make sure boot & component files transpile
  conf.build.transpileDependencies.push(/quasar-app-extension-qflashcard[\\/]src[\\/]boot/)

  conf.css.push('~@quasar/quasar-app-extension-qflashcard/component/flashcard.styl')
  console.log(` App Extension (qflashcard) Info: 'Adding flashcard.styl css reference to your quasar.conf.js'`)
}

module.exports = function (api) {
  api.compatibleWith('@quasar/app', '^1.0.0-beta.18')

  // register JSON api
  api.registerDescribeApi('QFlashcard', '../component/QFlashcard.json')
  api.registerDescribeApi('QFlashcardSection', '../component/QFlashcardSection.json')

  // extend quasar.conf
  api.extendQuasarConf(extendWithFlashcard)
}
