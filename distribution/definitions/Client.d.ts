import { ClientOptionsInterface } from './Interfaces';
import { AddressEndpointConnector, CategoryEndpointConnector, CountryEndpointConnector, CustomerEndpointConnector, EmailEndpointConnector, OrderEndpointConnector } from '.';
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
     * Creates an instance of Client.
     */
    constructor(options: ClientOptionsInterface);
}
export { Client };
