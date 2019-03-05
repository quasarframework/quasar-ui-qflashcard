/**
 * Quasar App Extension uninstall script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/UninstallAPI.js
 */

const fs = require('fs')
const path = require('path')

module.exports = function (api) {
  let qflashcardBootFile = path.resolve(process.cwd(), './src/boot/qflashcard.js')
  if (fs.existsSync(qflashcardBootFile)) {
    fs.unlinkSync(qflashcardBootFile)
    console.log(`App Extension (qflashcard) Info: 'qflashcard boot file removed'`)
  }
}
