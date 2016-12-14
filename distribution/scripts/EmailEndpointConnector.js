"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require('.');
var EmailEndpointConnector = (function (_super) {
    __extends(EmailEndpointConnector, _super);
    /**
     * Creates an instance of EmailEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    function EmailEndpointConnector(requestDispatcher) {
        _super.call(this, requestDispatcher);
        /**
         * Email endpoint routes.
         * @type {Object}
         */
        this.routes = {
            // Emails.
            main: '/emails',
            // Email attachments.
            attachments: '/attachments',
        };
    }
    /**
     * Returns the Email endpoint route.
     * @returns {String} Email endpoint route.
     */
    EmailEndpointConnector.prototype.getRoute = function () {
        return this.routes.main;
    };
    /**
     * Deletes an Email by its ID.
     * @param {Number} id Email ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    EmailEndpointConnector.prototype.delete = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid Email ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.getRoute() + "/" + id);
    };
    /**
     * Returns all Emails.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    EmailEndpointConnector.prototype.get = function (options) {
        return this.requestDispatcher.get(this.getRoute(), this.parseGetOptions(options));
    };
    /**
     * Returns an Email.
     * @param {Number} id Email ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    EmailEndpointConnector.prototype.getById = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid Email ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id);
    };
    /**
     * Returns all pending Emails.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    EmailEndpointConnector.prototype.getPending = function (options) {
        return this.requestDispatcher.get(this.getRoute(), Object.assign({}, this.parseGetOptions(options), { state: 'pending' }));
    };
    /**
     * Searches the Emails with the passed term.
     * @param {String} term Search term.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid search term parameter.
     */
    EmailEndpointConnector.prototype.search = function (term) {
        // Check search term parameter.
        if (!term || typeof term !== 'string') {
            throw new Error('Missing or invalid search term');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute(), { q: term });
    };
    /**
     * Queues a new Email.
     * @param {Object} data Email data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    EmailEndpointConnector.prototype.queue = function (data) {
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid Email data');
        }
        // Perform request.
        return this.requestDispatcher.put(this.getRoute(), data);
    };
    /**
     * Sends a new Email.
     * @param {Object} data Email data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    EmailEndpointConnector.prototype.send = function (data) {
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid Email data');
        }
        // Perform request.
        return this.requestDispatcher.post(this.getRoute(), data);
    };
    /**
     * Sends an existing Email.
     * @param {Number} id Email ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    EmailEndpointConnector.prototype.sendById = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid Email ID');
        }
        // Perform request.
        return this.requestDispatcher.post(this.getRoute() + "/" + id, {});
    };
    /**
     * Uploads an Email attachment.
     * @param {String} filePath Path to file.
     * @param {String} fileName Desired file name.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid file path parameter.
     * @throws Will throw error on missing or invalid file name parameter.
     */
    EmailEndpointConnector.prototype.uploadAttachment = function (filePath, fileName) {
        // Check file path parameter.
        if (!filePath || typeof filePath !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Check file name parameter.
        if (!fileName || typeof fileName !== 'string') {
            throw new Error('Missing or invalid file name');
        }
        // Perform request.
        return this.requestDispatcher.uploadFile(this.routes.attachments, filePath, fileName, 'filedata', 'name');
    };
    return EmailEndpointConnector;
}(_1.AbstractEndpointConnector));
exports.EmailEndpointConnector = EmailEndpointConnector;
