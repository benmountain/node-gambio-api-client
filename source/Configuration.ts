/**
 * Provides client configuration values.
 */
class Configuration {
  /**
   * Current API version.
   * @type {Number}
   * @static
   */
  public static API_VERSION: number = 2;

  /**
   * Path to API controller.
   * @type {String}
   * @static
   */
  public static API_URL: string = `/api.php/v${Configuration.API_VERSION}`;
}

export { Configuration };
