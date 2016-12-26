/// <reference types="core-js" />
import { AbstractEndpointConnector } from '.';
import { ResponseInterface } from './Interfaces';
/**
 * Provides methods to perform requests to the shop's country endpoint.
 * @extends {AbstractEndpointConnector}
 */
declare class CountryEndpointConnector extends AbstractEndpointConnector {
    /**
     * Returns the country endpoint route.
     * @returns {String} Country endpoint route.
     */
    getRoute(): string;
    /**
     * Returns the zones for a country.
     * @param {Number} id Country ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getZonesByCountryId(id: number): Promise<ResponseInterface>;
}
export { CountryEndpointConnector };
