import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';

class ProductEndpointConnector extends AbstractEndpointConnector {
  /**
   * Product endpoint routes.
   * @type {Object}
   */
  private routes = {
    // Products.
    main: '/products',

    // Product images.
    images: '/product_images',
  };

  /**
   * Returns the product endpoint route.
   * @returns {String} Product endpoint route.
   */
  public getRoute(): string {
    return this.routes.main;
  }

  /**
   * Creates a new product link.
   * @param {Number} productId Product ID.
   * @param {Number} categoryId Category ID to link.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid product ID.
   * @throws Will throw error on missing or invalid category ID.
   */
  public createLink(productId: number, categoryId: number): Promise<ResponseInterface> {
    // Check product ID parameter.
    if (!productId || typeof productId !== 'number') {
      throw new Error('Missing or invalid product ID');
    }

    // Check category ID parameter.
    if (!categoryId || typeof categoryId !== 'number') {
      throw new Error(`Missing or invalid category ID`);
    }

    // Perform request.
    return this.requestDispatcher.post(`${this.getRoute()}/${productId}/links`, { categoryId });
  }

  /**
   * Deletes a product image.
   * @param {String} filename Product image file name.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid file name.
   */
  public deleteImage(filename: string): Promise<ResponseInterface> {
    if (!filename || typeof filename !== 'string') {
      throw new Error('Missing or invalid file name');
    }

    // Perform request.
    return this.requestDispatcher.delete(this.routes.images, { filename });
  }

  /**
   * Deletes all product links.
   * @param {Number} id Product ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid product ID.
   */
  public deleteLinks(id: number): Promise<ResponseInterface> {
    // Check product ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid product ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${id}/links`);
  }

  /**
   * Deletes a product link.
   * @param {Number} productId Product ID.
   * @param {Number} categoryId Linked category ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid product ID.
   * @throws Will throw error on missing or invalid category ID.
   */
  public deleteLink(productId: number, categoryId: number) {
    // Check product ID parameter.
    if (!productId || typeof productId !== 'number') {
      throw new Error('Missing or invalid product ID');
    }

    // Check category ID parameter.
    if (!categoryId || typeof categoryId !== 'number') {
      throw new Error('Missing or invalid category ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${productId}/links`, { categoryId });
  }

  /**
   * Returns all product links.
   * @param {Number} id Product ID.
   * @param {GetOptionsInterface} [options] GET request modifier options.
   * @returns {Promise} Request promise.
   */
  public getLinks(id: number, options?: GetOptionsInterface): Promise<ResponseInterface> {
    // Check product ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid product ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}/links`, this.parseGetOptions(options));
  }

  /**
   * Returns a product link.
   * @param {Number} productId Product ID.
   * @param {Number} categoryId Linked category ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid product ID.
   * @throws Will throw error on missing or invalid category ID.
   */
  public getLink(productId: number, categoryId: number): Promise<ResponseInterface> {
    // Check product ID parameter.
    if (!productId || typeof productId !== 'number') {
      throw new Error('Missing or invalid product ID');
    }

    // Check category ID parameter.
    if (!categoryId || typeof categoryId !== 'number') {
      throw new Error('Missing or invalid category ID');
    }

    // Perform request.
    return this.requestDispatcher.delete(`${this.getRoute()}/${productId}/links`, { categoryId });
  }

  /**
   * Renames a product image.
   * @param {String} oldFilename Old file name to be renamed.
   * @param {String} newFilename New file name.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid old file name.
   * @throws Will throw error on missing or invalid new file name.
   */
  public renameImage(oldFilename: string, newFilename: string): Promise<ResponseInterface> {
    // Check old file name parameter.
    if (!oldFilename || typeof oldFilename !== 'string') {
      throw new Error('Missing or invalid old file name');
    }

    // Check old file name parameter.
    if (!newFilename || typeof newFilename !== 'string') {
      throw new Error('Missing or invalid new file name');
    }

    // Perform request.
    return this.requestDispatcher.put(this.routes.images, { oldFilename, newFilename });
  }

  /**
   * Updates a product link.
   * @param {Number} productId Product ID.
   * @param {Number} oldCategoryId Old category ID.
   * @param {Number} newCategoryId New category ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid product ID.
   * @throws Will throw error on missing or invalid old category ID.
   * @throws Will throw error on missing or invalid new category ID.
   */
  public updateLink(productId: number, oldCategoryId: number, newCategoryId: number): Promise<ResponseInterface> {
    // Check product ID parameter.
    if (!productId || typeof productId !== 'number') {
      throw new Error('Missing or invalid product ID');
    }

    // Check old category ID parameter.
    if (!oldCategoryId || typeof oldCategoryId !== 'number') {
      throw new Error('Missing or invalid old category ID');
    }

    // Check new category ID parameter.
    if (!newCategoryId || typeof newCategoryId !== 'number') {
      throw new Error('Missing or invalid new category ID');
    }

    // Perform request.
    return this.requestDispatcher.put(`${this.getRoute()}/${productId}/links`, { oldCategoryId, newCategoryId });
  }

  /**
   * Uploads a product image.
   * @param {String} filePath Path to file.
   * @param {String} fileName Desired file name.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid file path parameter.
   * @throws Will throw error on missing or invalid file name parameter.
   */
  public uploadImage(filePath: string, fileName: string): Promise<ResponseInterface> {
    // Check file path parameter.
    if (!filePath || typeof filePath !== 'string') {
      throw new Error('Missing or invalid file path');
    }

    // Check file name parameter.
    if (!fileName || typeof fileName !== 'string') {
      throw new Error('Missing or invalid file name');
    }

    // Perform request.
    return this.requestDispatcher.uploadFile(this.routes.images, filePath, fileName);
  }
}

export { ProductEndpointConnector };
