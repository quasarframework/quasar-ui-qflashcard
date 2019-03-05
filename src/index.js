/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendWithFlashcard = function (api, conf) {
  // make sure there is a boot array
  if (!conf.boot) {
    conf.boot = []
  }

  // for brevity
  let boot = conf.boot

  // make sure qmediaplayer boot file is registered
  if (!boot.includes('qflashcard')) {
    boot.push('qflashcard')
    console.log(` App Extension (qflashcard) Info: 'Adding qflashcard boot reference to your quasar.conf.js'`)
  }

  // for brevity
  let css = conf.css

  // make sure qmediaplayer css goes through webpack to avoid ssr issues
  if (!css.includes('~@quasar/quasar-app-extension-qflashcard/component/flashcard.styl')) {
    css.push('~@quasar/quasar-app-extension-qflashcard/component/flashcard.styl')
    console.log(` App Extension (flashcard.styl) Info: 'Adding flashcard.styl css reference to your quasar.conf.js'`)
  }
}

module.exports = function (api, ctx) {
  api.extendQuasarConf((conf) => {
    extendWithFlashcard(api, conf)
  })
}
