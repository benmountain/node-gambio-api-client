import test from 'tape';
import { AddressEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import loginValues from './../../tools/tests/values/login.json';
import { variables } from './../../tools/tests/values/variables';
import { noop } from './../../tools/tests/helpers/noop';

const instance = new AddressEndpointConnector(new RequestDispatcher(loginValues));

test('AddressEndpointConnector#constructor', t => {
  const requestDispatcher = new RequestDispatcher(loginValues);

  t.throws(() => new AddressEndpointConnector(), Error, 'Throws error when passing no parameter');
  t.throws(() => new AddressEndpointConnector(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => new AddressEndpointConnector(requestDispatcher), Error, 'Does not throw error when passing valid parameter');
  t.end();
});

test('AddressEndpointConnector#create', t => {
  t.throws(() => instance.create(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.create(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.create(variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.create(variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('AddressEndpointConnector#delete', t => {
  t.throws(() => instance.delete(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.delete(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.delete(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.delete(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('AddressEndpointConnector#get', t => {
  t.doesNotThrow(() => instance.get().catch(noop), Error, 'Does not throw error on missing parameter');
  t.doesNotThrow(() => instance.get(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing invalid parameter');
  t.ok(instance.get().catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('AddressEndpointConnector#getById', t => {
  t.throws(() => instance.getById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getById(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getById(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('AddressEndpointConnector#search', t => {
  t.throws(() => instance.search(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.search(variables.numbers.positive), Error, 'Throws error on invalid parameter');
  t.doesNotThrow(() => instance.search(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.search(variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('AddressEndpointConnector#update', t => {
  t.throws(() => instance.update(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.update(variables.strings.minimal), Error, 'Throws error when passing invalid ID parameter');
  t.throws(() => instance.update(variables.numbers.positive), Error, 'Throws error when data parameter is missing');
  t.throws(() => instance.update(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid data parameter');
  t.doesNotThrow(() => instance.update(variables.numbers.positive, variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.update(variables.numbers.positive, variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});
