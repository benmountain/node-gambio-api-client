import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';

class AddressEndpointConnector extends AbstractEndpointConnector {
  /**
   * Returns the address endpoint route.
   * @returns {String} Address endpoint route.
   */
  public getRoute(): string {
    return '/addresses';
  }

  /**
   * Creates an instance of AddressEndpointConnector.
   * @param {RequestDispatcher} requestDispatcher Request dispatcher.
   */
  constructor(requestDispatcher: RequestDispatcher) {
    super(requestDispatcher);
  }

  /**
   * Creates a new address.
   * @param {Object} data Address data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid data parameter.
   */
  public create(data: {}): Promise<ResponseInterface> {
    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid address data');
    }

    // Perform request.
    return this.requestDispatcher.post(this.getRoute(), data);
  }

  /**
   * Deletes an address by its ID.
   * @param {Number} id Address ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public delete(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid address ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${id}`);
  }

  /**
   * Returns all addresses.
   * @param {GetOptionsInterface} [options] GET request modifier options.
   * @returns {Promise} Request promise.
   */
  public get(options?: GetOptionsInterface): Promise<ResponseInterface> {
    return this.requestDispatcher.get(this.getRoute(), this.parseGetOptions(options));
  }

  /**
   * Returns an address.
   * @param {Number} id Address ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public getById(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid address ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}`);
  }

  /**
   * Searches the address with the passed term.
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
   * Updates an address.
   * @param {number} id Address ID.
   * @param {Object} data Address data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   * @throws Will throw error on missing or invalid data parameter.
   */
  public update(id: number, data: {}): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid address ID');
    }

    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid address data');
    }

    // Perform request.
    return this.requestDispatcher.put(`${this.getRoute()}/${id}`, data);
  }
}

export { AddressEndpointConnector };
