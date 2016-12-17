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
   * Returns all customers, that are guests.
   * @param {GetOptionsInterface} [options] GET request modifier options.
   * @returns {Promise} Request promise.
   */
  public getGuests(options?: GetOptionsInterface): Promise<ResponseInterface> {
    return this.requestDispatcher.get(this.getRoute(), Object.assign({}, this.parseGetOptions(options), { type: 'guests' }));
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
}

export { CustomerEndpointConnector };
