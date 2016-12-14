import test from 'tape';
import { EmailEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/tests/helpers';
import { loginData, variables } from './../../tools/tests/values';

const instance = new EmailEndpointConnector(new RequestDispatcher(loginData));

test('EmailEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, EmailEndpointConnector));
test('EmailEndpointConnector#delete', t => reusableTesters.testEndpointConnectorDeleteMethod(t, instance));
test('EmailEndpointConnector#get', t => reusableTesters.testEndpointConnectorGetMethod(t, instance));
test('EmailEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('EmailEndpointConnector#getPending', t => reusableTesters.testEndpointConnectorCustomMethodWithNoParameters(t, instance, 'getPending'));
test('EmailEndpointConnector#search', t => reusableTesters.testEndpointConnectorSearchMethod(t, instance));
test('EmailEndpointConnector#queue', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'queue', variables.objects.empty));
test('EmailEndpointConnector#send', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'send', variables.objects.empty));
test('EmailEndpointConnector#sendById', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'sendById', variables.numbers.positive));
test('EmailEndpointConnector#uploadAttachment', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'uploadAttachment', [variables.strings.minimal, variables.strings.minimal]));
