/// <reference types="core-js" />
import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';
declare class AddressEndpointConnector extends AbstractEndpointConnector {
    /**
     * Returns the address endpoint route.
     * @returns {String} Address endpoint route.
     */
    getRoute(): string;
    /**
     * Creates an instance of AddressEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    constructor(requestDispatcher: RequestDispatcher);
    /**
     * Creates a new address.
     * @param {Object} data Address data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    create(data: {}): Promise<ResponseInterface>;
    /**
     * Deletes an address by its ID.
     * @param {Number} id Address ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    delete(id: number): Promise<ResponseInterface>;
    /**
     * Returns all addresses.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    get(options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Returns an address.
     * @param {Number} id Address ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getById(id: number): Promise<ResponseInterface>;
    /**
     * Searches the address with the passed term.
     * @param {String} term Search term.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid search term parameter.
     */
    search(term: string): Promise<ResponseInterface>;
    /**
     * Updates an address.
     * @param {number} id Address ID.
     * @param {Object} data Address data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     * @throws Will throw error on missing or invalid data parameter.
     */
    update(id: number, data: {}): Promise<ResponseInterface>;
}
export { AddressEndpointConnector };
