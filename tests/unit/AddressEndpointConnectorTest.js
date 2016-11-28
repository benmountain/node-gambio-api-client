import test from 'tape';
import { AddressEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import loginValues from './../../tools/tests/values/login.json';
import { noop } from './../../tools/tests/helpers/noop';

const instance = new AddressEndpointConnector(new RequestDispatcher(loginValues));

test('AddressEndpointConnector#constructor', t => {
  const requestDispatcher = new RequestDispatcher(loginValues);

  t.throws(() => new AddressEndpointConnector(), Error, 'Throws error when passing no parameter');
  t.throws(() => new AddressEndpointConnector(1), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => new AddressEndpointConnector(requestDispatcher), Error, 'Does not throw error when passing valid parameter');
  t.end();
});

test('AddressEndpointConnector#create', t => {
  t.throws(() => instance.create(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.create(1), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.create({}).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.create({}).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('AddressEndpointConnector#delete', t => {
  t.throws(() => instance.delete(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.delete('asdsad'), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.delete(99999).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.delete(99999).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('AddressEndpointConnector#get', t => {
  t.doesNotThrow(() => instance.get().catch(noop), Error, 'Does not throw error on missing parameter');
  t.doesNotThrow(() => instance.get('asdsad').catch(noop), Error, 'Does not throw error when passing invalid parameter');
  t.ok(instance.get().catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('AddressEndpointConnector#getById', t => {
  t.throws(() => instance.getById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getById('asdsad'), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getById(99999).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getById(99999).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('AddressEndpointConnector#search', t => {
  t.throws(() => instance.search(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.search(1), Error, 'Throws error on invalid parameter');
  t.doesNotThrow(() => instance.search('John').catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.search('John').catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('AddressEndpointConnector#update', t => {
  t.throws(() => instance.update(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.update('asdsad'), Error, 'Throws error when passing invalid ID parameter');
  t.throws(() => instance.update(99999), Error, 'Throws error when data parameter is missing');
  t.throws(() => instance.update(99999, 'hello'), Error, 'Throws error on invalid data parameter');
  t.doesNotThrow(() => instance.update(99999, {}).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.update(99999, {}).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});