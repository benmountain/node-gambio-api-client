import { RequestDispatcher } from '.';
import { GetOptionsInterface, ResponseInterface } from './Interfaces';

/**
 * All endpoint connectors have to extend this class.
 * This class already implements repeating methods like for example `get()` and `create()`.
 * @abstract
 */
abstract class AbstractEndpointConnector {
  /**
   * Request dispatcher.
   * @type {RequestDispatcher}
   */
  protected requestDispatcher: RequestDispatcher;

  /**
   * Creates an instance of AbstractEndpointConnector.
   * @param {RequestDispatcher} requestDispatcher Request dispatcher instance.
   * @throws {Error} Parameter is missing or if it is not a request dispatcher.
   */
  constructor(requestDispatcher: RequestDispatcher) {
    // Check request dispatcher parameter.
    if (!requestDispatcher || !(requestDispatcher instanceof RequestDispatcher)) {
      throw new Error('Missing or invalid request dispatcher parameter');
    }

    // Assign passed parameter as property.
    this.requestDispatcher = requestDispatcher;
  }

  /**
   * Parses the GET request modifier options.
   * @param {GetOptionsInterface} [options] Get request modifiers.
   * @returns {Object} Parsed options as request body data object.
   */
  protected parseGetOptions(options?: GetOptionsInterface): { page?: number, per_page?: number, sort?: string, fields?: string } {
    // Returned value.
    const result: { page?: number, per_page?: number, sort?: string, fields?: string } = {};

    // Check parameter.
    if (!options || typeof options !== 'object') {
      return result;
    }

    // Parse entries per page.
    if (options.entriesPerPage && typeof options.entriesPerPage === 'number') {
      result['per_page'] = options.entriesPerPage;
    }

    // Parse page.
    if (options.page && typeof options.page === 'number') {
      result['page'] = options.page;
    }

    // Parse minimize response modifier.
    if (options.minimize && Array.isArray(options.minimize)) {
      result['fields'] = options.minimize.join();
    }

    // Parse sort options.
    if (options.sort && typeof options.sort === 'object') {
      result['sort'] = Object.keys(options.sort).map(key => options.sort[key] + key).join();
    }

    return result;
  }

  /**
   * Creates a new entries of the endpoint resource.
   * @param {Object} data Entry data.
   * @returns {Promise}
   * @throws {Error} Missing or invalid data parameter.
   */
  public create(data: {}): Promise<ResponseInterface> {
    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid data');
    }

    // Perform request.
    return this.requestDispatcher.post(this.getRoute(), data);
  }

  /**
   * Returns all entries of the endpoint resource.
   * @param {GetOptionsInterface} [options] GET request modifier options.
   * @returns {Promise}
   */
  public get(options?: GetOptionsInterface): Promise<ResponseInterface> {
    return this.requestDispatcher.get(this.getRoute(), this.parseGetOptions(options));
  }

  /**
   * Returns an entry of the endpoint resource.
   * @param {Number} id Entry ID.
   * @returns {Promise}
   * @throws {Error} Missing or invalid ID parameter.
   */
  public getById(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}`);
  }

  /**
   * Deletes an entry by its ID of the endpoint resource.
   * @param {Number} id Entry ID.
   * @returns {Promise}
   * @throws {Error} Missing or invalid ID parameter.
   */
  public delete(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${id}`);
  }

  /**
   * Searches the endpoint resource with the passed term.
   * @param {String} term Search term.
   * @returns {Promise}
   * @throws {Error} Missing or invalid search term parameter.
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
   * Updates an entry of the endpoint resource.
   * @param {number} id Entry ID.
   * @param {Object} data Entry data.
   * @returns {Promise}
   * @throws {Error} Missing or invalid ID parameter.
   * @throws {Error} Missing or invalid data parameter.
   */
  public update(id: number, data: {}): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid ID');
    }

    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid data');
    }

    // Perform request.
    return this.requestDispatcher.put(`${this.getRoute()}/${id}`, data);
  }

  /**
   * Returns the route for the respective endpoint.
   * @returns {String} Endpoint route.
   */
  abstract getRoute(): string;
}

export { AbstractEndpointConnector };