import test from 'tape';
import { CustomerEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/helpers';
import { login } from './../../tools/fixtures';
import { variables } from './../../tools/values';

const instance = new CustomerEndpointConnector(new RequestDispatcher(login));

test('CustomerEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, CustomerEndpointConnector));
test('CustomerEndpointConnector#create', t => reusableTesters.testEndpointConnectorCreateMethod(t, instance));
test('CustomerEndpointConnector#delete', t => reusableTesters.testEndpointConnectorDeleteMethod(t, instance));
test('CustomerEndpointConnector#get', t => reusableTesters.testEndpointConnectorGetMethod(t, instance));
test('CustomerEndpointConnector#getGuests', t => reusableTesters.testEndpointConnectorCustomMethodWithNoParameters(t, instance, 'getGuests'));
test('CustomerEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('CustomerEndpointConnector#getAddresses', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getAddresses', variables.examples.number));
test('CustomerEndpointConnector#search', t => reusableTesters.testEndpointConnectorSearchMethod(t, instance));
test('CustomerEndpointConnector#update', t => reusableTesters.testEndpointConnectorUpdateMethod(t, instance));
