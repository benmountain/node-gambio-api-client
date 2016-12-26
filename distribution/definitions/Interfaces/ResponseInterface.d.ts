import * as http from 'http';
/**
 * Request's response.
 * @interface ResponseInterface
 * @extends {http.IncomingMessage}
 */
interface ResponseInterface extends http.IncomingMessage {
    /**
     * Response status code.
     * @type {Number}
     */
    statusCode?: number;
    /**
     * Response body.
     * @type {Object|String}
     */
    body: {} | string;
}
export { ResponseInterface };
