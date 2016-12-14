# Contributing 

## Table of contents

  - *1* - [Introduction](#1---introduction)
  - *2* - [Technologies](#2---technologies)
    - *2.1* - [Source code](#21---source-code)
    - *2.2* - [Tests](#22---tests)
      - *2.2.1* - [Unit tests](#221---unit-tests)
      - *2.2.2* - [E2E tests](#222---e2e-tests)
  - *3* - [Dependencies](#3---dependencies)
    - *3.1* - [Development dependencies](#31---development-dependencies)
    - *3.2* - [Production dependencies](#32---production-dependencies)
  - *4* - [Files](#4---files)
    - *4.1* - [Directory structure](#41---directory-structure)
    - *4.2* - [Project files details](#42---project-files-details)
  - *5* - [Available commands](#5---available-commands)
    - *5.1* - [Development](#51---development)
    - *5.2* - [Testing](#52---testing)
  - *6* - [Rules](#6---rules)


## *1* - Introduction

This document helps you to get involved into the development of this project.

Everyone is welcome to send pull requests.

## *2* - Technologies

### *2.1* - Source code

- The source code is entirely written in TypeScript
- The output code is ES5 JavaScript

### *2.2* - Tests

#### *2.2.1* - Unit tests

- Unit tests are written in ES6 JavaScript
- `tape` is the test runner

#### *2.2.2* - E2E tests

- E2E tests are written in ES6 JavaScript
- E2E tests are plain scripts

## *3* - Dependencies

### *3.1* - Development dependencies

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

### *3.2* - Production dependencies

- `corejs` is used to get polyfills for next-generation JavaScript implementations
- `request` performs HTTP requests

## *4* - Files

### *4.1* - Directory structure

- `distribution` - Output code 
- `source` - The source code
- `tests` - All test files
  - `e2e` - End-to-end test files
  - `unit` - Unit-test files
- `tools` - Development tools
  - `gulp` - All gulp tasks
  - `tests` - Helpers for tests
    - `fixtures` - Fixtures for unit-tests
    - `helpers` - Helper functions
    - `values` - Value helpers

### *4.2* - Project files details

- `.babelrc` - Babel compiler settings
- `.editorconfig` - Universal editor configuration
- `.gitignore` - List of ignored files and directories
- `CHANGELOG.md` - Changelog
- `CONTRIBUTING.md` - This file
- `gulpfile.babel.js` - Gulp tasks definition file
- `index.js` - Main entry script
- `package.json` - Module manifest
- `README.md` - ReadMe
- `tsconfig.json` - TypeScript compiler settings
- `tslint.json` - TSLint settings

## *5* - Available commands

### *5.1* - Development

- `npm start` is the command to start developing. It builds the project and watches for file changes
- `npm run build` builds the project

### *5.2* - Testing

- `npm test` runs all commands below. It lints the source code and runs E2E and unit tests
- `npm run lint` lints the source code
- `npm run test-unit` runs the unit tests
- `npm run test-e2e` runs the E2E tests

## *6* - Rules

- Perform test-driven development
- Lint your code
- Follow semantic versioning scheme
- Make entries to the changelog file