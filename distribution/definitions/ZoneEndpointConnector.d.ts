import { AbstractEndpointConnector } from '.';
/**
 * Provides methods to perform requests to the shop's zone endpoint.
 * @extends {AbstractEndpointConnector}
 */
declare class ZoneEndpointConnector extends AbstractEndpointConnector {
    /**
     * Returns the zone endpoint route.
     * @returns {String} Zone endpoint route.
     */
    getRoute(): string;
}
export { ZoneEndpointConnector };
