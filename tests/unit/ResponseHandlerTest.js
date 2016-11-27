import test from 'tape';
import { ResponseHandler } from './../../distribution/scripts';

function noop() {
}

test('ResponseHandler#constructor', t => {
  t.throws(() => new ResponseHandler(), Error, 'Throws error on missing parameters');
  t.throws(() => new ResponseHandler(1), Error, 'Throws error on invalid resolve function parameter');
  t.throws(() => new ResponseHandler(noop), Error, 'Throws error on missing reject function parameter');
  t.throws(() => new ResponseHandler(noop, 1), Error, 'Throws error on invalid reject function parameter');
  t.doesNotThrow(() => new ResponseHandler(noop, noop), Error, 'Does not throw error when passing valid parameters');
  t.end();
});

test('ResponseHandler#handle', t => {
  const instance = new ResponseHandler(noop, noop);
  t.ok(typeof instance.handle === 'function', 'Is a method');
  t.end();
});