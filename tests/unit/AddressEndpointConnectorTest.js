import test from 'tape';
import { AddressEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import loginValues from './../../tools/tests/values/login.json';

test('AddressEndpointConnector#constructor', t => {
  const requestDispatcher = new RequestDispatcher(loginValues);
});