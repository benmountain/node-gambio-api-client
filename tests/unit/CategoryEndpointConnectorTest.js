import test from 'tape';
import { CategoryEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/tests/helpers';
import { loginData, variables } from './../../tools/tests/values';

const instance = new CategoryEndpointConnector(new RequestDispatcher(loginData));

test('CategoryEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, CategoryEndpointConnector));
test('CategoryEndpointConnector#create', t => reusableTesters.testEndpointConnectorCreateMethod(t, instance));
test('CategoryEndpointConnector#delete', t => reusableTesters.testEndpointConnectorDeleteMethod(t, instance));
test('CategoryEndpointConnector#get', t => reusableTesters.testEndpointConnectorGetMethod(t, instance));
test('CategoryEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('CategoryEndpointConnector#search', t => reusableTesters.testEndpointConnectorSearchMethod(t, instance));
test('CategoryEndpointConnector#update', t => reusableTesters.testEndpointConnectorUpdateMethod(t, instance));
test('CategoryEndpointConnector#deleteIcon', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'deleteIcon', variables.strings.minimal));
test('CategoryEndpointConnector#deleteImage', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'deleteImage', variables.strings.minimal));
test('CategoryEndpointConnector#getChildrenById', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getChildrenById', variables.numbers.positive));
test('CategoryEndpointConnector#getIcons', t => reusableTesters.testEndpointConnectorCustomMethodWithNoParameters(t, instance, 'getIcons'));
test('CategoryEndpointConnector#renameIcon', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'renameIcon', [variables.strings.minimal, variables.strings.minimal]));
test('CategoryEndpointConnector#renameImage', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'renameImage', [variables.strings.minimal, variables.strings.minimal]));
test('CategoryEndpointConnector#uploadIcon', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'uploadIcon', [variables.strings.minimal, variables.strings.minimal]));
test('CategoryEndpointConnector#uploadImage', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'uploadImage', [variables.strings.minimal, variables.strings.minimal]));

