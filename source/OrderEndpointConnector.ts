import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';

class OrderEndpointConnector extends AbstractEndpointConnector {
  /**
   * Returns the order endpoint route.
   * @returns {String} Order endpoint route.
   */
  public getRoute(): string {
    return '/orders';
  }

  /**
   * Creates an instance of OrderEndpointConnector.
   * @param {RequestDispatcher} requestDispatcher Request dispatcher.
   */
  constructor(requestDispatcher: RequestDispatcher) {
    super(requestDispatcher);
  }

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
  public createItemAttribute(orderId: number, orderItemId: number, data: {}): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderItemId || typeof orderItemId !== 'number') {
      throw new Error('Missing or invalid order item ID');
    }

    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid order item attribute data');
    }

    // Perform request.
    return this.requestDispatcher.post(`${this.getRoute()}/${orderId}/items/${orderItemId}/attributes`, data);
  }

  /**
   * Creates an order item.
   * @param {Number} orderId Order ID.
   * @param {Object} data Order item data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid data parameter.
   */
  public createItem(orderId: number, data: {}): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid order item data');
    }

    // Perform request.
    return this.requestDispatcher.post(`${this.getRoute()}/${orderId}/items`, data);
  }

  /**
   * Creates an order total.
   * @param {Number} orderId Order ID.
   * @param {Object} data Order total data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid data parameter.
   */
  public createTotal(orderId: number, data: {}): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid order total data');
    }

    // Perform request.
    return this.requestDispatcher.post(`${this.getRoute()}/${orderId}/totals`, data);
  }

  /**
   * Creates an order.
   * @param {Object} data Order data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid data parameter.
   */
  public create(data: {}): Promise<ResponseInterface> {
    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid order data');
    }

    // Perform request.
    return this.requestDispatcher.post(this.getRoute(), data);
  }

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
  public deleteItemAttribute(orderId: number, orderItemId: number, orderItemAttributeId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderItemId || typeof orderItemId !== 'number') {
      throw new Error('Missing or invalid order item ID');
    }

    // Check order item attribute ID parameter.
    if (!orderItemAttributeId || typeof orderItemAttributeId !== 'number') {
      throw new Error('Missing or invalid order item attribute ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${orderId}/items/${orderItemId}/attributes/${orderItemAttributeId}`);
  }

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
  public deleteItemProperty(orderId: number, orderItemId: number, orderItemPropertyId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderItemId || typeof orderItemId !== 'number') {
      throw new Error('Missing or invalid order item ID');
    }

    // Check order item property ID parameter.
    if (!orderItemPropertyId || typeof orderItemPropertyId !== 'number') {
      throw new Error('Missing or invalid order item property ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${orderId}/items/${orderItemId}/properties/${orderItemPropertyId}`);
  }

  /**
   * Deletes an order item by its ID.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order item ID parameter.
   */
  public deleteItem(orderId: number, orderItemId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderItemId || typeof orderItemId !== 'number') {
      throw new Error('Missing or invalid order item ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${orderId}/items/${orderItemId}`);
  }

  /**
   * Deletes an order total by its ID.
   * @param {Number} orderId Order ID.
   * @param {Number} orderTotalId Order total ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order total ID parameter.
   */
  public deleteTotal(orderId: number, orderTotalId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order total ID parameter.
    if (!orderTotalId || typeof orderTotalId !== 'number') {
      throw new Error('Missing or invalid order total ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${orderId}/totals/${orderTotalId}`);
  }

  /**
   * Deletes an order by its ID.
   * @param {Number} id Order ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public delete(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${id}`);
  }

  /**
   * Returns an order history.
   * @param {Number} id Order ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public getHistory(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}/history`);
  }

  /**
   * Returns an order history by its ID.
   * @param {Number} orderId Order ID.
   * @param {Number} orderHistoryId Order history ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order history ID parameter.
   */
  public getHistoryById(orderId: number, orderHistoryId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order history ID parameter.
    if (!orderHistoryId || typeof orderHistoryId !== 'number') {
      throw new Error('Missing or invalid order history ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/history/${orderHistoryId}`);
  }

  /**
   * Returns the order item attributes.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order item ID parameter.
   */
  public getItemAttributes(orderId: number, orderItemId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderItemId || typeof orderItemId !== 'number') {
      throw new Error('Missing or invalid order item ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderItemId}/attributes`);
  }

  /**
   * Returns the order item properties.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order item ID parameter.
   */
  public getItemProperties(orderId: number, orderItemId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderItemId || typeof orderItemId !== 'number') {
      throw new Error('Missing or invalid order item ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderItemId}/properties`);
  }

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
  public getItemAttributeById(orderId: number, orderItemId: number, orderItemAttributeId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderItemId || typeof orderItemId !== 'number') {
      throw new Error('Missing or invalid order item ID');
    }

    // Check order item attribute ID parameter.
    if (!orderItemAttributeId || typeof orderItemAttributeId !== 'number') {
      throw new Error('Missing or invalid order item attribute ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderItemId}/attributes/${orderItemAttributeId}`);
  }

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
  public getItemPropertyById(orderId: number, orderItemId: number, orderItemPropertyId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderItemId || typeof orderItemId !== 'number') {
      throw new Error('Missing or invalid order item ID');
    }

    // Check order item property ID parameter.
    if (!orderItemPropertyId || typeof orderItemPropertyId !== 'number') {
      throw new Error('Missing or invalid order item property ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderItemId}/properties/${orderItemPropertyId}`);
  }

  /**
   * Returns the order items.
   * @param {Number} id Order ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public getItems(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}/items`);
  }

  /**
   * Returns an order item.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order item ID parameter.
   */
  public getItemById(orderId: number, orderItemId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderItemId || typeof orderItemId !== 'number') {
      throw new Error('Missing or invalid order item ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderItemId}`);
  }

  /**
   * Returns the order totals.
   * @param {Number} id Order ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public getTotals(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}/totals`);
  }

  /**
   * Returns an order total.
   * @param {Number} orderId Order ID.
   * @param {Number} orderTotalId Order total ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order total ID parameter.
   */
  public getTotalById(orderId: number, orderTotalId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderTotalId || typeof orderTotalId !== 'number') {
      throw new Error('Missing or invalid order total ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderTotalId}`);
  }

  /**
   * Returns all orders.
   * @param {GetOptionsInterface} [options] GET request modifier options.
   * @returns {Promise} Request promise.
   */
  public get(options?: GetOptionsInterface): Promise<ResponseInterface> {
    return this.requestDispatcher.get(this.getRoute(), this.parseGetOptions(options));
  }

  /**
   * Returns a order.
   * @param {Number} id Order ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public getById(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}`);
  }

 /**
   * Searches the orders with the passed term.
   * @param {String} term Search term.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid search term parameter.
   */
  public search(term: string): Promise<ResponseInterface> {
    // Check search term parameter.
    if (!term || typeof term !== 'string') {
      throw new Error('Missing or invalid search term');
    }

    // Perform request.
    return this.requestDispatcher.get(this.getRoute(), { q: term });
  }
}

export { OrderEndpointConnector };
