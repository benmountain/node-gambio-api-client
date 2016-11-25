import test from 'tape';
import loginValues from './../../tools/tests/values/login.json';
import { RequestDispatcher } from './../../distribution/scripts/RequestDispatcher';

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
