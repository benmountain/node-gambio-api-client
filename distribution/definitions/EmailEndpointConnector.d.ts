/// <reference types="core-js" />
import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';
declare class EmailEndpointConnector extends AbstractEndpointConnector {
    /**
     * Email endpoint routes.
     * @type {Object}
     */
    private routes;
    /**
     * Returns the Email endpoint route.
     * @returns {String} Email endpoint route.
     */
    getRoute(): string;
    /**
     * Creates an instance of EmailEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    constructor(requestDispatcher: RequestDispatcher);
    /**
     * Deletes an Email by its ID.
     * @param {Number} id Email ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    delete(id: number): Promise<ResponseInterface>;
    /**
     * Returns all Emails.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    get(options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Returns an Email.
     * @param {Number} id Email ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getById(id: number): Promise<ResponseInterface>;
    /**
     * Returns all pending Emails.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    getPending(options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Searches the Emails with the passed term.
     * @param {String} term Search term.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid search term parameter.
     */
    search(term: string): Promise<ResponseInterface>;
    /**
     * Queues a new Email.
     * @param {Object} data Email data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    queue(data: {}): Promise<ResponseInterface>;
    /**
     * Sends a new Email.
     * @param {Object} data Email data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    send(data: {}): Promise<ResponseInterface>;
    /**
     * Sends an existing Email.
     * @param {Number} id Email ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    sendById(id: number): Promise<ResponseInterface>;
    /**
     * Uploads an Email attachment.
     * @param {String} filePath Path to file.
     * @param {String} fileName Desired file name.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid file path parameter.
     * @throws Will throw error on missing or invalid file name parameter.
     */
    uploadAttachment(filePath: string, fileName: string): Promise<ResponseInterface>;
}
export { EmailEndpointConnector };
