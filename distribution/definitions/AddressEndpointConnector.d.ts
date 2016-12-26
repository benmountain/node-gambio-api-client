import { AbstractEndpointConnector } from '.';
/**
 * Provides methods to perform requests to the shop's address endpoint.
 * @extends {AbstractEndpointConnector}
 */
declare class AddressEndpointConnector extends AbstractEndpointConnector {
    /**
     * Returns the address endpoint route.
     * @returns {String} Address endpoint route.
     */
    getRoute(): string;
}
export { AddressEndpointConnector };
