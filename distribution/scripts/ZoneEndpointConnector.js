"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require(".");
/**
 * Provides methods to perform requests to the shop's zone endpoint.
 * @extends {AbstractEndpointConnector}
 */
var ZoneEndpointConnector = (function (_super) {
    __extends(ZoneEndpointConnector, _super);
    function ZoneEndpointConnector() {
        return _super.apply(this, arguments) || this;
    }
    /**
     * Returns the zone endpoint route.
     * @returns {String} Zone endpoint route.
     */
    ZoneEndpointConnector.prototype.getRoute = function () {
        return '/zones';
    };
    return ZoneEndpointConnector;
}(_1.AbstractEndpointConnector));
exports.ZoneEndpointConnector = ZoneEndpointConnector;
