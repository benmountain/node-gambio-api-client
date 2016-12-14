/// <reference types="core-js" />
import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface } from './Interfaces';
declare class CountryEndpointConnector extends AbstractEndpointConnector {
    /**
     * Returns the country endpoint route.
     * @returns {String} Country endpoint route.
     */
    getRoute(): string;
    /**
     * Creates an instance of CountryEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    constructor(requestDispatcher: RequestDispatcher);
    /**
     * Returns a country.
     * @param {Number} id Country ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getById(id: number): Promise<ResponseInterface>;
    /**
     * Returns the zones for a country.
     * @param {Number} id Country ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getZonesByCountryId(id: number): Promise<ResponseInterface>;
}
export { CountryEndpointConnector };
