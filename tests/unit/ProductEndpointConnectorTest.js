import test from 'tape';
import { ProductEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/helpers';
import { login } from './../../tools/fixtures';
import { variables } from './../../tools/values';

const instance = new ProductEndpointConnector(new RequestDispatcher(login));

test('ProductEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, ProductEndpointConnector));
test('ProductEndpointConnector#createLink', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'createLink', [variables.examples.number, variables.examples.number]));
test('ProductEndpointConnector#create', t => reusableTesters.testEndpointConnectorCreateMethod(t, instance));
test('ProductEndpointConnector#deleteImage', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'deleteImage', variables.examples.string));
test('ProductEndpointConnector#deleteLinks', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'deleteLinks', variables.examples.number));
test('ProductEndpointConnector#deleteLink', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'deleteLink', [variables.examples.number, variables.examples.number]));
test('ProductEndpointConnector#delete', t => reusableTesters.testEndpointConnectorDeleteMethod(t, instance));
test('ProductEndpointConnector#get', t => reusableTesters.testEndpointConnectorGetMethod(t, instance));
test('ProductEndpointConnector#getLinks', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getLinks', variables.examples.number));
test('ProductEndpointConnector#getLink', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getLink', [variables.examples.number, variables.examples.number]));
test('ProductEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('ProductEndpointConnector#search', t => reusableTesters.testEndpointConnectorSearchMethod(t, instance));
test('ProductEndpointConnector#renameImage', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'renameImage', [variables.examples.string, variables.examples.string]));
test('ProductEndpointConnector#update', t => reusableTesters.testEndpointConnectorUpdateMethod(t, instance));
test('ProductEndpointConnector#updateLink', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'updateLink', [variables.examples.number, variables.examples.number, variables.examples.number]));
test('ProductEndpointConnector#uploadImage', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'uploadImage', [variables.examples.string, variables.examples.string]));