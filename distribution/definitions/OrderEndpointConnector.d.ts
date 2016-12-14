/// <reference types="core-js" />
import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';
declare class OrderEndpointConnector extends AbstractEndpointConnector {
    /**
     * Returns the order endpoint route.
     * @returns {String} Order endpoint route.
     */
    getRoute(): string;
    /**
     * Creates an instance of OrderEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    constructor(requestDispatcher: RequestDispatcher);
    /**
     * Creates an order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Object} data Order item attribute data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order item ID parameter.
     * @throws Will throw error on missing or invalid data parameter.
     */
    createItemAttribute(orderId: number, orderItemId: number, data: {}): Promise<ResponseInterface>;
    /**
     * Creates an order item.
     * @param {Number} orderId Order ID.
     * @param {Object} data Order item data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid data parameter.
     */
    createItem(orderId: number, data: {}): Promise<ResponseInterface>;
    /**
     * Creates an order total.
     * @param {Number} orderId Order ID.
     * @param {Object} data Order total data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid data parameter.
     */
    createTotal(orderId: number, data: {}): Promise<ResponseInterface>;
    /**
     * Creates an order.
     * @param {Object} data Order data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    create(data: {}): Promise<ResponseInterface>;
    /**
     * Deletes an order item attribute by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order item ID parameter.
     * @throws Will throw error on missing or invalid order item attribute ID parameter.
     */
    deleteItemAttribute(orderId: number, orderItemId: number, orderItemAttributeId: number): Promise<ResponseInterface>;
    /**
     * Deletes an order item property by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order item ID parameter.
     * @throws Will throw error on missing or invalid order item property ID parameter.
     */
    deleteItemProperty(orderId: number, orderItemId: number, orderItemPropertyId: number): Promise<ResponseInterface>;
    /**
     * Deletes an order item by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order item ID parameter.
     */
    deleteItem(orderId: number, orderItemId: number): Promise<ResponseInterface>;
    /**
     * Deletes an order total by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderTotalId Order total ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order total ID parameter.
     */
    deleteTotal(orderId: number, orderTotalId: number): Promise<ResponseInterface>;
    /**
     * Deletes an order by its ID.
     * @param {Number} id Order ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    delete(id: number): Promise<ResponseInterface>;
    /**
     * Returns an order history.
     * @param {Number} id Order ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getHistory(id: number): Promise<ResponseInterface>;
    /**
     * Returns an order history by its ID.
     * @param {Number} orderId Order ID.
     * @param {Number} orderHistoryId Order history ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order history ID parameter.
     */
    getHistoryById(orderId: number, orderHistoryId: number): Promise<ResponseInterface>;
    /**
     * Returns the order item attributes.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order item ID parameter.
     */
    getItemAttributes(orderId: number, orderItemId: number): Promise<ResponseInterface>;
    /**
     * Returns the order item properties.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order item ID parameter.
     */
    getItemProperties(orderId: number, orderItemId: number): Promise<ResponseInterface>;
    /**
     * Returns a specific order item attribute.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemAttributeId Order item attribute ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order item ID parameter.
     * @throws Will throw error on missing or invalid order item attribute ID parameter.
     */
    getItemAttributeById(orderId: number, orderItemId: number, orderItemAttributeId: number): Promise<ResponseInterface>;
    /**
     * Returns a specific order item property.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @param {Number} orderItemPropertyId Order item property ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order item ID parameter.
     * @throws Will throw error on missing or invalid order item property ID parameter.
     */
    getItemPropertyById(orderId: number, orderItemId: number, orderItemPropertyId: number): Promise<ResponseInterface>;
    /**
     * Returns the order items.
     * @param {Number} id Order ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getItems(id: number): Promise<ResponseInterface>;
    /**
     * Returns an order item.
     * @param {Number} orderId Order ID.
     * @param {Number} orderItemId Order item ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order item ID parameter.
     */
    getItemById(orderId: number, orderItemId: number): Promise<ResponseInterface>;
    /**
     * Returns the order totals.
     * @param {Number} id Order ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getTotals(id: number): Promise<ResponseInterface>;
    /**
     * Returns an order total.
     * @param {Number} orderId Order ID.
     * @param {Number} orderTotalId Order total ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid order ID parameter.
     * @throws Will throw error on missing or invalid order total ID parameter.
     */
    getTotalById(orderId: number, orderTotalId: number): Promise<ResponseInterface>;
    /**
     * Returns all orders.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    get(options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Returns a order.
     * @param {Number} id Order ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getById(id: number): Promise<ResponseInterface>;
    /**
      * Searches the orders with the passed term.
      * @param {String} term Search term.
      * @returns {Promise} Request promise.
      * @throws Will throw error on missing or invalid search term parameter.
      */
    search(term: string): Promise<ResponseInterface>;
}
export { OrderEndpointConnector };
