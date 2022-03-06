process.env.NODE_ENV = 'production'

const parallel = require('os').cpus().length > 1
const runJob = parallel ? require('child_process').fork : require
const { join } = require('path')
const { createFolder } = require('./utils')
const { green, blue } = require('kolorist')

console.log()

require('./script.app-ext.js').syncAppExt()
require('./script.clean.js')

console.log(` 📦 Building ${ green('v' + require('../package.json').version) }...${ parallel ? blue(' [multi-threaded]') : '' }\n`)

createFolder('dist')

require('./script.version.js')

runJob(join(__dirname, './build.api.js'))
runJob(join(__dirname, './script.javascript.js'))
runJob(join(__dirname, './script.css.js'))
