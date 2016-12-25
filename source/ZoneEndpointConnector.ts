import { AbstractEndpointConnector } from '.';

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
