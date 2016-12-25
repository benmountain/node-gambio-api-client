import test from 'tape';
import { ZoneEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/helpers';
import { login } from './../../tools/fixtures';
import { variables } from './../../tools/values';

const instance = new ZoneEndpointConnector(new RequestDispatcher(login));

test('ZoneEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, ZoneEndpointConnector));
test('ZoneEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));