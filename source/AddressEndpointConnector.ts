import { AbstractEndpointConnector } from '.';

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