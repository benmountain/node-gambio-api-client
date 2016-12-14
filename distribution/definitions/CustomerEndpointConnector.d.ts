/// <reference types="core-js" />
import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';
declare class CustomerEndpointConnector extends AbstractEndpointConnector {
    /**
     * Returns the customer endpoint route.
     * @returns {String} Customer endpoint route.
     */
    getRoute(): string;
    /**
     * Creates an instance of CustomerEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    constructor(requestDispatcher: RequestDispatcher);
    /**
     * Creates a new customer.
     * @param {Object} data Customer data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    create(data: {}): Promise<ResponseInterface>;
    /**
     * Deletes a customer by its ID.
     * @param {Number} id Customer ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    delete(id: number): Promise<ResponseInterface>;
    /**
     * Returns all customers.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    get(options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Returns all customers, that are guests.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    getGuests(options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Returns a customer.
     * @param {Number} id Customer ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getById(id: number): Promise<ResponseInterface>;
    /**
     * Returns the addresses of a customer.
     * @param {Number} id Customer ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getAddressesByCustomerId(id: number): Promise<ResponseInterface>;
    /**
     * Searches the customers with the passed term.
     * @param {String} term Search term.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid search term parameter.
     */
    search(term: string): Promise<ResponseInterface>;
    /**
     * Updates a customer.
     * @param {number} id Customer ID.
     * @param {Object} data Customer data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     * @throws Will throw error on missing or invalid data parameter.
     */
    update(id: number, data: {}): Promise<ResponseInterface>;
}
export { CustomerEndpointConnector };
