# ts-scratch-paper

A simple starting configuration for jotting typescript code.  Configured to debug current file.

## setup

- fork
- clone
- `$ cd ts-scratch-paper`
- `$ npm install`
- copy the codewar solution to solution.ts
- copy the tests to test.ts and remove the first two lines:
    - `/// <reference path="/runner/typings/mocha/index.d.ts" />`
    - `/// <reference path="/runner/typings/chai/index.d.ts" />`

## test

- `$ npm test`

## debugging

- with target file open, launch debugger (`f5`)
