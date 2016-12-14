import test from 'tape';
import { CategoryEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import loginValues from './../../tools/tests/values/login.json';
import { variables } from './../../tools/tests/values/variables';
import { noop } from './../../tools/tests/helpers/noop';

const instance = new CategoryEndpointConnector(new RequestDispatcher(loginValues));

test('CategoryEndpointConnector#constructor', t => {
  const requestDispatcher = new RequestDispatcher(loginValues);

  t.throws(() => new CategoryEndpointConnector(), Error, 'Throws error when passing no parameter');
  t.throws(() => new CategoryEndpointConnector(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => new CategoryEndpointConnector(requestDispatcher), Error, 'Does not throw error when passing valid parameter');
  t.end();
});

test('CategoryEndpointConnector#create', t => {
  t.throws(() => instance.create(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.create(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.create(variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.create(variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#deleteIcon', t => {
  t.throws(() => instance.deleteIcon(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.deleteIcon(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.deleteIcon(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.deleteIcon(variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#deleteImage', t => {
  t.throws(() => instance.deleteImage(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.deleteImage(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.deleteImage(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.deleteImage(variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#delete', t => {
  t.throws(() => instance.delete(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.delete(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.delete(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.delete(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#get', t => {
  t.doesNotThrow(() => instance.get().catch(noop), Error, 'Does not throw error on missing parameter');
  t.doesNotThrow(() => instance.get(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing invalid parameter');
  t.ok(instance.get().catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#getById', t => {
  t.throws(() => instance.getById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getById(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getById(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#getChildrenById', t => {
  t.throws(() => instance.getChildrenById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getChildrenById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getChildrenById(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getChildrenById(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#search', t => {
  t.throws(() => instance.search(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.search(variables.numbers.positive), Error, 'Throws error on invalid parameter');
  t.doesNotThrow(() => instance.search(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.search(variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#getIcons', t => {
  t.doesNotThrow(() => instance.getIcons().catch(noop), Error, 'Does not throw error on missing parameter');
  t.doesNotThrow(() => instance.getIcons(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing invalid parameter');
  t.ok(instance.getIcons().catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#renameIcon', t => {
  t.throws(() => instance.renameIcon(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.renameIcon(variables.numbers.positive), Error, 'Throws error on invalid parameter');
  t.throws(() => instance.renameIcon(variables.strings.minimal), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.renameIcon(variables.numbers.positive, variables.numbers.positive), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.renameIcon(variables.strings.minimal, variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.renameIcon(variables.strings.minimal, variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#renameImage', t => {
  t.throws(() => instance.renameImage(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.renameImage(variables.numbers.positive), Error, 'Throws error on invalid parameter');
  t.throws(() => instance.renameImage(variables.strings.minimal), Error, 'Throws error on missing second parameter');
  t.throws(() => instance.renameImage(variables.numbers.positive, variables.numbers.positive), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.renameImage(variables.strings.minimal, variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.renameImage(variables.strings.minimal, variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
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

test('CategoryEndpointConnector#uploadIcon', t => {
  t.throws(() => instance.uploadIcon(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.uploadIcon(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.uploadIcon(variables.strings.minimal), Error, 'Throws error when second parameter is missing');
  t.throws(() => instance.uploadIcon(variables.strings.minimal, variables.numbers.positive), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.uploadIcon(variables.strings.minimal, variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.uploadIcon(variables.strings.minimal, variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('CategoryEndpointConnector#uploadImage', t => {
  t.throws(() => instance.uploadImage(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.uploadImage(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.uploadImage(variables.strings.minimal), Error, 'Throws error when second parameter is missing');
  t.throws(() => instance.uploadImage(variables.strings.minimal, variables.numbers.positive), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.uploadImage(variables.strings.minimal, variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.uploadImage(variables.strings.minimal, variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

