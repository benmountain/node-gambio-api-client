import test from 'tape';
import { CountryEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import loginValues from './../../tools/tests/values/login.json';
import { variables } from './../../tools/tests/values/variables';
import { noop } from './../../tools/tests/helpers/noop';

const instance = new CountryEndpointConnector(new RequestDispatcher(loginValues));

test('CountryEndpointConnector#constructor', t => {
  const requestDispatcher = new RequestDispatcher(loginValues);

  t.throws(() => new CountryEndpointConnector(), Error, 'Throws error when passing no parameter');
  t.throws(() => new CountryEndpointConnector(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => new CountryEndpointConnector(requestDispatcher), Error, 'Does not throw error when passing valid parameter');
  t.end();
});

test('CountryEndpointConnector#getById', t => {
  t.throws(() => instance.getById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getById(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getById(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CountryEndpointConnector#getZonesByCountryId', t => {
  t.throws(() => instance.getZonesByCountryId(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getZonesByCountryId(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getZonesByCountryId(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getZonesByCountryId(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});
