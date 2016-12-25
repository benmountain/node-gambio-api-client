import { AbstractEndpointConnector, RequestDispatcher } from '.';

/**
 * Provides methods to perform requests to the shop's address endpoint.
 * @extends {AbstractEndpointConnector}
 */
class AddressEndpointConnector extends AbstractEndpointConnector {
  /**
   * Returns the address endpoint route.
   * @returns {String} Address endpoint route.
   */
  public getRoute(): string {
    return '/addresses';
  }
}

export { AddressEndpointConnector };
