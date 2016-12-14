"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require('.');
var CustomerEndpointConnector = (function (_super) {
    __extends(CustomerEndpointConnector, _super);
    /**
     * Creates an instance of CustomerEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    function CustomerEndpointConnector(requestDispatcher) {
        _super.call(this, requestDispatcher);
    }
    /**
     * Returns the customer endpoint route.
     * @returns {String} Customer endpoint route.
     */
    CustomerEndpointConnector.prototype.getRoute = function () {
        return '/customers';
    };
    /**
     * Creates a new customer.
     * @param {Object} data Customer data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    CustomerEndpointConnector.prototype.create = function (data) {
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid customer data');
        }
        // Perform request.
        return this.requestDispatcher.post(this.getRoute(), data);
    };
    /**
     * Deletes a customer by its ID.
     * @param {Number} id Customer ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    CustomerEndpointConnector.prototype.delete = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid customer ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.getRoute() + "/" + id);
    };
    /**
     * Returns all customers.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    CustomerEndpointConnector.prototype.get = function (options) {
        return this.requestDispatcher.get(this.getRoute(), this.parseGetOptions(options));
    };
    /**
     * Returns all customers, that are guests.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    CustomerEndpointConnector.prototype.getGuests = function (options) {
        return this.requestDispatcher.get(this.getRoute(), Object.assign({}, this.parseGetOptions(options), { type: 'guests' }));
    };
    /**
     * Returns a customer.
     * @param {Number} id Customer ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    CustomerEndpointConnector.prototype.getById = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid customer ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id);
    };
    /**
     * Returns the addresses of a customer.
     * @param {Number} id Customer ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    CustomerEndpointConnector.prototype.getAddressesByCustomerId = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid customer ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id + "/addresses");
    };
    /**
     * Searches the customers with the passed term.
     * @param {String} term Search term.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid search term parameter.
     */
    CustomerEndpointConnector.prototype.search = function (term) {
        // Check search term parameter.
        if (!term || typeof term !== 'string') {
            throw new Error('Missing or invalid search term');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute(), { q: term });
    };
    /**
     * Updates a customer.
     * @param {number} id Customer ID.
     * @param {Object} data Customer data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     * @throws Will throw error on missing or invalid data parameter.
     */
    CustomerEndpointConnector.prototype.update = function (id, data) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid customer ID');
        }
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid customer data');
        }
        // Perform request.
        return this.requestDispatcher.put(this.getRoute() + "/" + id, data);
    };
    return CustomerEndpointConnector;
}(_1.AbstractEndpointConnector));
exports.CustomerEndpointConnector = CustomerEndpointConnector;
