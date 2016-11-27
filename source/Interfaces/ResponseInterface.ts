interface ResponseInterface {
  /**
   * Response status code.
   * @type {Number}
   */
  statusCode: number;

  /**
   * Response body.
   * @type {Object|String}
   */
  body: {} | string;
}

export { ResponseInterface };