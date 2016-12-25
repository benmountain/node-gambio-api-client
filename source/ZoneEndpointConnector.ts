import { AbstractEndpointConnector } from '.';

/**
 * Provides methods to perform requests to the shop's zone endpoint.
 * @extends {AbstractEndpointConnector}
 */
class ZoneEndpointConnector extends AbstractEndpointConnector {
  /**
   * Returns the zone endpoint route.
   * @returns {String} Zone endpoint route.
   */
  public getRoute(): string {
    return '/zones';
  }
}

export { ZoneEndpointConnector };
