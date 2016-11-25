class Configuration {
  // Current API version.
  public static API_VERSION: number = 2;

  // Path to API controller.
  public static API_URL: string = `/api.php/v${Configuration.API_VERSION}`;
}

export { Configuration };
