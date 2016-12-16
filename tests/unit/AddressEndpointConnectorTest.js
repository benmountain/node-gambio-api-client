import test from 'tape';
import { AddressEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/helpers';
import { login } from './../../tools/fixtures';

const instance = new AddressEndpointConnector(new RequestDispatcher(login));

test('AddressEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, AddressEndpointConnector));
test('AddressEndpointConnector#create', t => reusableTesters.testEndpointConnectorCreateMethod(t, instance));
test('AddressEndpointConnector#delete', t => reusableTesters.testEndpointConnectorDeleteMethod(t, instance));
test('AddressEndpointConnector#get', t => reusableTesters.testEndpointConnectorGetMethod(t, instance));
test('AddressEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('AddressEndpointConnector#search', t => reusableTesters.testEndpointConnectorSearchMethod(t, instance));
test('AddressEndpointConnector#update', t => reusableTesters.testEndpointConnectorUpdateMethod(t, instance));
