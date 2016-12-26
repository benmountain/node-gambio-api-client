import { ClientOptionsInterface } from './Interfaces';
import { AddressEndpointConnector, CategoryEndpointConnector, CountryEndpointConnector, CustomerEndpointConnector, EmailEndpointConnector, OrderEndpointConnector, ProductEndpointConnector, ZoneEndpointConnector } from '.';
/**
 * Gambio REST-API client.
 * Entry point of the application.
 */
declare class Client {
    /**
     * Client version.
     * @type {String}
     */
    static VERSION: string;
    /**
     * Client options.
     * @type {ClientOptionsInterface}
     */
    private options;
    /**
     * Request dispatcher.
     * @type {RequestDispatcher}
     */
    private requestDispatcher;
    /**
     * Address endpoint connector.
     * @type {AddressEndpointConnector}
     */
    addresses: AddressEndpointConnector;
    /**
     * Category endpoint connector.
     * @type {AddressEndpointConnector}
     */
    categories: CategoryEndpointConnector;
    /**
     * Country endpoint connector.
     * @type {CountryEndpointConnector}
     */
    countries: CountryEndpointConnector;
    /**
     * Customer endpoint connector.
     * @type {CustomerEndpointConnector}
     */
    customers: CustomerEndpointConnector;
    /**
     * Email endpoint connector.
     * @type {EmailEndpointConnector}
     */
    emails: EmailEndpointConnector;
    /**
     * Order endpoint connector.
     * @type {OrderEndpointConnector}
     */
    orders: OrderEndpointConnector;
    /**
     * Product endpoint connector.
     * @type {ProductEndpointConnector}
     */
    products: ProductEndpointConnector;
    /**
     * Zone endpoint connector.
     * @type {ZoneEndpointConnector}
     */
    zones: ZoneEndpointConnector;
    /**
     * Creates an new client instance.
     * @throws {Error} Missing or invalid client options object.
     * @throws {Error} Missing or invalid shop URL.
     * @throws {Error} Missing or invalid shop user.
     * @throws {Error} Missing or invalid shop password.
     */
    constructor(options: ClientOptionsInterface);
}
export { Client };
