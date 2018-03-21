# tslint-config-videoamp
[![npm version](https://badge.fury.io/js/tslint-config-videoamp.svg)](https://badge.fury.io/js/tslint-config-videoamp)

This package uses TSLint to enforce VideoAmp's code style and provides a shared base configuration for our Typescript projects. We use this package in conjunction with [Prettier](https://prettier.io) for linting our projects.

We have two configurations in this package, listed below:
- `tslint-config-videoamp`
    *  Provides base rules for VideoAmp Typescript projects.
- `tslint-config-videoamp/react`
    * Provides base and React rules for VideoAmp Typescript/React projects.

## Install
### `yarn`
```sh
yarn add --dev tslint-config-videoamp tslint
```
### `npm`
```sh
npm install --save-dev tslint-config-videoamp tslint
```

## Usage
1. Add `"extends": "tslint-config-videoamp"` to your `tslint.json`.
2. Add a `.prettierrc` with the following configuration:
```json
{
    "printWidth": 120,
    "tabWidth": 4,
    "parser": "typescript",
    "trailingComma": "es5"
}
```

## Resources
- [TSLint docs](https://palantir.github.io/tslint/)
- [Prettier docs]()
- [`tslint-consistent-codestyle`](https://github.com/ajafff/tslint-consistent-codestyle) - TSLint rules to enforce consistent code style in TypeScript
- [ESLint rules for TSLint](https://github.com/buzinas/tslint-eslint-rules) - Improve your TSLint with the missing ESLint Rules
- [`tslint-microsoft-contrib`](https://github.com/Microsoft/tslint-microsoft-contrib) - A set of TSLint rules used on some Microsoft projects
- [`tslint-config-prettier`](https://github.com/alexjoverm/tslint-config-prettier)
- [`tslint-react`](https://github.com/palantir/tslint-react) - Lint rules related to React & JSX.
