/// <reference types="core-js" />
import { RequestDispatcher } from '.';
import { GetOptionsInterface, ResponseInterface } from './Interfaces';
/**
 * All endpoint connectors have to extend this class.
 * This class already implements repeating methods like for example `get()` and `create()`.
 * @abstract
 */
declare abstract class AbstractEndpointConnector {
    /**
     * Request dispatcher.
     * @type {RequestDispatcher}
     */
    protected requestDispatcher: RequestDispatcher;
    /**
     * Creates an instance of AbstractEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher instance.
     * @throws {Error} Parameter is missing or if it is not a request dispatcher.
     */
    constructor(requestDispatcher: RequestDispatcher);
    /**
     * Parses the GET request modifier options.
     * @param {GetOptionsInterface} [options] Get request modifiers.
     * @returns {Object} Parsed options as request body data object.
     */
    protected parseGetOptions(options?: GetOptionsInterface): {
        page?: number;
        per_page?: number;
        sort?: string;
        fields?: string;
    };
    /**
     * Creates a new entries of the endpoint resource.
     * @param {Object} data Entry data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid data parameter.
     */
    create(data: {}): Promise<ResponseInterface>;
    /**
     * Returns all entries of the endpoint resource.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise}
     */
    get(options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Returns an entry of the endpoint resource.
     * @param {Number} id Entry ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getById(id: number): Promise<ResponseInterface>;
    /**
     * Deletes an entry by its ID of the endpoint resource.
     * @param {Number} id Entry ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    delete(id: number): Promise<ResponseInterface>;
    /**
     * Searches the endpoint resource with the passed term.
     * @param {String} term Search term.
     * @returns {Promise}
     * @throws {Error} Missing or invalid search term parameter.
     */
    search(term: string): Promise<ResponseInterface>;
    /**
     * Updates an entry of the endpoint resource.
     * @param {number} id Entry ID.
     * @param {Object} data Entry data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     * @throws {Error} Missing or invalid data parameter.
     */
    update(id: number, data: {}): Promise<ResponseInterface>;
    /**
     * Returns the route for the respective endpoint.
     * @returns {String} Endpoint route.
     */
    abstract getRoute(): string;
}
export { AbstractEndpointConnector };
