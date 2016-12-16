import test from 'tape';
import { CountryEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/helpers';
import { login } from './../../tools/fixtures';
import { variables } from './../../tools/values';

const instance = new CountryEndpointConnector(new RequestDispatcher(login));

test('CountryEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, CountryEndpointConnector));
test('CountryEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('CountryEndpointConnector#deleteImage', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getZonesByCountryId', variables.examples.number));