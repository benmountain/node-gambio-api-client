/// <reference types="core-js" />
import { AbstractEndpointConnector } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';
/**
 * Provides methods to perform requests to the shop's customer endpoint.
 * @extends {AbstractEndpointConnector}
 */
declare class CustomerEndpointConnector extends AbstractEndpointConnector {
    /**
     * Returns the customer endpoint route.
     * @returns {String} Customer endpoint route.
     */
    getRoute(): string;
    /**
     * Returns all customers, that are guests.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise}
     */
    getGuests(options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Returns the addresses of a customer.
     * @param {Number} id Customer ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getAddresses(id: number): Promise<ResponseInterface>;
}
export { CustomerEndpointConnector };
