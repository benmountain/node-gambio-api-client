import { ResponseInterface } from '.';

interface RequestDispatcherInterface {
  /**
   * Performs a HTTP GET request to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {Object} [data] Request data.
   * @returns {Promise} Request promise.
   */
  get(route: string, data?: {}): Promise<ResponseInterface>;

  /**
   * Performs a HTTP POST request to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {Object} data Request data.
   * @returns {Promise} Request promise.
   */
  post(route: string, data: {}): Promise<ResponseInterface>;

  /**
   * Performs a HTTP PUT request to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {Object} data Request data.
   * @returns {Promise} Request promise.
   */
  put(route: string, data: {}): Promise<ResponseInterface>;

  /**
   * Performs a HTTP DELETE request to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {Object} [data] Request data.
   * @returns {Promise} Request promise.
   */
  delete(route: string, data?: {}): Promise<ResponseInterface>;

  /**
   * Performs a file upload to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {String} filePath Path to file.
   * @param {String} [filePostFieldName] Post field name for the file.
   * @param {String} [fileNamePostFieldName] Post field name for the file name.
   * @returns {Promise} Request promise.
   */
  uploadFile(route: string, filePath: string, filePostFieldName?: string, fileNamePostFieldName?: string): Promise<ResponseInterface>;
}

export { RequestDispatcherInterface };
