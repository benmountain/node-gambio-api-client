/**
 * Client instantiation options.
 * @interface ClientOptionsInterface
 */
interface ClientOptionsInterface {
    /**
     * Shop URL.
     * @type {String}
     */
    url: string;
    /**
     * Shop login user.
     * @type {String}
     */
    user: string;
    /**
     * Shop login password.
     * @type {String}
     */
    password: string;
}
export { ClientOptionsInterface };
