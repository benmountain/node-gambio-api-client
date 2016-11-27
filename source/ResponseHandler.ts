import { ResponseHandlerInterface, ResponseInterface } from './Interfaces';

class ResponseHandler implements ResponseHandlerInterface {
  /**
   * Request promise resolve function.
   * @type {Function}
   */
  private resolveFunction: Function;

  /**
   * Request promise reject function.
   * @type {Function}
   */
  private rejectFunction: Function;

  /**
   * Creates an instance of ResponseHandler.
   * @param {Function} resolveFunction Promise' resolve function.
   * @param {Function} rejectFunction Promise' reject function.
   */
  constructor(resolveFunction: Function, rejectFunction: Function) {
    // Check resolve function parameter.
    if (!resolveFunction || typeof resolveFunction !== 'function') {
      throw new Error('Missing or invalid promise resolve function');
    }

    // Check reject function parameter.
    if (!rejectFunction || typeof rejectFunction !== 'function') {
      throw new Error('Missing or invalid promise reject function');
    }

    // Assign promise functions as properties.
    this.resolveFunction = resolveFunction;
    this.rejectFunction = rejectFunction;
  }

  /**
   * Handles the request's response.
   * @param {Error|null} error Request error.
   * @param {ResponseInterface} response Request's response.
   * @throws Will throw the request error, if exists.
   * @throws Will throw an error if the response parameter is missing.
   */
  public handle(error: Error | null, response: ResponseInterface): void {
    // Reject promise with the error parameter, if defined.
    if (error) {
      this.rejectFunction(error);
      return;
    }

    // Reject promise with the response body, if the status code is not ok.
    if (response.statusCode < 200 || response.statusCode > 299) {
      this.rejectFunction(response.body);
      return;
    }

    // Resolve promise with the response body as object.
    this.resolveFunction(typeof response.body === 'string' ? JSON.parse(response.body) : response.body);
  }
}

export { ResponseHandler };