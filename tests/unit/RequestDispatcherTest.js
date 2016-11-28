import test from 'tape';
import path from 'path';
import loginValues from './../../tools/tests/values/login.json';
import { RequestDispatcher } from './../../distribution/scripts';
import { noop } from './../../tools/tests/helpers/noop';

const instance = new RequestDispatcher(loginValues);

const route = '/route';
const data = { entry: true };

test('RequestDispatcher#constructor', t => {
  const baseParameters = Object.assign({}, loginValues);

  const scenarios = [
    [{}, 'passing an empty object'],
    [null, 'passing null'],
    [Object.assign({}, baseParameters, { url: '' }), 'passing an empty URL'],
    [Object.assign({}, baseParameters, { url: 1 }), 'passing an invalid URL'],
    [Object.assign({}, baseParameters, { user: '' }), 'passing an empty user'],
    [Object.assign({}, baseParameters, { user: 1 }), 'passing an invalid user'],
    [Object.assign({}, baseParameters, { password: '' }), 'passing an empty password'],
    [Object.assign({}, baseParameters, { password: 1 }), 'passing an invalid password'],
  ];

  function helper(parameter, errorMessage) {
    const composedErrorMessage = `Throws error when ${errorMessage}`;
    const functionTest = () => new RequestDispatcher(parameter);

    t.throws(functionTest, Error, composedErrorMessage);
  }

  scenarios.forEach(scenario => helper(...scenario));

  t.doesNotThrow(() => new RequestDispatcher(baseParameters), Error, 'Does not throw error when passing valid argument');
  t.end();
});

test('RequestDispatcher#get', t => {
  t.throws(() => instance.get().catch(noop), Error, 'Throws error when passing no arguments');
  t.throws(() => instance.get(1).catch(noop), Error, 'Throws error when passing invalid route');
  t.throws(() => instance.get('').catch(noop), Error, 'Throws error when passing empty route');
  t.throws(() => instance.get(route, 2).catch(noop), Error, 'Throws error when passing invalid data');
  t.doesNotThrow(() => instance.get(route).catch(noop), Error, 'Does not throw error when no data is passed');
  t.ok(instance.get(route, data).catch(noop) instanceof Promise, 'Returns a Promise');
  t.end();
});

test('RequestDispatcher#post', t => {
  t.throws(() => instance.post().catch(noop), Error, 'Throws error when passing no arguments');
  t.throws(() => instance.post(1).catch(noop), Error, 'Throws error when passing invalid route');
  t.throws(() => instance.post('').catch(noop), Error, 'Throws error when passing empty route');
  t.throws(() => instance.post(route).catch(noop), Error, 'Throws error on missing data');
  t.throws(() => instance.post(route, 2).catch(noop), Error, 'Throws error when passing invalid data');
  t.doesNotThrow(() => instance.post(route, data).catch(noop), Error, 'Does not throw error when passing valid data');
  t.ok(instance.post(route, data).catch(noop) instanceof Promise, 'Returns a Promise');
  t.end();
});

test('RequestDispatcher#put', t => {
  t.throws(() => instance.put().catch(noop), Error, 'Throws error when passing no arguments');
  t.throws(() => instance.put(1).catch(noop), Error, 'Throws error when passing invalid route');
  t.throws(() => instance.put('').catch(noop), Error, 'Throws error when passing empty route');
  t.throws(() => instance.put(route).catch(noop), Error, 'Throws error on missing data');
  t.throws(() => instance.put(route, 2).catch(noop), Error, 'Throws error when passing invalid data');
  t.doesNotThrow(() => instance.put(route, data).catch(noop), Error, 'Does not throw error when passing valid data');
  t.ok(instance.put(route, data).catch(noop) instanceof Promise, 'Returns a Promise');
  t.end();
});

test('RequestDispatcher#delete', t => {
  t.throws(() => instance.delete().catch(noop), Error, 'Throws error when passing no arguments');
  t.throws(() => instance.delete(1).catch(noop), Error, 'Throws error when passing invalid route');
  t.throws(() => instance.delete('').catch(noop), Error, 'Throws error when passing empty route');
  t.throws(() => instance.delete(route, 2).catch(noop), Error, 'Throws error when passing invalid data');
  t.doesNotThrow(() => instance.delete(route).catch(noop), Error, 'Does not throw error when no data is passed');
  t.ok(instance.delete(route, data).catch(noop) instanceof Promise, 'Returns a Promise');
  t.end();
});

test('RequestDispatcher#uploadFile', t => {
  const filePath = path.join(__dirname, '..', '..', 'tools', 'tests', 'fixtures', 'file.txt');
  const fileName = 'notes.txt';
  const fieldNameForFile = 'filedata';
  const fieldNameForFileName = 'name';

  t.throws(() => instance.uploadFile().catch(noop), Error, 'Throws error on missing parameters');
  t.throws(() => instance.uploadFile(1).catch(noop), Error, 'Throws error on invalid route');
  t.throws(() => instance.uploadFile('').catch(noop), Error, 'Throws error on empty route');
  t.throws(() => instance.uploadFile(route, 1).catch(noop), Error, 'Throws error on invalid file path');
  t.throws(() => instance.uploadFile(route, '').catch(noop), Error, 'Throws error on empty file path');
  t.throws(() => instance.uploadFile(route, filePath, 1).catch(noop), Error, 'Throws error on invalid file name');
  t.throws(() => instance.uploadFile(route, filePath, fileName, 1).catch(noop), Error, 'Throws error on invalid file post field name');
  t.throws(() => instance.uploadFile(route, filePath, fileName, fieldNameForFile, 1).catch(noop), Error, 'Throws error on invalid file name post field name');
  t.doesNotThrow(() => instance.uploadFile(route, filePath, fileName).catch(noop), Error, 'Does not throw error when the required parameters are passed');
  t.ok(instance.uploadFile(route, filePath, fileName, fieldNameForFile, fieldNameForFileName).catch(noop) instanceof Promise, 'Returns a Promise');
  t.end();
});