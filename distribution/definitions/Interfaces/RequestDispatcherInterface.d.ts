/// <reference types="core-js" />
import { ResponseInterface } from '.';
/**
 * Request dispatcher blueprint.
 * @interface RequestDispatcherInterface
 */
interface RequestDispatcherInterface {
    /**
     * Performs a HTTP GET request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} [data] Request data.
     * @returns {Promise}
     */
    get(route: string, data?: {}): Promise<ResponseInterface>;
    /**
     * Performs a HTTP POST request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} data Request data.
     * @returns {Promise}
     */
    post(route: string, data: {}): Promise<ResponseInterface>;
    /**
     * Performs a HTTP PUT request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} data Request data.
     * @returns {Promise}
     */
    put(route: string, data: {}): Promise<ResponseInterface>;
    /**
     * Performs a HTTP DELETE request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} [data] Request data.
     * @returns {Promise}
     */
    delete(route: string, data?: {}): Promise<ResponseInterface>;
    /**
     * Performs a file upload to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {String} filePath Path to file.
     * @param {String} [filePostFieldName] Post field name for the file.
     * @param {String} [fileNamePostFieldName] Post field name for the file name.
     * @returns {Promise}
     */
    uploadFile(route: string, filePath: string, filePostFieldName?: string, fileNamePostFieldName?: string): Promise<ResponseInterface>;
}
export { RequestDispatcherInterface };
