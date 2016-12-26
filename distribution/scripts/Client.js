"use strict";
var _1 = require(".");
/**
 * Gambio REST-API client.
 * Entry point of the application.
 */
var Client = (function () {
    /**
     * Creates an new client instance.
     * @throws {Error} Missing or invalid client options object.
     * @throws {Error} Missing or invalid shop URL.
     * @throws {Error} Missing or invalid shop user.
     * @throws {Error} Missing or invalid shop password.
     */
    function Client(options) {
        // Check parameter.
        if (!options || typeof options !== 'object') {
            throw new Error('Missing or invalid client options');
        }
        // Check URL.
        if (!options.url || typeof options.url !== 'string') {
            throw new Error('Missing or invalid shop URL');
        }
        // Check user.
        if (!options.user || typeof options.user !== 'string') {
            throw new Error('Missing or invalid shop user');
        }
        // Check password.
        if (!options.password || typeof options.password !== 'string') {
            throw new Error('Missing or invalid shop password');
        }
        // Assign parameter as property.
        this.options = options;
        // Set request dispatcher as property.
        this.requestDispatcher = new _1.RequestDispatcher(this.options);
        // Set endpoint connectors as properties.
        this.addresses = new _1.AddressEndpointConnector(this.requestDispatcher);
        this.categories = new _1.CategoryEndpointConnector(this.requestDispatcher);
        this.countries = new _1.CountryEndpointConnector(this.requestDispatcher);
        this.customers = new _1.CustomerEndpointConnector(this.requestDispatcher);
        this.emails = new _1.EmailEndpointConnector(this.requestDispatcher);
        this.orders = new _1.OrderEndpointConnector(this.requestDispatcher);
        this.products = new _1.ProductEndpointConnector(this.requestDispatcher);
        this.zones = new _1.ZoneEndpointConnector(this.requestDispatcher);
    }
    return Client;
}());
/**
 * Client version.
 * @type {String}
 */
Client.VERSION = '0.1.0';
exports.Client = Client;
