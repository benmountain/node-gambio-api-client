# Contributing 

## Table of contents
  - *1* Introduction
  - *2* Technologies
    - *2.1* Source code
    - *2.2* Tests
      - *2.2.1* Unit tests
      - *2.2.2* E2E tests
  - *3* Dependencies
    - *3.1* Development dependencies
    - *3.2* Production dependencies
  - *4* Files
    - *4.1* Directory structure
    - *4.2* Explanation
  - *5* Available commands
    - *5.1* Development
    - *5.2* Testing
    - *5.3* Deployment
  - *6* Rules
    - *6.1* Guidelines
    - *6.2* Conduct

## *1* Introduction

- This document helps you to get involved into the development of this project.
- Everyone is welcome to send pull requests.

## *2* Technologies

### *2.1* Source code

- The source code is entirely written in **TypeScript** and transpiled to **ES5 JavaScript**
- `request` is the library used to perform HTTP requests
- The library `corejs` is used to get polyfills for next-generation JavaScript implementations like Promises and much more

### *2.2* Tests

#### *2.2.1* Unit tests

- Unit tests are written in **ES6 JavaScript**
- `tape` is the test runner

#### *2.2.2* E2E tests

- E2E tests are written in **ES6 JavaScript**
- E2E tests are plain scripts

## *3* Dependencies

### *3.1* Development dependencies

- `@types/*` are TypeScript definitions
- `babel-node` runs E2E tests in ES6 mode
- `babel-preset-es2015` is a preset for **Babel** to parse **ES6 JavaScript**
- `babel-tape-runner`
- `del` 
- `gulp` 
- `gulp-require-tasks` 
- `gulp-typescript` 
- `gulp-watch` 
- `merge2` 
- `run-sequence` 
- `semver` 
- `tape` 
- `tslint` 
- `typescript` 
- `vrsource-tslint-rules` 



## Directory structure

- **source** - The source code
- **tests** - All test files
  - **e2e** - End-to-end test files
  - **unit** - Unit-test files
- **tools** - Development tools
  - **gulp** - All gulp tasks
  - **tests** - Helpers for tests
    - **fixtures** - Fixtures for unit-tests
    - **helpers** - Helper functions
    - **values** - Value helpers

## Root files

- **.babelrc** - Babel compiler settings
- **.editorconfig** - Universal editor configuration
- **.gitignore** - Lis of ignored files and directories
- **CHANGELOG.md** - Changelog
- **CONTRIBUTING.md** - This file
- **gulpfile.babel.js** - Gulp task definition
- **index.js** - Main entry script
- **package.json** - Module manifest
- **README.md** - ReadMe
- **tsconfig.json** - TypeScript compiler settings
- **tslint.json** - TypeScript linter settings

- Test first
- Follow the code of contact
- This project follows the semantic versioning scheme

npm install --save-dev babel-node