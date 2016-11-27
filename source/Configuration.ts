class Configuration {
  /**
   * Current API version.
   * @type {Number}
   */
  public static API_VERSION: number = 2;

  /**
   * Path to API controller.
   * @type {String}
   */
  public static API_URL: string = `/api.php/v${Configuration.API_VERSION}`;
}

export { Configuration };
