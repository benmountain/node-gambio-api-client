"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require(".");
/**
 * Provides methods to perform requests to the shop's order endpoint.
 * @extends {AbstractEndpointConnector}
 */
var OrderEndpointConnector = (function (_super) {
    __extends(OrderEndpointConnector, _super);
    function OrderEndpointConnector() {
        return _super.apply(this, arguments) || this;
    }
    /**
     * Returns the endpoint route for attributes or properties.
     * @param {String} type Attribute or property?
     * @returns {String} The appropriate route.
     */
    OrderEndpointConnector.prototype.getAttributeOrPropertyRoute = function (type) {
        return (type === 'attribute') ? type + "s" : 'properties';
    };
    /**
     * Creates an order item attribute or property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item attribute/property data.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     * @throws {Error} Missing or invalid data parameter.
     */
    OrderEndpointConnector.prototype.createAttributeOrProperty = function (orderId, orderItemId, data, type) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Check order item attribute/property data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error("Missing or invalid order item " + type + " data");
        }
        // Perform request.
        return this.requestDispatcher.post(this.getRoute() + "/" + orderId + "/items/" + orderItemId + "/" + this.getAttributeOrPropertyRoute(type), data);
    };
    /**
     * Deletes an order item attribute/property by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeOrPropertyId Order item attribute/property ID.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     * @throws {Error} Missing or invalid order item attribute/property ID parameter.
     */
    OrderEndpointConnector.prototype.deleteAttributeOrProperty = function (orderId, orderItemId, orderItemAttributeOrPropertyId, type) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Check order item attribute/property ID parameter.
        if (!orderItemAttributeOrPropertyId || typeof orderItemAttributeOrPropertyId !== 'number') {
            throw new Error('Missing or invalid order item ${type} ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.getRoute() + "/" + orderId + "/items/" + orderItemId + "/" + this.getAttributeOrPropertyRoute(type) + "/" + orderItemAttributeOrPropertyId);
    };
    /**
     * Returns the order item attributes/properties.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.getAttributesOrProperties = function (orderId, orderItemId, type) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + orderId + "/items/" + orderItemId + "/" + this.getAttributeOrPropertyRoute(type));
    };
    /**
     * Returns a specific order item attribute/property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeOrPropertyId Order item attribute/property ID.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     * @throws {Error} Missing or invalid order item attribute/property ID parameter.
     */
    OrderEndpointConnector.prototype.getAttributeOrProperty = function (orderId, orderItemId, orderItemAttributeOrPropertyId, type) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Check order item attribute/property ID parameter.
        if (!orderItemAttributeOrPropertyId || typeof orderItemAttributeOrPropertyId !== 'number') {
            throw new Error('Missing or invalid order item ${type} ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + orderId + "/items/" + orderItemId + "/" + this.getAttributeOrPropertyRoute(type) + "/" + orderItemAttributeOrPropertyId);
    };
    /**
     * Updates an order item attribute/property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeOrPropertyId Order item attribute/property ID.
     * @param {Object} data Order item attribute/property data.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     * @throws {Error} Missing or invalid order item attribute/property ID parameter.
     */
    OrderEndpointConnector.prototype.updateAttributeOrProperty = function (orderId, orderItemId, orderItemAttributeOrPropertyId, data, type) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Check order item attribute/property ID parameter.
        if (!orderItemAttributeOrPropertyId || typeof orderItemAttributeOrPropertyId !== 'number') {
            throw new Error('Missing or invalid order item ${type} ID');
        }
        // Perform request.
        return this.requestDispatcher.put(this.getRoute() + "/" + orderId + "/items/" + orderItemId + "/" + this.getAttributeOrPropertyRoute(type) + "/" + orderItemAttributeOrPropertyId, data);
    };
    /**
     * Returns the order endpoint route.
     * @returns {String} Order endpoint route.
     */
    OrderEndpointConnector.prototype.getRoute = function () {
        return '/orders';
    };
    /**
     * Creates an order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item attribute data.
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.createAttribute = function (orderId, orderItemId, data) {
        return this.createAttributeOrProperty(orderId, orderItemId, data, 'attribute');
    };
    /**
     * Creates an order item property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item property data.
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.createProperty = function (orderId, orderItemId, data) {
        return this.createAttributeOrProperty(orderId, orderItemId, data, 'property');
    };
    /**
     * Creates an order item.
     * @param {Number} orderId Order ID.
     * @param {Object} data Order item data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid data parameter.
     */
    OrderEndpointConnector.prototype.createItem = function (orderId, data) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid order item data');
        }
        // Perform request.
        return this.requestDispatcher.post(this.getRoute() + "/" + orderId + "/items", data);
    };
    /**
     * Creates an order total.
     * @param {Number} orderId Order ID.
     * @param {Object} data Order total data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid data parameter.
     */
    OrderEndpointConnector.prototype.createTotal = function (orderId, data) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error('Missing or invalid order total data');
        }
        // Perform request.
        return this.requestDispatcher.post(this.getRoute() + "/" + orderId + "/totals", data);
    };
    /**
     * Deletes an order item attribute by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.deleteAttribute = function (orderId, orderItemId, orderItemAttributeId) {
        return this.deleteAttributeOrProperty(orderId, orderItemId, orderItemAttributeId, 'attribute');
    };
    /**
     * Deletes an order item property by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.deleteProperty = function (orderId, orderItemId, orderItemPropertyId) {
        return this.deleteAttributeOrProperty(orderId, orderItemId, orderItemPropertyId, 'property');
    };
    /**
     * Deletes an order item by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     */
    OrderEndpointConnector.prototype.deleteItem = function (orderId, orderItemId) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.getRoute() + "/" + orderId + "/items/" + orderItemId);
    };
    /**
     * Deletes an order total by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderTotalId Order total ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order total ID parameter.
     */
    OrderEndpointConnector.prototype.deleteTotal = function (orderId, orderTotalId) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order total ID parameter.
        if (!orderTotalId || typeof orderTotalId !== 'number') {
            throw new Error('Missing or invalid order total ID');
        }
        // Perform request.
        return this.requestDispatcher.delete(this.getRoute() + "/" + orderId + "/totals/" + orderTotalId);
    };
    /**
     * Returns an order history.
     * @param {Number} id Order ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    OrderEndpointConnector.prototype.getHistory = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id + "/history");
    };
    /**
     * Returns an order history by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderHistoryId Order history ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order history ID parameter.
     */
    OrderEndpointConnector.prototype.getHistoryById = function (orderId, orderHistoryId) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order history ID parameter.
        if (!orderHistoryId || typeof orderHistoryId !== 'number') {
            throw new Error('Missing or invalid order history ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + orderId + "/history/" + orderHistoryId);
    };
    /**
     * Returns the order item attributes.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.getAttributes = function (orderId, orderItemId) {
        return this.getAttributesOrProperties(orderId, orderItemId, 'attribute');
    };
    /**
     * Returns the order item properties.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.getProperties = function (orderId, orderItemId) {
        return this.getAttributesOrProperties(orderId, orderItemId, 'property');
    };
    /**
     * Returns a specific order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.getAttribute = function (orderId, orderItemId, orderItemAttributeId) {
        return this.getAttributeOrProperty(orderId, orderItemId, orderItemAttributeId, 'attribute');
    };
    /**
     * Returns a specific order item property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.getProperty = function (orderId, orderItemId, orderItemPropertyId) {
        return this.getAttributeOrProperty(orderId, orderItemId, orderItemPropertyId, 'property');
    };
    /**
     * Returns the order items.
     * @param {Number} id Order ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    OrderEndpointConnector.prototype.getItems = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id + "/items");
    };
    /**
     * Returns an order item.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     */
    OrderEndpointConnector.prototype.getItem = function (orderId, orderItemId) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + orderId + "/items/" + orderItemId);
    };
    /**
     * Returns the order totals.
     * @param {Number} id Order ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    OrderEndpointConnector.prototype.getTotals = function (id) {
        // Check ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + id + "/totals");
    };
    /**
     * Returns an order total.
     * @param {Number} orderId Order ID.
     * @param {Number} orderTotalId Order total ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order total ID parameter.
     */
    OrderEndpointConnector.prototype.getTotal = function (orderId, orderTotalId) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderTotalId || typeof orderTotalId !== 'number') {
            throw new Error('Missing or invalid order total ID');
        }
        // Perform request.
        return this.requestDispatcher.get(this.getRoute() + "/" + orderId + "/totals/" + orderTotalId);
    };
    /**
     * Updates an order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @param {Object} data Order item attribute data.
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.updateAttribute = function (orderId, orderItemId, orderItemAttributeId, data) {
        return this.updateAttributeOrProperty(orderId, orderItemId, orderItemAttributeId, data, 'attribute');
    };
    /**
     * Updates an order item property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @param {Object} data Order item property data.
     * @returns {Promise}
     */
    OrderEndpointConnector.prototype.updateProperty = function (orderId, orderItemId, orderItemPropertyId, data) {
        return this.updateAttributeOrProperty(orderId, orderItemId, orderItemPropertyId, data, 'property');
    };
    /**
     * Updates an order item.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     * @throws {Error} Missing or invalid order item data parameter.
     */
    OrderEndpointConnector.prototype.updateItem = function (orderId, orderItemId, data) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item ID parameter.
        if (!orderItemId || typeof orderItemId !== 'number') {
            throw new Error('Missing or invalid order item ID');
        }
        // Check order item data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error("Missing or invalid order item data");
        }
        // Perform request.
        return this.requestDispatcher.put(this.getRoute() + "/" + orderId + "/items/" + orderItemId, data);
    };
    /**
     * Updates an order status.
     * @param {Number} id Order ID.
     * @param {Object} data Order status data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order status data parameter.
     */
    OrderEndpointConnector.prototype.updateStatus = function (id, data) {
        // Check order ID parameter.
        if (!id || typeof id !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order item data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error("Missing or invalid order status data");
        }
        // Perform request.
        return this.requestDispatcher.patch(this.getRoute() + "/" + id + "/status", data);
    };
    /**
     * Updates an order total.
     * @param {Number} id Order ID.
     * @param {Object} data Order status data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order status data parameter.
     */
    OrderEndpointConnector.prototype.updateTotal = function (orderId, orderTotalId, data) {
        // Check order ID parameter.
        if (!orderId || typeof orderId !== 'number') {
            throw new Error('Missing or invalid order ID');
        }
        // Check order total ID parameter.
        if (!orderTotalId || typeof orderTotalId !== 'number') {
            throw new Error('Missing or invalid order total ID');
        }
        // Check order item data parameter.
        if (!data || typeof data !== 'object') {
            throw new Error("Missing or invalid order total data");
        }
        // Perform request.
        return this.requestDispatcher.put(this.getRoute() + "/" + orderId + "/totals/" + orderTotalId, data);
    };
    return OrderEndpointConnector;
}(_1.AbstractEndpointConnector));
exports.OrderEndpointConnector = OrderEndpointConnector;
