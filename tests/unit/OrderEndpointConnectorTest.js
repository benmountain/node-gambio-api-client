import test from 'tape';
import { OrderEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import loginValues from './../../tools/tests/values/login.json';
import { variables } from './../../tools/tests/values/variables';
import { noop } from './../../tools/tests/helpers/noop';

const instance = new OrderEndpointConnector(new RequestDispatcher(loginValues));

test('OrderEndpointConnector#constructor', t => {
  const requestDispatcher = new RequestDispatcher(loginValues);

  t.throws(() => new OrderEndpointConnector(), Error, 'Throws error when passing no parameter');
  t.throws(() => new OrderEndpointConnector(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => new OrderEndpointConnector(requestDispatcher), Error, 'Does not throw error when passing valid parameter');
  t.end();
});

test('OrderEndpointConnector#createItemAttribute', t => {
  t.throws(() => instance.createItemAttribute(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.createItemAttribute(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.createItemAttribute(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.createItemAttribute(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.throws(() => instance.createItemAttribute(variables.numbers.positive, variables.numbers.positive), Error, 'Throws error on missing third parameter');
  t.throws(() => instance.createItemAttribute(variables.numbers.positive, variables.numbers.positive, variables.numbers.positive), Error, 'Throws error on invalid third parameter');
  t.doesNotThrow(() => instance.createItemAttribute(variables.numbers.positive, variables.numbers.positive, variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.createItemAttribute(variables.numbers.positive, variables.numbers.positive, variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#createItem', t => {
  t.throws(() => instance.createItem(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.createItem(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.createItem(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.createItem(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.createItem(variables.numbers.positive, variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.createItem(variables.numbers.positive, variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#createTotal', t => {
  t.throws(() => instance.createTotal(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.createTotal(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.createTotal(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.createTotal(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.createTotal(variables.numbers.positive, variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.createTotal(variables.numbers.positive, variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#create', t => {
  t.throws(() => instance.create(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.create(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.create(variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.create(variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#deleteItemAttribute', t => {
  t.throws(() => instance.deleteItemAttribute(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.deleteItemAttribute(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.deleteItemAttribute(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.deleteItemAttribute(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.throws(() => instance.deleteItemAttribute(variables.numbers.positive, variables.numbers.positive), Error, 'Throws error on missing third parameter');
  t.throws(() => instance.deleteItemAttribute(variables.numbers.positive, variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid third parameter');
  t.doesNotThrow(() => instance.deleteItemAttribute(variables.numbers.positive, variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.deleteItemAttribute(variables.numbers.positive, variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#deleteTotal', t => {
  t.throws(() => instance.deleteTotal(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.deleteTotal(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.deleteTotal(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.deleteTotal(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.deleteTotal(variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.deleteTotal(variables.numbers.positive, variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#delete', t => {
  t.throws(() => instance.delete(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.delete(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.delete(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.delete(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});
