/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendWithFlashcard = function (api, conf) {
  // for brevity
  let boot = conf.boot

  // make sure qflashcard boot file is registered
  if (!boot.includes('~@quasar/quasar-app-extension-qflashcard/boot/qflashcard.js')) {
    boot.push('~@quasar/quasar-app-extension-qflashcard/boot/qflashcard.js')
    // make sure boot file transpiles
    conf.build.transpileDependencies.push(/quasar-app-extension-qflashcard[\\/]src[\\/]boot/)
    console.log(` App Extension (qflashcard) Info: 'Adding qflashcard boot reference to your quasar.conf.js'`)
  }

  // for brevity
  let css = conf.css

  // make sure qflashcard css goes through webpack to avoid ssr issues
  if (!css.includes('~@quasar/quasar-app-extension-qflashcard/component/flashcard.styl')) {
    css.push('~@quasar/quasar-app-extension-qflashcard/component/flashcard.styl')
    console.log(` App Extension (qflashcard) Info: 'Adding flashcard.styl css reference to your quasar.conf.js'`)
  }
}

module.exports = function (api, ctx) {
  // register JSON api
  api.registerDescribeApi('QFlashcard', '../component/QFlashcard.json')
  api.registerDescribeApi('QFlashcardSection', '../component/QFlashcardSection.json')

  // extend quasar.conf
  api.extendQuasarConf((conf) => {
    extendWithFlashcard(api, conf)
  })
}
