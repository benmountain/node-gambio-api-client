"use strict";
var Configuration = (function () {
    function Configuration() {
    }
    /**
     * Current API version.
     * @type {Number}
     */
    Configuration.API_VERSION = 2;
    /**
     * Path to API controller.
     * @type {String}
     */
    Configuration.API_URL = "/api.php/v" + Configuration.API_VERSION;
    return Configuration;
}());
exports.Configuration = Configuration;
