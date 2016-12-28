# Contributing 

## Table of contents

- [Technologies](#technologies)
    - [Source code](#source-code)
    - [Tests](#tests)
      - [Unit tests](#unit-tests)
      - [E2E tests](#e2e-tests)
- [Dependencies](#dependencies)
    - [Development dependencies](#development-dependencies)
    - [Production dependencies](#production-dependencies)
- [Files](#files)
    - [Directory structure](#directory-structure)
    - [Project files details](#project-files-details)
- [Available commands](#available-commands)
    - [Development](#development)
    - [Testing](#testing)
- [Rules](#rules)

## Technologies

### Source code

- The source code is entirely written in TypeScript
- The output code is ES5 JavaScript

### Tests

#### Unit tests

- Unit tests are written in ES6 JavaScript
- `tape` is the test runner

#### E2E tests

- E2E tests are written in ES6 JavaScript
- E2E tests are plain scripts

## Dependencies

### Development dependencies

- `@types/*` are TypeScript definitions
- `babel-cli` runs E2E tests in ES6 mode using `babel-node`
- `babel-preset-es2015` is a preset for Babel to parse ES6 JavaScript
- `babel-tape-runner` runs the tape unit tests in ES6 mode
- `del` deletes directories and files 
- `gulp` is the build system for automated tasks
- `gulp-require-tasks` automatically includes gulp submodules
- `gulp-typescript` is the TypeScript compiler plugin for gulp
- `gulp-watch` is a gulp plugin that watches for file changes
- `merge2` is used to merge multiple streams into one stream
- `run-sequence` is used to run gulp tasks in sequence
- `semver` is tool to check semantic versioning
- `tape` is the test runner for the unit tests
- `tslint` checks TypeScript code for errors
- `typescript` is the TypeScript compiler
- `vrsource-tslint-rules` is a set of extended rules for tslint

### Production dependencies

- `corejs` is used to get polyfills for next-generation JavaScript implementations
- `request` performs HTTP requests

## Files

### Directory structure

- `distribution` - Output code 
- `source` - The source code
- `tests` - All test files
  - `e2e` - End-to-end test files
  - `unit` - Unit-test files
- `tools` - Development tools
  - `tasks` - Gulp tasks
  - `fixtures` - Fixtures
  - `helpers` - Helper functions
  - `values` - Value helpers

### Project files details

- `.babelrc` - Babel compiler settings
- `.editorconfig` - Universal editor configuration
- `.gitignore` - List of ignored files and directories
- `.travis.yml` - Travis CI configuration file
- `CHANGELOG.md` - Changelog
- `CONTRIBUTING.md` - This file
- `gulpfile.babel.js` - Gulp tasks definition file
- `index.js` - Main entry script
- `package.json` - Module manifest
- `README.md` - ReadMe
- `tsconfig.json` - TypeScript compiler settings
- `tslint.json` - TSLint settings

## Available commands

### Development

- `npm start` is the command to start developing. It builds the project and watches for file changes
- `npm run build` builds the project

### Testing

- `npm test` runs all commands below. It lints the source code and runs E2E and unit tests
- `npm run lint` lints the source code
- `npm run test-unit` runs the unit tests
- `npm run test-e2e` runs the E2E tests

## Rules

- Perform test-driven development (write [unit](https://github.com/substack/tape) and E2E tests)
- Lint your code (using [TSLint](https://palantir.github.io/tslint))
- Follow [semantic versioning scheme](http://semver.org)
- Make entries to the [changelog](CHANGELOG.md) file
- Document your code using [JSDoc](http://usejsdoc.org) documentation blocks
- Format your code according to the [style guidelines](.editorconfig)
- Describe your method in [API documentation](API.md) file