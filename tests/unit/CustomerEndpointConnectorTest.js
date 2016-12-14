import test from 'tape';
import { CustomerEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import loginValues from './../../tools/tests/values/login.json';
import { variables } from './../../tools/tests/values/variables';
import { noop } from './../../tools/tests/helpers/noop';

const instance = new CustomerEndpointConnector(new RequestDispatcher(loginValues));

test('CustomerEndpointConnector#constructor', t => {
  const requestDispatcher = new RequestDispatcher(loginValues);

  t.throws(() => new CustomerEndpointConnector(), Error, 'Throws error when passing no parameter');
  t.throws(() => new CustomerEndpointConnector(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => new CustomerEndpointConnector(requestDispatcher), Error, 'Does not throw error when passing valid parameter');
  t.end();
});

test('CustomerEndpointConnector#create', t => {
  t.throws(() => instance.create(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.create(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.create(variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.create(variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CustomerEndpointConnector#delete', t => {
  t.throws(() => instance.delete(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.delete(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.delete(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.delete(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CustomerEndpointConnector#get', t => {
  t.doesNotThrow(() => instance.get().catch(noop), Error, 'Does not throw error on missing parameter');
  t.doesNotThrow(() => instance.get(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing invalid parameter');
  t.ok(instance.get().catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CustomerEndpointConnector#getGuests', t => {
  t.doesNotThrow(() => instance.getGuests().catch(noop), Error, 'Does not throw error on missing parameter');
  t.doesNotThrow(() => instance.getGuests(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing invalid parameter');
  t.ok(instance.getGuests().catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CustomerEndpointConnector#getById', t => {
  t.throws(() => instance.getById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getById(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getById(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CustomerEndpointConnector#getAddressesByCustomerId', t => {
  t.throws(() => instance.getAddressesByCustomerId(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getAddressesByCustomerId(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getAddressesByCustomerId(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getAddressesByCustomerId(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CustomerEndpointConnector#search', t => {
  t.throws(() => instance.search(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.search(variables.numbers.positive), Error, 'Throws error on invalid parameter');
  t.doesNotThrow(() => instance.search(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.search(variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#update', t => {
  t.throws(() => instance.update(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.update(variables.strings.minimal), Error, 'Throws error when passing invalid ID parameter');
  t.throws(() => instance.update(variables.numbers.positive), Error, 'Throws error when data parameter is missing');
  t.throws(() => instance.update(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid data parameter');
  t.doesNotThrow(() => instance.update(variables.numbers.positive, variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.update(variables.numbers.positive, variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});
