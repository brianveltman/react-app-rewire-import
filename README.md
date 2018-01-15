# react-app-rewire-import
[![npm version](https://img.shields.io/npm/v/react-app-rewire-import.svg)](https://www.npmjs.com/package/react-app-rewire-import)
[![npm monthly downloads](https://img.shields.io/npm/dm/react-app-rewire-import.svg)](https://www.npmjs.com/package/react-app-rewire-import)
[![GitHub issues](https://img.shields.io/github/issues/brianveltman/react-app-rewire-import.svg)](https://github.com/brianveltman/react-app-rewire-import/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/brianveltman/react-app-rewire-import.svg)](https://github.com/brianveltman/react-app-rewire-import)
[![npm](https://img.shields.io/npm/l/react-app-rewire-import.svg)](https://www.npmjs.com/package/react-app-rewire-import)

Add the [import babel plugin](https://github.com/ant-design/babel-plugin-import) to [create-react-app](https://github.com/facebookincubator/create-react-app) using [react-app-rewired](https://github.com/timarney/react-app-rewired)

## Installation

```sh
yarn add --dev react-app-rewire-import
```

or

```sh
npm install --save-dev  react-app-rewire-import
```

## Usage

```js
// config-overrides.js
const rewireImport = require('react-app-rewire-import');

module.exports = function override (config, env) {
  config = rewireImport(config, env);
  // other rewires...
  return config;
}
```

To pass options to the Babel plugin use the third argument, it passes straight through to the plugin:

```js
config = rewireImport(config, env, {
  libraryName: 'antd',
  style: 'css'
})
```
See the available options in the [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) documentation.