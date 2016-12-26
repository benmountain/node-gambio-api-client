/// <reference types="core-js" />
import 'core-js/shim';
import { ClientOptionsInterface, RequestDispatcherInterface, ResponseInterface } from './Interfaces';
/**
 * Performs requests to the shop's endpoints.
 * @implements {RequestDispatcherInterface}
 */
declare class RequestDispatcher implements RequestDispatcherInterface {
    /**
     * Default request headers.
     * @type {Object}
     */
    private headers;
    /**
     * Request authentication options.
     * @type {RequestAuthOptionsInterface}
     */
    private auth;
    /**
     * API URL.
     * @type {String}
     */
    private url;
    /**
     * Creates an instance of RequestDispatcher.
     * @throws {Error} Missing or invalid client options.
     * @throws {Error} Missing or invalid shop URL.
     * @throws {Error} Missing or invalid shop user.
     * @throws {Error} Missing or invalid shop password.
     */
    constructor(options: ClientOptionsInterface);
    /**
     * Returns the default request parameters.
     * @returns {Object} Default request parameters.
     */
    private getDefaultRequestParameters();
    /**
     * Performs an HTTP request to a specific endpoint using the request library.
     * @param {String} route Endpoint route.
     * @param {HttpMethodsEnum} method HTTP request method.
     * @param {Object} [data] Request data.
     * @param {Boolean} [hasFormData] Is the data object a form data object?
     * @returns {Promise}
     */
    private performRequest(route, method, data?, hasFormData?);
    /**
     * Performs a HTTP GET request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} [data] Request data.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} Data object is not an object.
     * @returns {Promise}
     */
    get(route: string, data?: {}): Promise<ResponseInterface>;
    /**
     * Performs a HTTP POST request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} data Request data.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} Data object is not an object.
     * @returns {Promise}
     */
    post(route: string, data: {}): Promise<ResponseInterface>;
    /**
     * Performs a HTTP PUT request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} data Request data.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} Data object is not an object.
     * @returns {Promise}
     */
    put(route: string, data: {}): Promise<ResponseInterface>;
    /**
     * Performs a HTTP PATCH request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} data Request data.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} Data object is not an object.
     * @returns {Promise}
     */
    patch(route: string, data: {}): Promise<ResponseInterface>;
    /**
     * Performs a HTTP DELETE request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} [data] Request data.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} Data object is not an object.
     * @returns {Promise}
     */
    delete(route: string, data?: {}): Promise<ResponseInterface>;
    /**
     * Performs a file upload to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {String} filePath Path to file.
     * @param {String} fileName File name.
     * @param {String} [filePostFieldName] Post field name for the file.
     * @param {String} [fileNamePostFieldName] Post field name for the file name.
     * @throws {Error} Request route is empty or not a string.
     * @throws {Error} File path is empty or not a string.
     * @throws {Error} File name is empty or not a string.
     * @throws {Error} File post field name not a string.
     * @throws {Error} File name post field name not a string.
     * @returns {Promise}
     */
    uploadFile(route: string, filePath: string, fileName: string, filePostFieldName?: string, fileNamePostFieldName?: string): Promise<ResponseInterface>;
}
export { RequestDispatcher };
