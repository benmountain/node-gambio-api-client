import test from 'tape';
import { RequestDispatcher } from './../../distribution/scripts';
import { noop, reusableTesters } from './../../tools/helpers';
import { login, file } from './../../tools/fixtures';
import { variables } from './../../tools/values';

const instance = new RequestDispatcher(login);

test('RequestDispatcher#constructor', t => {
  t.throws(() => new RequestDispatcher(), Error, 'Throws error on missing parameter');
  t.throws(() => new RequestDispatcher(variables.empty.object), Error, 'Throws error on empty object parameter');
  t.throws(() => new RequestDispatcher(variables.examples.number), Error, 'Throws error on invalid parameter');
  t.throws(() => new RequestDispatcher(Object.assign({}, login, { url: variables.empty.string })), Error, 'Throws error on empty URL');
  t.throws(() => new RequestDispatcher(Object.assign({}, login, { url: variables.examples.number })), Error, 'Throws error on invalid URL');
  t.throws(() => new RequestDispatcher(Object.assign({}, login, { user: variables.empty.string })), Error, 'Throws error on empty user');
  t.throws(() => new RequestDispatcher(Object.assign({}, login, { user: variables.examples.number })), Error, 'Throws error on invalid user');
  t.throws(() => new RequestDispatcher(Object.assign({}, login, { password: variables.empty.string })), Error, 'Throws error on empty password');
  t.throws(() => new RequestDispatcher(Object.assign({}, login, { password: variables.examples.number })), Error, 'Throws error on invalid password');
  t.doesNotThrow(() => new RequestDispatcher(login), Error, 'Does not throw error on valid parameter');
  t.end();
});

test('RequestDispatcher#get', t => reusableTesters.testRequestDispatcherCustomMethodWithOptionalDataParameter(t, instance, 'get'));
test('RequestDispatcher#post', t => reusableTesters.testRequestDispatcherCustomMethodWithRequiredDataParameter(t, instance, 'post'));
test('RequestDispatcher#put', t => reusableTesters.testRequestDispatcherCustomMethodWithRequiredDataParameter(t, instance, 'put'));
test('RequestDispatcher#delete', t => reusableTesters.testRequestDispatcherCustomMethodWithOptionalDataParameter(t, instance, 'delete'));

test('RequestDispatcher#uploadFile', t => {
  t.throws(() => instance.uploadFile().catch(noop), Error, 'Throws error on missing parameters');
  t.throws(() => instance.uploadFile(variables.examples.number).catch(noop), Error, 'Throws error on invalid route');
  t.throws(() => instance.uploadFile(variables.examples.string).catch(noop), Error, 'Throws error on empty route');
  t.throws(() => instance.uploadFile(variables.examples.string, variables.examples.number).catch(noop), Error, 'Throws error on invalid file path');
  t.throws(() => instance.uploadFile(variables.examples.string, variables.examples.string).catch(noop), Error, 'Throws error on empty file path');
  t.throws(() => instance.uploadFile(variables.examples.string, file, variables.examples.number).catch(noop), Error, 'Throws error on invalid file name');
  t.throws(() => instance.uploadFile(variables.examples.string, file, variables.examples.string, variables.examples.number).catch(noop), Error, 'Throws error on invalid file post field name');
  t.throws(() => instance.uploadFile(variables.examples.string, file, variables.examples.string, variables.examples.string, variables.examples.number).catch(noop), Error, 'Throws error on invalid file name post field name');
  t.doesNotThrow(() => instance.uploadFile(variables.examples.string, file, variables.examples.string).catch(noop), Error, 'Does not throw error when the required parameters are passed');
  t.ok(instance.uploadFile(variables.examples.string, file, variables.examples.string, variables.examples.string, variables.examples.string).catch(noop) instanceof Promise, 'Returns a Promise');
  t.end();
});