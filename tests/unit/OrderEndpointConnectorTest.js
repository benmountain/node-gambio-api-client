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

test('OrderEndpointConnector#deleteItemProperty', t => {
  t.throws(() => instance.deleteItemProperty(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.deleteItemProperty(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.deleteItemProperty(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.deleteItemProperty(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.throws(() => instance.deleteItemProperty(variables.numbers.positive, variables.numbers.positive), Error, 'Throws error on missing third parameter');
  t.throws(() => instance.deleteItemProperty(variables.numbers.positive, variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid third parameter');
  t.doesNotThrow(() => instance.deleteItemProperty(variables.numbers.positive, variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.deleteItemProperty(variables.numbers.positive, variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
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

test('OrderEndpointConnector#getHistory', t => {
  t.throws(() => instance.getHistory(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getHistory(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getHistory(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getHistory(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#getHistoryById', t => {
  t.throws(() => instance.getHistoryById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getHistoryById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.getHistoryById(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.getHistoryById(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.getHistoryById(variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getHistoryById(variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#getItemAttributes', t => {
  t.throws(() => instance.getItemAttributes(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getItemAttributes(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.getItemAttributes(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.getItemAttributes(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.getItemAttributes(variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getItemAttributes(variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#getItemProperties', t => {
  t.throws(() => instance.getItemProperties(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getItemProperties(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.getItemProperties(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.getItemProperties(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.getItemProperties(variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getItemProperties(variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#getItemAttributeById', t => {
  t.throws(() => instance.getItemAttributeById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getItemAttributeById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.getItemAttributeById(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.getItemAttributeById(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.throws(() => instance.getItemAttributeById(variables.numbers.positive, variables.numbers.positive), Error, 'Throws error on missing third parameter');
  t.throws(() => instance.getItemAttributeById(variables.numbers.positive, variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid third parameter');
  t.doesNotThrow(() => instance.getItemAttributeById(variables.numbers.positive, variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getItemAttributeById(variables.numbers.positive, variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#getItemPropertyById', t => {
  t.throws(() => instance.getItemPropertyById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getItemPropertyById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.getItemPropertyById(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.getItemPropertyById(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.throws(() => instance.getItemPropertyById(variables.numbers.positive, variables.numbers.positive), Error, 'Throws error on missing third parameter');
  t.throws(() => instance.getItemPropertyById(variables.numbers.positive, variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid third parameter');
  t.doesNotThrow(() => instance.getItemPropertyById(variables.numbers.positive, variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getItemPropertyById(variables.numbers.positive, variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#getItems', t => {
  t.throws(() => instance.getItems(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getItems(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.getItems(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.getItems(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.getItems(variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getItems(variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#getItemById', t => {
  t.throws(() => instance.getItemById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getItemById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.getItemById(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.getItemById(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.getItemById(variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getItemById(variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#getTotals', t => {
  t.throws(() => instance.getTotals(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getTotals(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getTotals(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getTotals(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#getTotalById', t => {
  t.throws(() => instance.getTotalById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getTotalById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.getTotalById(variables.numbers.positive), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.getTotalById(variables.numbers.positive, variables.strings.minimal), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.getTotalById(variables.numbers.positive, variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getTotalById(variables.numbers.positive, variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#get', t => {
  t.doesNotThrow(() => instance.get().catch(noop), Error, 'Does not throw error on missing parameter');
  t.doesNotThrow(() => instance.get(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing invalid parameter');
  t.ok(instance.get().catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#getById', t => {
  t.throws(() => instance.getById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getById(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getById(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('OrderEndpointConnector#search', t => {
  t.throws(() => instance.search(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.search(variables.numbers.positive), Error, 'Throws error on invalid parameter');
  t.doesNotThrow(() => instance.search(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.search(variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});