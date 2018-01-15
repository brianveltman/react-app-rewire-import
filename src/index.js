const { injectBabelPlugin } = require('react-app-rewired');

function rewireImport(config, env, importBabelOptions = {}) {
  config = injectBabelPlugin(['import', importBabelOptions], config);
  return config;
}

module.exports = rewireImport;