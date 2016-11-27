import { RequestAuthOptionsInterface } from '.';

interface RequestOptionsInterface {
  /**
   * Request headers.
   * @type {Object}
   */
  headers: {};

  /**
   * Request authentication.
   * @type {RequestAuthOptionsInterface}
   */
  auth: RequestAuthOptionsInterface;

  /**
   * Convert request body to JSON string?
   * @type {Boolean}
   */
  json: boolean;
}

export { RequestOptionsInterface };
