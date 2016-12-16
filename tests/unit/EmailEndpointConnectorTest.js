import test from 'tape';
import { EmailEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/helpers';
import { login } from './../../tools/fixtures';
import { variables } from './../../tools/values';

const instance = new EmailEndpointConnector(new RequestDispatcher(login));

test('EmailEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, EmailEndpointConnector));
test('EmailEndpointConnector#delete', t => reusableTesters.testEndpointConnectorDeleteMethod(t, instance));
test('EmailEndpointConnector#get', t => reusableTesters.testEndpointConnectorGetMethod(t, instance));
test('EmailEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('EmailEndpointConnector#getPending', t => reusableTesters.testEndpointConnectorCustomMethodWithNoParameters(t, instance, 'getPending'));
test('EmailEndpointConnector#search', t => reusableTesters.testEndpointConnectorSearchMethod(t, instance));
test('EmailEndpointConnector#queue', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'queue', variables.empty.object));
test('EmailEndpointConnector#send', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'send', variables.empty.object));
test('EmailEndpointConnector#sendById', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'sendById', variables.examples.number));
test('EmailEndpointConnector#uploadAttachment', t => reusableTesters.testEndpointConnectorCustomMethodWithMultipleParameters(t, instance, 'uploadAttachment', [variables.examples.string, variables.examples.string]));
