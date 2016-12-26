/// <reference types="core-js" />
import { AbstractEndpointConnector } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';
/**
 * Provides methods to perform requests to the shop's email endpoint.
 * @extends {AbstractEndpointConnector}
 */
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
     * Returns all pending Emails.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise}
     */
    getPending(options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Queues a new Email.
     * @param {Object} data Email data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid data parameter.
     */
    queue(data: {}): Promise<ResponseInterface>;
    /**
     * Sends a new Email.
     * @param {Object} data Email data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid data parameter.
     */
    send(data: {}): Promise<ResponseInterface>;
    /**
     * Sends an existing Email.
     * @param {Number} id Email ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    sendById(id: number): Promise<ResponseInterface>;
    /**
     * Uploads an Email attachment.
     * @param {String} filePath Path to file.
     * @param {String} fileName Desired file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
     */
    uploadAttachment(filePath: string, fileName: string): Promise<ResponseInterface>;
}
export { EmailEndpointConnector };
