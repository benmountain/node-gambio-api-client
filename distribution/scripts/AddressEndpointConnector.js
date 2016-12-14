"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require('.');
var AddressEndpointConnector = (function (_super) {
    __extends(AddressEndpointConnector, _super);
    /**
     * Creates an instance of AddressEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    function AddressEndpointConnector(requestDispatcher) {
        _super.call(this, requestDispatcher);
    }
    /**
     * Returns the address endpoint route.
     * @returns {String} Address endpoint route.
     */
    AddressEndpointConnector.prototype.getRoute = function () {
        return '/addresses';
    };
    /**
     * Creates a new address.
     * @param {Object} data Address data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    AddressEndpointConnector.prototype.create = function (data) {
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid address data');
        }
        // Perform request.
        return this.requestDispatcher.post(this.getRoute(), data);
    };
    /**
     * Deletes an address by its ID.
     * @param {Number} id Address ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    AddressEndpointConnector.prototype.delete = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid address ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.getRoute() + "/" + id);
    };
    /**
     * Returns all addresses.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    AddressEndpointConnector.prototype.get = function (options) {
        return this.requestDispatcher.get(this.getRoute(), this.parseGetOptions(options));
    };
    /**
     * Returns an address.
     * @param {Number} id Address ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    AddressEndpointConnector.prototype.getById = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid address ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id);
    };
    /**
     * Searches the address with the passed term.
     * @param {String} term Search term.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid search term parameter.
     */
    AddressEndpointConnector.prototype.search = function (term) {
        // Check search term parameter.
        if (!term || typeof term !== 'string') {
            throw new Error('Missing or invalid search term');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute(), { q: term });
    };
    /**
     * Updates an address.
     * @param {number} id Address ID.
     * @param {Object} data Address data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     * @throws Will throw error on missing or invalid data parameter.
     */
    AddressEndpointConnector.prototype.update = function (id, data) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid address ID');
        }
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid address data');
        }
        // Perform request.
        return this.requestDispatcher.put(this.getRoute() + "/" + id, data);
    };
    return AddressEndpointConnector;
}(_1.AbstractEndpointConnector));
exports.AddressEndpointConnector = AddressEndpointConnector;
