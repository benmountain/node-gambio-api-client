import { RequestDispatcher } from '.';

abstract class AbstractEndpointConnector {
  /**
   * Request dispatcher.
   * @type {RequestDispatcher}
   */
  private requestDispatcher: RequestDispatcher;

  /**
   * Creates an instance of AbstractEndpointConnector.
   * @param {RequestDispatcher} requestDispatcher Request dispatcher instance.
   * @throws Will throw an error if the parameter is missing or if it is not a request dispatcher.
   */
  constructor(requestDispatcher: RequestDispatcher) {
    // Check request dispatcher parameter.
    if (!requestDispatcher || !(requestDispatcher instanceof RequestDispatcher)) {
      throw new Error('Missing or invalid request dispatcher parameter');
    }

    // Assign passed parameter as property.
    this.requestDispatcher = requestDispatcher;
  }

  /**
   * Returns the route for the respective endpoint.
   * @returns {String} Endpoint route.
   */
  abstract getRoute(): string;
}

export { AbstractEndpointConnector };