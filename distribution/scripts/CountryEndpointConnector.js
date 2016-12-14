"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require('.');
var CountryEndpointConnector = (function (_super) {
    __extends(CountryEndpointConnector, _super);
    /**
     * Creates an instance of CountryEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    function CountryEndpointConnector(requestDispatcher) {
        _super.call(this, requestDispatcher);
    }
    /**
     * Returns the country endpoint route.
     * @returns {String} Country endpoint route.
     */
    CountryEndpointConnector.prototype.getRoute = function () {
        return '/countries';
    };
    /**
     * Returns a country.
     * @param {Number} id Country ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    CountryEndpointConnector.prototype.getById = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid country ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id);
    };
    /**
     * Returns the zones for a country.
     * @param {Number} id Country ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    CountryEndpointConnector.prototype.getZonesByCountryId = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid country ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id + "/zones");
    };
    return CountryEndpointConnector;
}(_1.AbstractEndpointConnector));
exports.CountryEndpointConnector = CountryEndpointConnector;
