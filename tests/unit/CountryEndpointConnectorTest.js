import test from 'tape';
import { CountryEndpointConnector, RequestDispatcher } from './../../distribution/scripts';
import { reusableTesters } from './../../tools/tests/helpers';
import { loginData, variables } from './../../tools/tests/values';

const instance = new CountryEndpointConnector(new RequestDispatcher(loginData));

test('CountryEndpointConnector#constructor', t => reusableTesters.testEndpointConnectorConstructor(t, CountryEndpointConnector));
test('CountryEndpointConnector#getById', t => reusableTesters.testEndpointConnectorGetByIdMethod(t, instance));
test('CountryEndpointConnector#deleteImage', t => reusableTesters.testEndpointConnectorCustomMethodWithRequiredParameter(t, instance, 'getZonesByCountryId', variables.numbers.positive));