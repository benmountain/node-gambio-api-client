import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';

class OrderEndpointConnector extends AbstractEndpointConnector {
  /**
   * Returns the endpoint route for attributes or properties.
   * @param {String} type Attribute or property?
   * @returns {String} The appropriate route.
   */
  private getAttributeOrPropertyRoute(type: string): string {
    return (type === 'attribute') ? `${type}s` : 'properties';
  }

  /**
   * Creates an order item attribute or property.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Object} data Order item attribute/property data.
   * @param {String} type Attribute or property?
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order item ID parameter.
   * @throws Will throw error on missing or invalid data parameter.
   */
  private createAttributeOrProperty(orderId: number, orderItemId: number, data: {}, type: string): Promise<ResponseInterface> {
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
      throw new Error(`Missing or invalid order item ${type} data`);
    }

    // Perform request.
    return this.requestDispatcher.post(`${this.getRoute()}/${orderId}/items/${orderItemId}/${this.getAttributeOrPropertyRoute(type)}`, data);
  }

  /**
   * Deletes an order item attribute/property by its ID.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Number} orderItemAttributeOrPropertyId Order item attribute/property ID.
   * @param {String} type Attribute or property?
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order item ID parameter.
   * @throws Will throw error on missing or invalid order item attribute/property ID parameter.
   */
  private deleteAttributeOrProperty(orderId: number, orderItemId: number, orderItemAttributeOrPropertyId: number, type: string): Promise<ResponseInterface> {
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
    return this.requestDispatcher.delete(`${this.getRoute()}/${orderId}/items/${orderItemId}/${this.getAttributeOrPropertyRoute(type)}/${orderItemAttributeOrPropertyId}`);
  }

  /**
   * Returns the order item attributes/properties.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {String} type Attribute or property?
   * @returns {Promise} Request promise.
   */
  private getAttributesOrProperties(orderId: number, orderItemId: number, type: string): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderItemId || typeof orderItemId !== 'number') {
      throw new Error('Missing or invalid order item ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderItemId}/${this.getAttributeOrPropertyRoute(type)}`);
  }

  /**
   * Returns a specific order item attribute/property.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Number} orderItemAttributeOrPropertyId Order item attribute/property ID.
   * @param {String} type Attribute or property?
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order item ID parameter.
   * @throws Will throw error on missing or invalid order item attribute/property ID parameter.
   */
  private getAttributeOrProperty(orderId: number, orderItemId: number, orderItemAttributeOrPropertyId: number, type: string): Promise<ResponseInterface> {
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
    return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/items/${orderItemId}/${this.getAttributeOrPropertyRoute(type)}/${orderItemAttributeOrPropertyId}`);
  }

  /**
   * Updates an order item attribute/property.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Number} orderItemAttributeOrPropertyId Order item attribute/property ID.
   * @param {Object} data Order item attribute/property data.
   * @param {String} type Attribute or property?
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order item ID parameter.
   * @throws Will throw error on missing or invalid order item attribute/property ID parameter.
   */
  private updateAttributeOrProperty(orderId: number, orderItemId: number, orderItemAttributeOrPropertyId: number, data: {}, type: string): Promise<ResponseInterface> {
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
    return this.requestDispatcher.put(`${this.getRoute()}/${orderId}/items/${orderItemId}/${this.getAttributeOrPropertyRoute(type)}/${orderItemAttributeOrPropertyId}`, data);
  }

  /**
   * Returns the order endpoint route.
   * @returns {String} Order endpoint route.
   */
  public getRoute(): string {
    return '/orders';
  }

  /**
   * Creates an order item attribute.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Object} data Order item attribute data.
   * @returns {Promise} Request promise.
   */
  public createAttribute(orderId: number, orderItemId: number, data: {}): Promise<ResponseInterface> {
    return this.createAttributeOrProperty(orderId, orderItemId, data, 'attribute');
  }

  /**
   * Creates an order item property.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Object} data Order item property data.
   * @returns {Promise} Request promise.
   */
  public createProperty(orderId: number, orderItemId: number, data: {}): Promise<ResponseInterface> {
    return this.createAttributeOrProperty(orderId, orderItemId, data, 'property');
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
   * Deletes an order item attribute by its ID.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Number} orderItemAttributeId Order item attribute ID.
   * @returns {Promise} Request promise.
   */
  public deleteAttribute(orderId: number, orderItemId: number, orderItemAttributeId: number): Promise<ResponseInterface> {
    return this.deleteAttributeOrProperty(orderId, orderItemId, orderItemAttributeId, 'attribute');
  }

  /**
   * Deletes an order item property by its ID.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Number} orderItemPropertyId Order item property ID.
   * @returns {Promise} Request promise.
   */
  public deleteProperty(orderId: number, orderItemId: number, orderItemPropertyId: number): Promise<ResponseInterface> {
    return this.deleteAttributeOrProperty(orderId, orderItemId, orderItemPropertyId, 'property');
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
   */
  public getAttributes(orderId: number, orderItemId: number): Promise<ResponseInterface> {
    return this.getAttributesOrProperties(orderId, orderItemId, 'attribute');
  }

  /**
   * Returns the order item properties.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @returns {Promise} Request promise.
   */
  public getProperties(orderId: number, orderItemId: number): Promise<ResponseInterface> {
    return this.getAttributesOrProperties(orderId, orderItemId, 'property');
  }

  /**
   * Returns a specific order item attribute.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Number} orderItemAttributeId Order item attribute ID.
   * @returns {Promise} Request promise.
   */
  public getAttribute(orderId: number, orderItemId: number, orderItemAttributeId: number): Promise<ResponseInterface> {
    return this.getAttributeOrProperty(orderId, orderItemId, orderItemAttributeId, 'attribute');
  }

  /**
   * Returns a specific order item property.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Number} orderItemPropertyId Order item property ID.
   * @returns {Promise} Request promise.
   */
  public getProperty(orderId: number, orderItemId: number, orderItemPropertyId: number): Promise<ResponseInterface> {
    return this.getAttributeOrProperty(orderId, orderItemId, orderItemPropertyId, 'property');
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
  public getItem(orderId: number, orderItemId: number): Promise<ResponseInterface> {
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
  public getTotal(orderId: number, orderTotalId: number): Promise<ResponseInterface> {
    // Check order ID parameter.
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item ID parameter.
    if (!orderTotalId || typeof orderTotalId !== 'number') {
      throw new Error('Missing or invalid order total ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${orderId}/totals/${orderTotalId}`);
  }

  /**
   * Updates an order item attribute.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Number} orderItemAttributeId Order item attribute ID.
   * @param {Object} data Order item attribute data.
   * @returns {Promise} Request promise.
   */
  public updateAttribute(orderId: number, orderItemId: number, orderItemAttributeId: number, data: {}): Promise<ResponseInterface> {
    return this.updateAttributeOrProperty(orderId, orderItemId, orderItemAttributeId, data, 'attribute');
  }

  /**
   * Updates an order item property.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Number} orderItemPropertyId Order item property ID.
   * @param {Object} data Order item property data.
   * @returns {Promise} Request promise.
   */
  public updateProperty(orderId: number, orderItemId: number, orderItemPropertyId: number, data: {}): Promise<ResponseInterface> {
    return this.updateAttributeOrProperty(orderId, orderItemId, orderItemPropertyId, data, 'property');
  }

  /**
   * Updates an order item.
   * @param {Number} orderId Order ID.
   * @param {Number} orderItemId Order item ID.
   * @param {Object} data Order item data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order item ID parameter.
   * @throws Will throw error on missing or invalid order item data parameter.
   */
  public updateItem(orderId: number, orderItemId: number, data: {}) {
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
      throw new Error(`Missing or invalid order item data`);
    }

    // Perform request.
    return this.requestDispatcher.put(`${this.getRoute()}/${orderId}/items/${orderItemId}`, data);
  }

  /**
   * Updates an order status.
   * @param {Number} id Order ID.
   * @param {Object} data Order status data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order status data parameter.
   */
  public updateStatus(id: number, data: {}) {
    // Check order ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid order ID');
    }

    // Check order item data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error(`Missing or invalid order status data`);
    }

    // Perform request.
    return this.requestDispatcher.patch(`${this.getRoute()}/${id}/status`, data);
  }

  /**
   * Updates an order total.
   * @param {Number} id Order ID.
   * @param {Object} data Order status data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid order ID parameter.
   * @throws Will throw error on missing or invalid order status data parameter.
   */
  public updateTotal(orderId: number, orderTotalId: number, data: {}) {
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
      throw new Error(`Missing or invalid order total data`);
    }

    // Perform request.
    return this.requestDispatcher.put(`${this.getRoute()}/${orderId}/totals/${orderTotalId}`, data);
  }
}

export { OrderEndpointConnector };
