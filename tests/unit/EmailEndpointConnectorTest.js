import test from 'tape';
import { EmailEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import loginValues from './../../tools/tests/values/login.json';
import { variables } from './../../tools/tests/values/variables';
import { noop } from './../../tools/tests/helpers/noop';

const instance = new EmailEndpointConnector(new RequestDispatcher(loginValues));

test('EmailEndpointConnector#constructor', t => {
  const requestDispatcher = new RequestDispatcher(loginValues);

  t.throws(() => new EmailEndpointConnector(), Error, 'Throws error when passing no parameter');
  t.throws(() => new EmailEndpointConnector(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => new EmailEndpointConnector(requestDispatcher), Error, 'Does not throw error when passing valid parameter');
  t.end();
});

test('EmailEndpointConnector#delete', t => {
  t.throws(() => instance.delete(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.delete(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.delete(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.delete(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('EmailEndpointConnector#get', t => {
  t.doesNotThrow(() => instance.get().catch(noop), Error, 'Does not throw error on missing parameter');
  t.doesNotThrow(() => instance.get(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing invalid parameter');
  t.ok(instance.get().catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('EmailEndpointConnector#getById', t => {
  t.throws(() => instance.getById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.getById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.getById(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.getById(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('EmailEndpointConnector#getPending', t => {
  t.doesNotThrow(() => instance.getPending().catch(noop), Error, 'Does not throw error on missing parameter');
  t.doesNotThrow(() => instance.getPending(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing invalid parameter');
  t.ok(instance.getPending().catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('EmailEndpointConnector#search', t => {
  t.throws(() => instance.search(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.search(variables.numbers.positive), Error, 'Throws error on invalid parameter');
  t.doesNotThrow(() => instance.search(variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.search(variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('EmailEndpointConnector#send', t => {
  t.throws(() => instance.queue(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.queue(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.queue(variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.queue(variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('EmailEndpointConnector#send', t => {
  t.throws(() => instance.send(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.send(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.send(variables.objects.empty).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.send(variables.objects.empty).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('EmailEndpointConnector#sendById', t => {
  t.throws(() => instance.sendById(), Error, 'Throws error on missing parameter');
  t.throws(() => instance.sendById(variables.strings.minimal), Error, 'Throws error when passing invalid parameter');
  t.doesNotThrow(() => instance.sendById(variables.numbers.positive).catch(noop), Error, 'Does not throw error when passing valid parameter');
  t.ok(instance.sendById(variables.numbers.positive).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});

test('EmailEndpointConnector#uploadAttachment', t => {
  t.throws(() => instance.uploadAttachment(), Error, 'Throws error on missing parameters');
  t.throws(() => instance.uploadAttachment(variables.numbers.positive), Error, 'Throws error when passing invalid parameter');
  t.throws(() => instance.uploadAttachment(variables.strings.minimal), Error, 'Throws error when second parameter is missing');
  t.throws(() => instance.uploadAttachment(variables.strings.minimal, variables.numbers.positive), Error, 'Throws error on invalid second parameter');
  t.doesNotThrow(() => instance.uploadAttachment(variables.strings.minimal, variables.strings.minimal).catch(noop), Error, 'Does not throw error when passing valid parameters');
  t.ok(instance.uploadAttachment(variables.strings.minimal, variables.strings.minimal).catch(noop) instanceof Promise, 'Returns a promise');
  t.end();
});
