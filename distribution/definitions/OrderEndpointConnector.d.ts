/// <reference types="core-js" />
import { AbstractEndpointConnector } from '.';
import { ResponseInterface } from './Interfaces';
/**
 * Provides methods to perform requests to the shop's order endpoint.
 * @extends {AbstractEndpointConnector}
 */
declare class OrderEndpointConnector extends AbstractEndpointConnector {
    /**
     * Returns the endpoint route for attributes or properties.
     * @param {String} type Attribute or property?
     * @returns {String} The appropriate route.
     */
    private getAttributeOrPropertyRoute(type);
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
    private createAttributeOrProperty(orderId, orderItemId, data, type);
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
    private deleteAttributeOrProperty(orderId, orderItemId, orderItemAttributeOrPropertyId, type);
    /**
     * Returns the order item attributes/properties.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {String} type Attribute or property?
     * @returns {Promise}
     */
    private getAttributesOrProperties(orderId, orderItemId, type);
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
    private getAttributeOrProperty(orderId, orderItemId, orderItemAttributeOrPropertyId, type);
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
    private updateAttributeOrProperty(orderId, orderItemId, orderItemAttributeOrPropertyId, data, type);
    /**
     * Returns the order endpoint route.
     * @returns {String} Order endpoint route.
     */
    getRoute(): string;
    /**
     * Creates an order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item attribute data.
     * @returns {Promise}
     */
    createAttribute(orderId: number, orderItemId: number, data: {}): Promise<ResponseInterface>;
    /**
     * Creates an order item property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item property data.
     * @returns {Promise}
     */
    createProperty(orderId: number, orderItemId: number, data: {}): Promise<ResponseInterface>;
    /**
     * Creates an order item.
     * @param {Number} orderId Order ID.
     * @param {Object} data Order item data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid data parameter.
     */
    createItem(orderId: number, data: {}): Promise<ResponseInterface>;
    /**
     * Creates an order total.
     * @param {Number} orderId Order ID.
     * @param {Object} data Order total data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid data parameter.
     */
    createTotal(orderId: number, data: {}): Promise<ResponseInterface>;
    /**
     * Deletes an order item attribute by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @returns {Promise}
     */
    deleteAttribute(orderId: number, orderItemId: number, orderItemAttributeId: number): Promise<ResponseInterface>;
    /**
     * Deletes an order item property by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @returns {Promise}
     */
    deleteProperty(orderId: number, orderItemId: number, orderItemPropertyId: number): Promise<ResponseInterface>;
    /**
     * Deletes an order item by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     */
    deleteItem(orderId: number, orderItemId: number): Promise<ResponseInterface>;
    /**
     * Deletes an order total by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderTotalId Order total ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order total ID parameter.
     */
    deleteTotal(orderId: number, orderTotalId: number): Promise<ResponseInterface>;
    /**
     * Returns an order history.
     * @param {Number} id Order ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getHistory(id: number): Promise<ResponseInterface>;
    /**
     * Returns an order history by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderHistoryId Order history ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order history ID parameter.
     */
    getHistoryById(orderId: number, orderHistoryId: number): Promise<ResponseInterface>;
    /**
     * Returns the order item attributes.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     */
    getAttributes(orderId: number, orderItemId: number): Promise<ResponseInterface>;
    /**
     * Returns the order item properties.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     */
    getProperties(orderId: number, orderItemId: number): Promise<ResponseInterface>;
    /**
     * Returns a specific order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @returns {Promise}
     */
    getAttribute(orderId: number, orderItemId: number, orderItemAttributeId: number): Promise<ResponseInterface>;
    /**
     * Returns a specific order item property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @returns {Promise}
     */
    getProperty(orderId: number, orderItemId: number, orderItemPropertyId: number): Promise<ResponseInterface>;
    /**
     * Returns the order items.
     * @param {Number} id Order ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getItems(id: number): Promise<ResponseInterface>;
    /**
     * Returns an order item.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order item ID parameter.
     */
    getItem(orderId: number, orderItemId: number): Promise<ResponseInterface>;
    /**
     * Returns the order totals.
     * @param {Number} id Order ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getTotals(id: number): Promise<ResponseInterface>;
    /**
     * Returns an order total.
     * @param {Number} orderId Order ID.
     * @param {Number} orderTotalId Order total ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order total ID parameter.
     */
    getTotal(orderId: number, orderTotalId: number): Promise<ResponseInterface>;
    /**
     * Updates an order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @param {Object} data Order item attribute data.
     * @returns {Promise}
     */
    updateAttribute(orderId: number, orderItemId: number, orderItemAttributeId: number, data: {}): Promise<ResponseInterface>;
    /**
     * Updates an order item property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @param {Object} data Order item property data.
     * @returns {Promise}
     */
    updateProperty(orderId: number, orderItemId: number, orderItemPropertyId: number, data: {}): Promise<ResponseInterface>;
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
    updateItem(orderId: number, orderItemId: number, data: {}): Promise<ResponseInterface>;
    /**
     * Updates an order status.
     * @param {Number} id Order ID.
     * @param {Object} data Order status data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order status data parameter.
     */
    updateStatus(id: number, data: {}): Promise<ResponseInterface>;
    /**
     * Updates an order total.
     * @param {Number} id Order ID.
     * @param {Object} data Order status data.
     * @returns {Promise}
     * @throws {Error} Missing or invalid order ID parameter.
     * @throws {Error} Missing or invalid order status data parameter.
     */
    updateTotal(orderId: number, orderTotalId: number, data: {}): Promise<ResponseInterface>;
}
export { OrderEndpointConnector };
