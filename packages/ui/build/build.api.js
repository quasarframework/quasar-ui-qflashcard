const path = require("path");
const Module = require("module");

global.rootDir = path.resolve(__dirname, "..");
global.distDir = path.resolve(__dirname, "../dist");

// recast's Babel parser shim is not compatible with Babel parser v8 RC defaults.
// Force quasar-json-api back to the stable v7 parser until recast/quasar-json-api
// can safely consume parser v8.
const babelParserPath = require.resolve("@babel/parser", {
  paths: [path.resolve(__dirname, "../../..")],
});
const resolveFilename = Module._resolveFilename;

Module._resolveFilename = function (request, parent, isMain, options) {
  if (request === "@babel/parser") {
    return babelParserPath;
  }

  return resolveFilename.call(this, request, parent, isMain, options);
};

require("quasar-json-api")({
  buildVetur: true,
  buildTypes: true,
});
