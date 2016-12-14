"use strict";
var _1 = require('.');
var AbstractEndpointConnector = (function () {
    /**
     * Creates an instance of AbstractEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher instance.
     * @throws Will throw an error if the parameter is missing or if it is not a request dispatcher.
     */
    function AbstractEndpointConnector(requestDispatcher) {
        // Check request dispatcher parameter.
        if (!requestDispatcher || !(requestDispatcher instanceof _1.RequestDispatcher)) {
            throw new Error('Missing or invalid request dispatcher parameter');
        }
        // Assign passed parameter as property.
        this.requestDispatcher = requestDispatcher;
    }
    /**
     * Parses the GET request modifier options.
     * @param {GetOptionsInterface} [options] Get request modifiers.
     * @returns {Object} Parsed options as request body data object.
     */
    AbstractEndpointConnector.prototype.parseGetOptions = function (options) {
        // Returned value.
        var result = {};
        // Check parameter.
        if (!options || typeof options !== 'object') {
            return result;
        }
        // Parse entries per page.
        if (options.entriesPerPage && typeof options.entriesPerPage === 'number') {
            result['per_page'] = options.entriesPerPage;
        }
        // Parse page.
        if (options.page && typeof options.page === 'number') {
            result['page'] = options.page;
        }
        // Parse minimize response modifier.
        if (options.minimize && Array.isArray(options.minimize)) {
            result['fields'] = options.minimize.join();
        }
        // Parse sort options.
        if (options.sort && typeof options.sort === 'object') {
            result['sort'] = Object.keys(options.sort).map(function (key) { return options.sort[key] + key; }).join();
        }
        return result;
    };
    return AbstractEndpointConnector;
}());
exports.AbstractEndpointConnector = AbstractEndpointConnector;
