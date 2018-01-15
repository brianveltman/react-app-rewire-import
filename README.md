# react-app-rewire-import
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