import { ResponseInterface } from '.';

interface ResponseHandlerInterface {
  /**
   * Handles the request's response and resolves/rejects a promise.
   * @param {Error|null} error Request error.
   * @param {ResponseInterface} response Request's response.
   */
  handle(error: Error | null, response: ResponseInterface): void;
}

export { ResponseHandlerInterface };