"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require(".");
/**
 * Provides methods to perform requests to the shop's address endpoint.
 * @extends {AbstractEndpointConnector}
 */
var AddressEndpointConnector = (function (_super) {
    __extends(AddressEndpointConnector, _super);
    function AddressEndpointConnector() {
        return _super.apply(this, arguments) || this;
    }
    /**
     * Returns the address endpoint route.
     * @returns {String} Address endpoint route.
     */
    AddressEndpointConnector.prototype.getRoute = function () {
        return '/addresses';
    };
    return AddressEndpointConnector;
}(_1.AbstractEndpointConnector));
exports.AddressEndpointConnector = AddressEndpointConnector;
