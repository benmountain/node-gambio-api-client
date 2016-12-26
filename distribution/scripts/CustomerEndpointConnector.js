"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require(".");
/**
 * Provides methods to perform requests to the shop's customer endpoint.
 * @extends {AbstractEndpointConnector}
 */
var CustomerEndpointConnector = (function (_super) {
    __extends(CustomerEndpointConnector, _super);
    function CustomerEndpointConnector() {
        return _super.apply(this, arguments) || this;
    }
    /**
     * Returns the customer endpoint route.
     * @returns {String} Customer endpoint route.
     */
    CustomerEndpointConnector.prototype.getRoute = function () {
        return '/customers';
    };
    /**
     * Returns all customers, that are guests.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise}
     */
    CustomerEndpointConnector.prototype.getGuests = function (options) {
        return this.requestDispatcher.get(this.getRoute(), Object.assign({}, this.parseGetOptions(options), { type: 'guests' }));
    };
    /**
     * Returns the addresses of a customer.
     * @param {Number} id Customer ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    CustomerEndpointConnector.prototype.getAddresses = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid customer ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id + "/addresses");
    };
    return CustomerEndpointConnector;
}(_1.AbstractEndpointConnector));
exports.CustomerEndpointConnector = CustomerEndpointConnector;
