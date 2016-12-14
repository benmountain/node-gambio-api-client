import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';

class CustomerEndpointConnector extends AbstractEndpointConnector {
  /**
   * Returns the customer endpoint route.
   * @returns {String} Customer endpoint route.
   */
  public getRoute(): string {
    return '/customers';
  }

  /**
   * Creates an instance of CustomerEndpointConnector.
   * @param {RequestDispatcher} requestDispatcher Request dispatcher.
   */
  constructor(requestDispatcher: RequestDispatcher) {
    super(requestDispatcher);
  }

  /**
   * Creates a new customer.
   * @param {Object} data Customer data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid data parameter.
   */
  public create(data: {}): Promise<ResponseInterface> {
    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid customer data');
    }

    // Perform request.
    return this.requestDispatcher.post(this.getRoute(), data);
  }

  /**
   * Deletes a customer by its ID.
   * @param {Number} id Customer ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public delete(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid customer ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${id}`);
  }

  /**
   * Returns all customers.
   * @param {GetOptionsInterface} [options] GET request modifier options.
   * @returns {Promise} Request promise.
   */
  public get(options?: GetOptionsInterface): Promise<ResponseInterface> {
    return this.requestDispatcher.get(this.getRoute(), this.parseGetOptions(options));
  }

  /**
   * Returns all customers, that are guests.
   * @param {GetOptionsInterface} [options] GET request modifier options.
   * @returns {Promise} Request promise.
   */
  public getGuests(options?: GetOptionsInterface): Promise<ResponseInterface> {
    return this.requestDispatcher.get(this.getRoute(), Object.assign({}, this.parseGetOptions(options), { type: 'guests' }));
  }

  /**
   * Returns a customer.
   * @param {Number} id Customer ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public getById(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid customer ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}`);
  }

  /**
   * Returns the addresses of a customer.
   * @param {Number} id Customer ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public getAddressesByCustomerId(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid customer ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}/addresses`);
  }

  /**
   * Searches the customers with the passed term.
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

  /**
   * Updates a customer.
   * @param {number} id Customer ID.
   * @param {Object} data Customer data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   * @throws Will throw error on missing or invalid data parameter.
   */
  public update(id: number, data: {}): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid customer ID');
    }

    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid customer data');
    }

    // Perform request.
    return this.requestDispatcher.put(`${this.getRoute()}/${id}`, data);
  }
}

export { CustomerEndpointConnector };
