import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface } from './Interfaces';

/**
 * Provides methods to perform requests to the shop's country endpoint.
 * @extends {AbstractEndpointConnector}
 */
class CountryEndpointConnector extends AbstractEndpointConnector {
  /**
   * Returns the country endpoint route.
   * @returns {String} Country endpoint route.
   */
  public getRoute(): string {
    return '/countries';
  }

  /**
   * Returns the zones for a country.
   * @param {Number} id Country ID.
   * @returns {Promise}
   * @throws {Error} Missing or invalid ID parameter.
   */
  public getZonesByCountryId(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid country ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}/zones`);
  }
}

export { CountryEndpointConnector };
