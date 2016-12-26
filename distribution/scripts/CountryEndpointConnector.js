"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require(".");
/**
 * Provides methods to perform requests to the shop's country endpoint.
 * @extends {AbstractEndpointConnector}
 */
var CountryEndpointConnector = (function (_super) {
    __extends(CountryEndpointConnector, _super);
    function CountryEndpointConnector() {
        return _super.apply(this, arguments) || this;
    }
    /**
     * Returns the country endpoint route.
     * @returns {String} Country endpoint route.
     */
    CountryEndpointConnector.prototype.getRoute = function () {
        return '/countries';
    };
    /**
     * Returns the zones for a country.
     * @param {Number} id Country ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
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
