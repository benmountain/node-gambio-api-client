import { noop } from '.';
import { variables } from './../values';
import { login } from './../fixtures';
import { RequestDispatcher } from './../../distribution/scripts';

/**
 * Performs a test to the constructor of an EndpointConnector instance.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} ClassToInstantiate Class to instantiate.
 */
function testEndpointConnectorConstructor(testSpec, ClassToInstantiate) {
  const requestDispatcher = new RequestDispatcher(login);

  testSpec.throws(() => new ClassToInstantiate(), Error, 'Throws error on missing parameter');
  testSpec.throws(() => new ClassToInstantiate(variables.examples.number), Error, 'Throws error on invalid parameter');
  testSpec.doesNotThrow(() => new ClassToInstantiate(requestDispatcher), Error, 'Does not throw error on valid parameter');
  testSpec.end();
}

/**
 * Performs a test to the create method of an EndpointConnector instance.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 */
function testEndpointConnectorCreateMethod(testSpec, instance) {
  testEndpointConnectorCustomMethodWithRequiredParameter(testSpec, instance, 'create', variables.empty.object);
}

/**
 * Performs a test to the delete method of an EndpointConnector instance.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 */
function testEndpointConnectorDeleteMethod(testSpec, instance) {
  testEndpointConnectorCustomMethodWithRequiredParameter(testSpec, instance, 'delete', variables.examples.number);
}

/**
 * Performs a test to the get method of an EndpointConnector instance.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 */
function testEndpointConnectorGetMethod(testSpec, instance) {
  testEndpointConnectorCustomMethodWithNoParameters(testSpec, instance, 'get');
}

/**
 * Performs a test to the getById method of an EndpointConnector instance.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 */
function testEndpointConnectorGetByIdMethod(testSpec, instance) {
  testEndpointConnectorCustomMethodWithRequiredParameter(testSpec, instance, 'getById', variables.examples.number);
}

/**
 * Performs a test to the search method of an EndpointConnector instance.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 */
function testEndpointConnectorSearchMethod(testSpec, instance) {
  testEndpointConnectorCustomMethodWithRequiredParameter(testSpec, instance, 'search', variables.examples.string);
}

/**
 * Performs a test to the update method of an EndpointConnector instance.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 */
function testEndpointConnectorUpdateMethod(testSpec, instance) {
  testEndpointConnectorCustomMethodWithMultipleParameters(testSpec, instance, 'update', [variables.examples.number, variables.empty.object]);
}

/**
 * Performs a test to a custom method of an EndpointConnector instance which accepts exactly 1 parameter.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 * @param {String} methodName Class method name.
 * @param {*} parameter Valid parameter.
 */
function testEndpointConnectorCustomMethodWithRequiredParameter(testSpec, instance, methodName, parameter) {
  testSpec.throws(() => instance[methodName]().catch(noop), Error, `Throws error on missing parameter`);
  testSpec.throws(() => instance[methodName](Function).catch(noop), Error, `Throws error on invalid parameter`);
  testSpec.doesNotThrow(() => instance[methodName](parameter).catch(noop), Error, `Does not throw error on valid parameter`);
  testSpec.ok(instance[methodName](parameter).catch(noop) instanceof Promise, 'Returns a promise');
  testSpec.end();
}

/**
 * Performs a test to a custom method of an EndpointConnector instance which does not require any parameter.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 * @param {String} methodName Class method name.
 */
function testEndpointConnectorCustomMethodWithNoParameters(testSpec, instance, methodName) {
  testSpec.doesNotThrow(() => instance[methodName]().catch(noop), Error, `Does not throw error on missing parameter`);
  testSpec.doesNotThrow(() => instance[methodName](Function).catch(noop), Error, 'Does not throw error on invalid parameter');
  testSpec.ok(instance[methodName]().catch(noop) instanceof Promise, 'Returns a promise');
  testSpec.end();
}

/**
 * Performs a test to a custom method of an EndpointConnector instance which requires multiple parameters.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 * @param {String} methodName Class method name.
 * @param {Array} parameters Valid parameters.
 */
function testEndpointConnectorCustomMethodWithMultipleParameters(testSpec, instance, methodName, parameters) {
  for (let iteration = 0; iteration < parameters.length; iteration++) {
    const missingParameters = parameters.slice(0, iteration);
    const invalidParameters = Array.of(...missingParameters, Function);

    testSpec.throws(() => instance[methodName](...missingParameters).catch(noop), Error, `Throws error on missing parameter number ${iteration}`);
    testSpec.throws(() => instance[methodName](...invalidParameters).catch(noop), Error, `Throws error on invalid parameter number ${iteration}`);
  }

  testSpec.doesNotThrow(() => instance[methodName](...parameters).catch(noop), Error, 'Does not throw error on valid parameters');
  testSpec.ok(instance[methodName](...parameters).catch(noop) instanceof Promise, 'Returns a promise');
  testSpec.end();
}

/**
 * Performs a test to a custom method of an RequestDispatcher instance which requires 2 parameters.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 * @param {String} methodName Class method name.
 */
function testRequestDispatcherCustomMethodWithRequiredDataParameter(testSpec, instance, methodName) {
  testSpec.throws(() => instance[methodName]().catch(noop), Error, `Throws error on missing parameters`);
  testSpec.throws(() => instance[methodName](Function).catch(noop), Error, 'Throws error on invalid parameter');
  testSpec.throws(() => instance[methodName](variables.examples.string).catch(noop), Error, 'Throws error on missing parameter number 1');
  testSpec.throws(() => instance[methodName](variables.examples.string, Function).catch(noop), Error, 'Throws error on invalid parameter number 1');
  testSpec.doesNotThrow(() => instance[methodName](variables.examples.string, variables.examples.object).catch(noop), Error, 'Does not throw error on valid parameters')
  testSpec.ok(instance[methodName](variables.examples.string, variables.examples.object).catch(noop) instanceof Promise, 'Returns a promise');
  testSpec.end();
}

/**
 * Performs a test to a custom method of an RequestDispatcher instance which does not requires the second parameter.
 * @param {Object} testSpec Tape spec parameter.
 * @param {Object} instance Class instance.
 * @param {String} methodName Class method name.
 */
function testRequestDispatcherCustomMethodWithOptionalDataParameter(testSpec, instance, methodName) {
  testSpec.throws(() => instance[methodName]().catch(noop), Error, `Throws error on missing parameters`);
  testSpec.throws(() => instance[methodName](Function).catch(noop), Error, 'Throws error on invalid parameter');
  testSpec.throws(() => instance[methodName](variables.examples.string, Function).catch(noop), Error, 'Throws error on invalid parameter number 1');
  testSpec.doesNotThrow(() => instance[methodName](variables.examples.string).catch(noop), Error, 'Does not throw error on missing parameter number 1');
  testSpec.doesNotThrow(() => instance[methodName](variables.examples.string, variables.examples.object).catch(noop), Error, 'Does not throw error on valid parameters')
  testSpec.ok(instance[methodName](variables.examples.string).catch(noop) instanceof Promise, 'Returns a promise');
  testSpec.end();
}

export {
  testEndpointConnectorConstructor,
  testEndpointConnectorCreateMethod,
  testEndpointConnectorDeleteMethod,
  testEndpointConnectorGetMethod,
  testEndpointConnectorGetByIdMethod,
  testEndpointConnectorSearchMethod,
  testEndpointConnectorUpdateMethod,
  testEndpointConnectorCustomMethodWithRequiredParameter,
  testEndpointConnectorCustomMethodWithNoParameters,
  testEndpointConnectorCustomMethodWithMultipleParameters,
  testRequestDispatcherCustomMethodWithRequiredDataParameter,
  testRequestDispatcherCustomMethodWithOptionalDataParameter,
};