"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require('.');
var CategoryEndpointConnector = (function (_super) {
    __extends(CategoryEndpointConnector, _super);
    /**
     * Creates an instance of CategoryEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    function CategoryEndpointConnector(requestDispatcher) {
        _super.call(this, requestDispatcher);
        /**
         * Category endpoint routes.
         * @type {Object}
         */
        this.routes = {
            // Categories.
            main: '/categories',
            // Category icons.
            icons: '/category_icons',
            // Category images.
            images: '/category_images',
        };
    }
    /**
     * Returns the category endpoint route.
     * @returns {String} Category endpoint route.
     */
    CategoryEndpointConnector.prototype.getRoute = function () {
        return this.routes.main;
    };
    /**
     * Creates a new category.
     * @param {Object} data Category data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    CategoryEndpointConnector.prototype.create = function (data) {
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid category data');
        }
        // Perform request.
        return this.requestDispatcher.post(this.getRoute(), data);
    };
    /**
     * Deletes a category icon by its file name.
     * @param {String} fileName File name.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid file name parameter.
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
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid file name parameter.
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
     * Deletes a category by its ID.
     * @param {Number} id Category ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    CategoryEndpointConnector.prototype.delete = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid category ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.getRoute() + "/" + id);
    };
    /**
     * Returns all categories.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    CategoryEndpointConnector.prototype.get = function (options) {
        return this.requestDispatcher.get(this.getRoute(), this.parseGetOptions(options));
    };
    /**
     * Returns a category.
     * @param {Number} id Category ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    CategoryEndpointConnector.prototype.getById = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid category ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id);
    };
    /**
     * Returns the children of a category.
     * @param {Number} id Category ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    CategoryEndpointConnector.prototype.getChildrenById = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid category ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id + "/children");
    };
    /**
     * Searches the categories with the passed term.
     * @param {String} term Search term.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid search term parameter.
     */
    CategoryEndpointConnector.prototype.search = function (term) {
        // Check search term parameter.
        if (!term || typeof term !== 'string') {
            throw new Error('Missing or invalid search term');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute(), { q: term });
    };
    /**
     * Returns all category icons.
     * @returns {Promise} Request promise.
     */
    CategoryEndpointConnector.prototype.getIcons = function () {
        return this.requestDispatcher.get(this.routes.icons);
    };
    /**
     * Returns all category images.
     * @returns {Promise} Request promise.
     */
    CategoryEndpointConnector.prototype.getImages = function () {
        return this.requestDispatcher.get(this.routes.images);
    };
    /**
     * Renames a category icon.
     * @param {String} oldFilename File to rename.
     * @param {String} newFilename New file name.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid old file name parameter.
     * @throws Will throw error on missing or invalid new file name parameter.
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
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid old file name parameter.
     * @throws Will throw error on missing or invalid new file name parameter.
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
     * Updates a category.
     * @param {number} id Category ID.
     * @param {Object} data Category data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     * @throws Will throw error on missing or invalid data parameter.
     */
    CategoryEndpointConnector.prototype.update = function (id, data) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid category ID');
        }
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid category data');
        }
        // Perform request.
        return this.requestDispatcher.put(this.getRoute() + "/" + id, data);
    };
    /**
     * Uploads a category icon.
     * @param {String} filePath File path.
     * @param {String} fileName File name.
     * @throws Will throw error on missing or invalid file path parameter.
     * @throws Will throw error on missing or invalid file name parameter.
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
     * @throws Will throw error on missing or invalid file path parameter.
     * @throws Will throw error on missing or invalid file name parameter.
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
