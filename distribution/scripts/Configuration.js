"use strict";
/**
 * Provides client configuration values.
 */
var Configuration = (function () {
    function Configuration() {
    }
    return Configuration;
}());
/**
 * Current API version.
 * @type {Number}
 * @static
 */
Configuration.API_VERSION = 2;
/**
 * Path to API controller.
 * @type {String}
 * @static
 */
Configuration.API_URL = "/api.php/v" + Configuration.API_VERSION;
exports.Configuration = Configuration;
