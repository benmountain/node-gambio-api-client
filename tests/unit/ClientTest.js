import test from 'tape';
import semver from 'semver';
import { files, variables } from './../../tools/values';
import { login } from './../../tools/fixtures';
import Client from './../..';

test('Client::VERSION', t => {
  const packageVersion = files.packageData.version;
  const returnedValue = Client.VERSION;

  t.equal(typeof returnedValue, 'string', 'Is a string');
  t.equal(packageVersion, returnedValue, 'Matches the package version');
  t.ok(semver.valid(returnedValue), 'Is semver compatible');
  t.end();
});

test('Client#constructor', t => {
  t.throws(() => new Client(), Error, 'Throws error on missing parameter');
  t.throws(() => new Client(variables.empty.object), Error, 'Throws error on empty object parameter');
  t.throws(() => new Client(variables.examples.number), Error, 'Throws error on invalid parameter');
  t.throws(() => new Client(Object.assign({}, login, { url: variables.empty.string })), Error, 'Throws error on empty URL');
  t.throws(() => new Client(Object.assign({}, login, { url: variables.examples.number })), Error, 'Throws error on invalid URL');
  t.throws(() => new Client(Object.assign({}, login, { user: variables.empty.string })), Error, 'Throws error on empty user');
  t.throws(() => new Client(Object.assign({}, login, { user: variables.examples.number })), Error, 'Throws error on invalid user');
  t.throws(() => new Client(Object.assign({}, login, { password: variables.empty.string })), Error, 'Throws error on empty password');
  t.throws(() => new Client(Object.assign({}, login, { password: variables.examples.number })), Error, 'Throws error on invalid password');
  t.doesNotThrow(() => new Client(login), Error, 'Does not throw error on valid parameter');
  t.end();
});
