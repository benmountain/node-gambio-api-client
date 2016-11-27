import { ClientOptionsInterface } from './Interfaces';

class Client {
  /**
   * Client version.
   * @type {String}
   */
  public static VERSION: string = '0.1.0';

  /**
   * Client options.
   * @type {ClientOptionsInterface}
   */
  private options: ClientOptionsInterface;

  /**
   * Creates an instance of Client.
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

    // Assign parameter as member.
    this.options = options;
  }
}

export { Client };
