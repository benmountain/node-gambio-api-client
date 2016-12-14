import test from 'tape';
import { OrderEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/tests/helpers';
import { loginData, variables } from './../../tools/tests/values';

const instance = new OrderEndpointConnector(new RequestDispatcher(loginData));

test('OrderEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, OrderEndpointConnector));
test('OrderEndpointConnector#createItemAttribute', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'createItemAttribute', [variables.numbers.positive, variables.numbers.positive, variables.objects.empty]));
test('OrderEndpointConnector#createItem', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'createItem', [variables.numbers.positive, variables.objects.empty]));
test('OrderEndpointConnector#createTotal', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'createTotal', [variables.numbers.positive, variables.objects.empty]));
test('OrderEndpointConnector#create', t => reusableTesters.testEndpointConnectorCreateMethod(t, instance));
test('OrderEndpointConnector#deleteItemAttribute', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'deleteItemAttribute', [variables.numbers.positive, variables.numbers.positive, variables.numbers.positive]));
test('OrderEndpointConnector#deleteItemProperty', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'deleteItemProperty', [variables.numbers.positive, variables.numbers.positive, variables.numbers.positive]));
test('OrderEndpointConnector#deleteTotal', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'deleteTotal', [variables.numbers.positive, variables.numbers.positive]));
test('OrderEndpointConnector#delete', t => reusableTesters.testEndpointConnectorDeleteMethod(t, instance));
test('OrderEndpointConnector#getHistory', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getHistory', variables.numbers.positive));
test('OrderEndpointConnector#getHistoryById', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getHistoryById', [variables.numbers.positive, variables.numbers.positive]));
test('OrderEndpointConnector#getItemAttributes', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getItemAttributes', [variables.numbers.positive, variables.numbers.positive]));
test('OrderEndpointConnector#getItemProperties', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getItemProperties', [variables.numbers.positive, variables.numbers.positive]));
test('OrderEndpointConnector#getItemAttributeById', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getItemAttributeById', [variables.numbers.positive, variables.numbers.positive, variables.numbers.positive]));
test('OrderEndpointConnector#getItemPropertyById', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getItemPropertyById', [variables.numbers.positive, variables.numbers.positive, variables.numbers.positive]));
test('OrderEndpointConnector#getItems', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getItems', variables.numbers.positive));
test('OrderEndpointConnector#getItemById', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getItemById', [variables.numbers.positive, variables.numbers.positive]));
test('OrderEndpointConnector#getTotals', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getTotals', variables.numbers.positive));
test('OrderEndpointConnector#getTotalById', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'getTotalById', [variables.numbers.positive, variables.numbers.positive]));
test('OrderEndpointConnector#get', t => reusableTesters.testEndpointConnectorGetMethod(t, instance));
test('OrderEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('OrderEndpointConnector#search', t => reusableTesters.testEndpointConnectorSearchMethod(t, instance));
