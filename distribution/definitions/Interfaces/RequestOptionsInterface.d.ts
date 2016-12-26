import { RequestAuthOptionsInterface } from '.';
/**
 * Request options.
 * @interface RequestOptionsInterface
 */
interface RequestOptionsInterface {
    /**
     * Request headers.
     * @type {Object}
     */
    headers: {};
    /**
     * Request authentication options.
     * @type {RequestAuthOptionsInterface}
     */
    auth: RequestAuthOptionsInterface;
    /**
     * Convert request body to JSON string?
     * @type {Boolean}
     */
    json: boolean;
}
export { RequestOptionsInterface };
