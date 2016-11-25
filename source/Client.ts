class Client {
  /**
   * Client version.
   * @static
   */
  public static VERSION: string = '0.1.0';

  /**
   * Client options.
   * @private
   * @type {ClientOptions}
   */
  private options: ClientOptions;

  /**
   * Creates an instance of Client.
   * @param {ClientOptions} options
   */
  constructor(options: ClientOptions) {
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

    // Assign parameter as member.
    this.options = options;
  }
}

export { Client };