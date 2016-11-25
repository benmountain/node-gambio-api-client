import test from 'tape';
import { Configuration } from './../../distribution/scripts/Configuration';

test('Configuration::API_VERSION', t => {
  t.equal(typeof Configuration.API_VERSION, 'number', 'Is a number');
  t.end();
});

test('Configuration::API_URL', t => {
  t.equal(typeof Configuration.API_URL, 'string', 'Is a string');
  t.end();
});
