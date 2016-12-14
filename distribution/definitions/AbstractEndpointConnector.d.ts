import { RequestDispatcher } from '.';
import { GetOptionsInterface } from './Interfaces';
declare abstract class AbstractEndpointConnector {
    /**
     * Request dispatcher.
     * @type {RequestDispatcher}
     */
    protected requestDispatcher: RequestDispatcher;
    /**
     * Creates an instance of AbstractEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher instance.
     * @throws Will throw an error if the parameter is missing or if it is not a request dispatcher.
     */
    constructor(requestDispatcher: RequestDispatcher);
    /**
     * Parses the GET request modifier options.
     * @param {GetOptionsInterface} [options] Get request modifiers.
     * @returns {Object} Parsed options as request body data object.
     */
    protected parseGetOptions(options?: GetOptionsInterface): {
        page?: number;
        per_page?: number;
        sort?: string;
        fields?: string;
    };
    /**
     * Returns the route for the respective endpoint.
     * @returns {String} Endpoint route.
     */
    abstract getRoute(): string;
}
export { AbstractEndpointConnector };
