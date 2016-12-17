import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';

class EmailEndpointConnector extends AbstractEndpointConnector {
  /**
   * Email endpoint routes.
   * @type {Object}
   */
  private routes = {
    // Emails.
    main: '/emails',

    // Email attachments.
    attachments: '/attachments',
  };

  /**
   * Returns the Email endpoint route.
   * @returns {String} Email endpoint route.
   */
  public getRoute(): string {
    return this.routes.main;
  }

  /**
   * Returns all pending Emails.
   * @param {GetOptionsInterface} [options] GET request modifier options.
   * @returns {Promise} Request promise.
   */
  public getPending(options?: GetOptionsInterface): Promise<ResponseInterface> {
    return this.requestDispatcher.get(this.getRoute(), Object.assign({}, this.parseGetOptions(options), { state: 'pending' }));
  }

  /**
   * Queues a new Email.
   * @param {Object} data Email data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid data parameter.
   */
  public queue(data: {}): Promise<ResponseInterface> {
    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid Email data');
    }

    // Perform request.
    return this.requestDispatcher.put(this.getRoute(), data);
  }

  /**
   * Sends a new Email.
   * @param {Object} data Email data.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid data parameter.
   */
  public send(data: {}): Promise<ResponseInterface> {
    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid Email data');
    }

    // Perform request.
    return this.requestDispatcher.post(this.getRoute(), data);
  }

  /**
   * Sends an existing Email.
   * @param {Number} id Email ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public sendById(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid Email ID');
    }

    // Perform request.
    return this.requestDispatcher.post(`${this.getRoute()}/${id}`, {});
  }

  /**
   * Uploads an Email attachment.
   * @param {String} filePath Path to file.
   * @param {String} fileName Desired file name.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid file path parameter.
   * @throws Will throw error on missing or invalid file name parameter.
   */
  public uploadAttachment(filePath: string, fileName: string): Promise<ResponseInterface> {
    // Check file path parameter.
    if (!filePath || typeof filePath !== 'string') {
      throw new Error('Missing or invalid file path');
    }

    // Check file name parameter.
    if (!fileName || typeof fileName !== 'string') {
      throw new Error('Missing or invalid file name');
    }

    // Perform request.
    return this.requestDispatcher.uploadFile(this.routes.attachments, filePath, fileName, 'filedata', 'name');
  }
}

export { EmailEndpointConnector };
