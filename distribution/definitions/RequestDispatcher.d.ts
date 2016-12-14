/// <reference types="core-js" />
import 'core-js/shim';
import { ClientOptionsInterface, RequestDispatcherInterface, ResponseInterface } from './Interfaces';
declare class RequestDispatcher implements RequestDispatcherInterface {
    /**
     * Request headers.
     * @type {Object}
     */
    private headers;
    /**
     * Request authentication.
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
     * @returns {Promise} Request promise.
     */
    private performRequest(route, method, data?, hasFormData?);
    /**
     * Performs a HTTP GET request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} [data] Request data.
     * @throws Will throw an error if the request route is empty or not a string.
     * @throws Will throw an error if the data object is not an object.
     * @returns {Promise} Request promise.
     */
    get(route: string, data?: {}): Promise<ResponseInterface>;
    /**
     * Performs a HTTP POST request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} data Request data.
     * @throws Will throw an error if the request route is empty or not a string.
     * @throws Will throw an error if the data object is not an object.
     * @returns {Promise} Request promise.
     */
    post(route: string, data: {}): Promise<ResponseInterface>;
    /**
     * Performs a HTTP PUT request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} data Request data.
     * @throws Will throw an error if the request route is empty or not a string.
     * @throws Will throw an error if the data object is not an object.
     * @returns {Promise} Request promise.
     */
    put(route: string, data: {}): Promise<ResponseInterface>;
    /**
     * Performs a HTTP DELETE request to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {Object} [data] Request data.
     * @throws Will throw an error if the request route is empty or not a string.
     * @throws Will throw an error if the data object is not an object.
     * @returns {Promise} Request promise.
     */
    delete(route: string, data?: {}): Promise<ResponseInterface>;
    /**
     * Performs a file upload to a specific endpoint and returns a promise.
     * @param {String} route Endpoint route to perform the request to.
     * @param {String} filePath Path to file.
     * @param {String} fileName File name.
     * @param {String} [filePostFieldName] Post field name for the file.
     * @param {String} [fileNamePostFieldName] Post field name for the file name.
     * @throws Will throw an error if the request route is empty or not a string.
     * @throws Will throw an error if the file path is empty or not a string.
     * @throws Will throw an error if the file name is empty or not a string.
     * @throws Will throw an error if the file post field name not a string.
     * @throws Will throw an error if the file name post field name not a string.
     * @returns {Promise} Request promise.
     */
    uploadFile(route: string, filePath: string, fileName: string, filePostFieldName?: string, fileNamePostFieldName?: string): Promise<ResponseInterface>;
}
export { RequestDispatcher };
