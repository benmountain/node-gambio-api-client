import test from 'tape';
import semver from 'semver';
import packageJson from './../../package.json';
import loginValues from './../../tools/tests/values/login.json';
import Client from './../..';

test('Client::VERSION', t => {
  const packageVersion = packageJson.version;
  const returnedValue = Client.VERSION;

  t.equal(typeof returnedValue, 'string', 'Is a string');
  t.equal(packageVersion, returnedValue, 'Matches the package version');
  t.ok(semver.valid(returnedValue), 'Is semver compatible');
  t.end();
});

test('Client#constructor', t => {
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
    const functionTest = () => new Client(parameter);

    t.throws(functionTest, Error, composedErrorMessage);
  }

  scenarios.forEach(scenario => helper(...scenario));

  t.doesNotThrow(() => new Client(baseParameters), Error, 'Does not throw error when passing valid argument');
  t.end();
});