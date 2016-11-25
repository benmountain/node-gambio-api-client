import { RequestOptionsAuthInterface, ClientOptionsInterface, RequestDispatcherInterface } from './Interfaces';
import { Configuration } from '.';

class RequestDispatcher implements RequestDispatcherInterface {
  // Request headers.
  private headers = {
    'User-Agent': 'Node API client'
  };

  // Request authentication.
  private auth: RequestOptionsAuthInterface;

  // API URL.
  private url: string;

  /**
   * Creates an instance of RequestDispatcher.
   */
  constructor(options: ClientOptionsInterface) {
    // Check parameter.
    if (!options || typeof options !== 'object') {
      throw new Error('Missing or invalid client options');
    }

    // Check URL.
    if (!options.url || typeof options.url !== 'string') {
      throw new Error('Missing or invalid shop URL');
    }

    // Check user.
    if (!options.user || typeof options.user !== 'string') {
      throw new Error('Missing or invalid shop user');
    }

    // Check password.
    if (!options.password || typeof options.password !== 'string') {
      throw new Error('Missing or invalid shop password');
    }

    // Assign auth property.
    this.auth = {
      user: options.user,
      pass: options.password,
    };

    // Assign URL property.
    this.url = options.url + Configuration.API_URL;
  }

  /**
   * Returns the default request parameters.
   * @returns {Object} Default request parameters.
   */
  private getDefaultRequestParameters() : {headers: {}, auth: RequestOptionsAuthInterface, url: string} {
    return {
      headers: this.headers,
      auth: this.auth,
      url: this.url,
    };
  }

  /**
   * Performs a HTTP GET request to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {Object} data Request data.
   * @throws Will throw an error if the request route is empty or not a string.
   * @throws Will throw an error if the data object is empty or not an object.
   * @returns {Promise} Request promise.
   *
   * @todo Implement.
   */
  public get(route: string, data: {}) {
    // Check URL parameter.
    if (!route || typeof route !== 'string') {
      throw new Error('Missing or invalid request URL');
    }

    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid request data');
    }
  }
}

export { RequestDispatcher };
