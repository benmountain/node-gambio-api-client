"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require(".");
/**
 * Provides methods to perform requests to the shop's product endpoint.
 * @extends {AbstractEndpointConnector}
 */
var ProductEndpointConnector = (function (_super) {
    __extends(ProductEndpointConnector, _super);
    function ProductEndpointConnector() {
        var _this = _super.apply(this, arguments) || this;
        /**
         * Product endpoint routes.
         * @type {Object}
         */
        _this.routes = {
            // Products.
            main: '/products',
            // Product images.
            images: '/product_images',
        };
        return _this;
    }
    /**
     * Returns the product endpoint route.
     * @returns {String} Product endpoint route.
     */
    ProductEndpointConnector.prototype.getRoute = function () {
        return this.routes.main;
    };
    /**
     * Creates a new product link.
     * @param {Number} productId Product ID.
     * @param {Number} categoryId Category ID to link.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid category ID.
     */
    ProductEndpointConnector.prototype.createLink = function (productId, categoryId) {
        // Check product ID parameter.
        if (!productId || typeof productId !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Check category ID parameter.
        if (!categoryId || typeof categoryId !== 'number') {
            throw new Error("Missing or invalid category ID");
        }
        // Perform request.
        return this.requestDispatcher.post(this.getRoute() + "/" + productId + "/links", { categoryId: categoryId });
    };
    /**
     * Deletes a product image.
     * @param {String} filename Product image file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file name.
     */
    ProductEndpointConnector.prototype.deleteImage = function (filename) {
        if (!filename || typeof filename !== 'string') {
            throw new Error('Missing or invalid file name');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.routes.images, { filename: filename });
    };
    /**
     * Deletes all product links.
     * @param {Number} id Product ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     */
    ProductEndpointConnector.prototype.deleteLinks = function (id) {
        // Check product ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.getRoute() + "/" + id + "/links");
    };
    /**
     * Deletes a product link.
     * @param {Number} productId Product ID.
     * @param {Number} categoryId Linked category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid category ID.
     */
    ProductEndpointConnector.prototype.deleteLink = function (productId, categoryId) {
        // Check product ID parameter.
        if (!productId || typeof productId !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Check category ID parameter.
        if (!categoryId || typeof categoryId !== 'number') {
            throw new Error('Missing or invalid category ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.getRoute() + "/" + productId + "/links", { categoryId: categoryId });
    };
    /**
     * Returns all product links.
     * @param {Number} id Product ID.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise}
     */
    ProductEndpointConnector.prototype.getLinks = function (id, options) {
        // Check product ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id + "/links", this.parseGetOptions(options));
    };
    /**
     * Returns a product link.
     * @param {Number} productId Product ID.
     * @param {Number} categoryId Linked category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid category ID.
     */
    ProductEndpointConnector.prototype.getLink = function (productId, categoryId) {
        // Check product ID parameter.
        if (!productId || typeof productId !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Check category ID parameter.
        if (!categoryId || typeof categoryId !== 'number') {
            throw new Error('Missing or invalid category ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.getRoute() + "/" + productId + "/links", { categoryId: categoryId });
    };
    /**
     * Renames a product image.
     * @param {String} oldFilename Old file name to be renamed.
     * @param {String} newFilename New file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid old file name.
     * @throws {Error} Missing or invalid new file name.
     */
    ProductEndpointConnector.prototype.renameImage = function (oldFilename, newFilename) {
        // Check old file name parameter.
        if (!oldFilename || typeof oldFilename !== 'string') {
            throw new Error('Missing or invalid old file name');
        }
        // Check old file name parameter.
        if (!newFilename || typeof newFilename !== 'string') {
            throw new Error('Missing or invalid new file name');
        }
        // Perform request.
        return this.requestDispatcher.put(this.routes.images, { oldFilename: oldFilename, newFilename: newFilename });
    };
    /**
     * Updates a product link.
     * @param {Number} productId Product ID.
     * @param {Number} oldCategoryId Old category ID.
     * @param {Number} newCategoryId New category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid old category ID.
     * @throws {Error} Missing or invalid new category ID.
     */
    ProductEndpointConnector.prototype.updateLink = function (productId, oldCategoryId, newCategoryId) {
        // Check product ID parameter.
        if (!productId || typeof productId !== 'number') {
            throw new Error('Missing or invalid product ID');
        }
        // Check old category ID parameter.
        if (!oldCategoryId || typeof oldCategoryId !== 'number') {
            throw new Error('Missing or invalid old category ID');
        }
        // Check new category ID parameter.
        if (!newCategoryId || typeof newCategoryId !== 'number') {
            throw new Error('Missing or invalid new category ID');
        }
        // Perform request.
        return this.requestDispatcher.put(this.getRoute() + "/" + productId + "/links", { oldCategoryId: oldCategoryId, newCategoryId: newCategoryId });
    };
    /**
     * Uploads a product image.
     * @param {String} filePath Path to file.
     * @param {String} fileName Desired file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
     */
    ProductEndpointConnector.prototype.uploadImage = function (filePath, fileName) {
        // Check file path parameter.
        if (!filePath || typeof filePath !== 'string') {
            throw new Error('Missing or invalid file path');
        }
        // Check file name parameter.
        if (!fileName || typeof fileName !== 'string') {
            throw new Error('Missing or invalid file name');
        }
        // Perform request.
        return this.requestDispatcher.uploadFile(this.routes.images, filePath, fileName);
    };
    return ProductEndpointConnector;
}(_1.AbstractEndpointConnector));
exports.ProductEndpointConnector = ProductEndpointConnector;
