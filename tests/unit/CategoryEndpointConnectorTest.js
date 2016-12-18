import test from 'tape';
import { CategoryEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/helpers';
import { login } from './../../tools/fixtures';
import { variables } from './../../tools/values';

const instance = new CategoryEndpointConnector(new RequestDispatcher(login));

test('CategoryEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, CategoryEndpointConnector));
test('CategoryEndpointConnector#create', t => reusableTesters.testEndpointConnectorCreateMethod(t, instance));
test('CategoryEndpointConnector#delete', t => reusableTesters.testEndpointConnectorDeleteMethod(t, instance));
test('CategoryEndpointConnector#get', t => reusableTesters.testEndpointConnectorGetMethod(t, instance));
test('CategoryEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('CategoryEndpointConnector#search', t => reusableTesters.testEndpointConnectorSearchMethod(t, instance));
test('CategoryEndpointConnector#update', t => reusableTesters.testEndpointConnectorUpdateMethod(t, instance));
test('CategoryEndpointConnector#deleteIcon', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'deleteIcon', variables.examples.string));
test('CategoryEndpointConnector#deleteImage', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'deleteImage', variables.examples.string));
test('CategoryEndpointConnector#getChild', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getChild', variables.examples.number));
test('CategoryEndpointConnector#getIcons', t => reusableTesters.testEndpointConnectorCustomMethodWithNoParameters(t, instance, 'getIcons'));
test('CategoryEndpointConnector#renameIcon', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'renameIcon', [variables.examples.string, variables.examples.string]));
test('CategoryEndpointConnector#renameImage', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'renameImage', [variables.examples.string, variables.examples.string]));
test('CategoryEndpointConnector#uploadIcon', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'uploadIcon', [variables.examples.string, variables.examples.string]));
test('CategoryEndpointConnector#uploadImage', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'uploadImage', [variables.examples.string, variables.examples.string]));

