"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require(".");
/**
 * Provides methods to perform requests to the shop's category endpoint.
 * @extends {AbstractEndpointConnector}
 */
var CategoryEndpointConnector = (function (_super) {
    __extends(CategoryEndpointConnector, _super);
    function CategoryEndpointConnector() {
        var _this = _super.apply(this, arguments) || this;
        /**
         * Category endpoint routes.
         * @type {Object}
         */
        _this.routes = {
            // Categories.
            main: '/categories',
            // Category icons.
            icons: '/category_icons',
            // Category images.
            images: '/category_images',
        };
        return _this;
    }
    /**
     * Returns the category endpoint route.
     * @returns {String} Category endpoint route.
     */
    CategoryEndpointConnector.prototype.getRoute = function () {
        return this.routes.main;
    };
    /**
     * Deletes a category icon by its file name.
     * @param {String} fileName File name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file name parameter.
     */
    CategoryEndpointConnector.prototype.deleteIcon = function (fileName) {
        // Check file name parameter.
        if (!fileName || typeof fileName !== 'string') {
            throw new Error('Missing or invalid category icon file name');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.routes.icons, { filename: fileName });
    };
    /**
     * Deletes a category image by its file name.
     * @param {String} filename File name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file name parameter.
     */
    CategoryEndpointConnector.prototype.deleteImage = function (filename) {
        // Check file name parameter.
        if (!filename || typeof filename !== 'string') {
            throw new Error('Missing or invalid category image file name');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.routes.images, { filename: filename });
    };
    /**
     * Returns the children of a category.
     * @param {Number} id Category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    CategoryEndpointConnector.prototype.getChild = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid category ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id + "/children");
    };
    /**
     * Returns all category icons.
     * @returns {Promise}
     */
    CategoryEndpointConnector.prototype.getIcons = function () {
        return this.requestDispatcher.get(this.routes.icons);
    };
    /**
     * Returns all category images.
     * @returns {Promise}
     */
    CategoryEndpointConnector.prototype.getImages = function () {
        return this.requestDispatcher.get(this.routes.images);
    };
    /**
     * Renames a category icon.
     * @param {String} oldFilename File to rename.
     * @param {String} newFilename New file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid old file name parameter.
     * @throws {Error} Missing or invalid new file name parameter.
     */
    CategoryEndpointConnector.prototype.renameIcon = function (oldFilename, newFilename) {
        // Check old file name parameter.
        if (!oldFilename || typeof oldFilename !== 'string') {
            throw new Error('Missing or invalid old file name');
        }
        // Check new file name parameter.
        if (!newFilename || typeof newFilename !== 'string') {
            throw new Error('Missing or invalid new file name');
        }
        // Perform request.
        return this.requestDispatcher.put(this.routes.icons, { oldFilename: oldFilename, newFilename: newFilename });
    };
    /**
     * Renames a category image.
     * @param {String} oldFilename File to rename.
     * @param {String} newFilename New file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid old file name parameter.
     * @throws {Error} Missing or invalid new file name parameter.
     */
    CategoryEndpointConnector.prototype.renameImage = function (oldFilename, newFilename) {
        // Check old file name parameter.
        if (!oldFilename || typeof oldFilename !== 'string') {
            throw new Error('Missing or invalid old file name');
        }
        // Check new file name parameter.
        if (!newFilename || typeof newFilename !== 'string') {
            throw new Error('Missing or invalid new file name');
        }
        // Perform request.
        return this.requestDispatcher.put(this.routes.images, { oldFilename: oldFilename, newFilename: newFilename });
    };
    /**
     * Uploads a category icon.
     * @param {String} filePath File path.
     * @param {String} fileName File name.
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
     */
    CategoryEndpointConnector.prototype.uploadIcon = function (filePath, fileName) {
        // Check file path parameter.
        if (!filePath || typeof filePath !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Check file name parameter.
        if (!fileName || typeof fileName !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Perform request.
        return this.requestDispatcher.uploadFile(this.routes.icons, filePath, fileName);
    };
    /**
     * Uploads a category image.
     * @param {String} filePath File path.
     * @param {String} fileName File name.
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
     */
    CategoryEndpointConnector.prototype.uploadImage = function (filePath, fileName) {
        // Check file path parameter.
        if (!filePath || typeof filePath !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Check file name parameter.
        if (!fileName || typeof fileName !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Perform request.
        return this.requestDispatcher.uploadFile(this.routes.images, filePath, fileName);
    };
    return CategoryEndpointConnector;
}(_1.AbstractEndpointConnector));
exports.CategoryEndpointConnector = CategoryEndpointConnector;
