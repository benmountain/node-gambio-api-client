"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require(".");
/**
 * Provides methods to perform requests to the shop's email endpoint.
 * @extends {AbstractEndpointConnector}
 */
var EmailEndpointConnector = (function (_super) {
    __extends(EmailEndpointConnector, _super);
    function EmailEndpointConnector() {
        var _this = _super.apply(this, arguments) || this;
        /**
         * Email endpoint routes.
         * @type {Object}
         */
        _this.routes = {
            // Emails.
            main: '/emails',
            // Email attachments.
            attachments: '/attachments',
        };
        return _this;
    }
    /**
     * Returns the Email endpoint route.
     * @returns {String} Email endpoint route.
     */
    EmailEndpointConnector.prototype.getRoute = function () {
        return this.routes.main;
    };
    /**
     * Returns all pending Emails.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise}
     */
    EmailEndpointConnector.prototype.getPending = function (options) {
        return this.requestDispatcher.get(this.getRoute(), Object.assign({}, this.parseGetOptions(options), { state: 'pending' }));
    };
    /**
     * Queues a new Email.
     * @param {Object} data Email data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid data parameter.
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
     * @returns {Promise}
     * @throws {Error} Missing or invalid data parameter.
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
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
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
     * @returns {Promise}
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
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
