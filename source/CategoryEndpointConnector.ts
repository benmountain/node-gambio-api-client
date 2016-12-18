import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';

class CategoryEndpointConnector extends AbstractEndpointConnector {
  /**
   * Category endpoint routes.
   * @type {Object}
   */
  private routes = {
    // Categories.
    main: '/categories',

    // Category icons.
    icons: '/category_icons',

    // Category images.
    images: '/category_images',
  };

  /**
   * Returns the category endpoint route.
   * @returns {String} Category endpoint route.
   */
  public getRoute(): string {
    return this.routes.main;
  }

  /**
   * Deletes a category icon by its file name.
   * @param {String} fileName File name.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid file name parameter.
   */
  public deleteIcon(fileName: string): Promise<ResponseInterface> {
    // Check file name parameter.
    if (!fileName || typeof fileName !== 'string') {
      throw new Error('Missing or invalid category icon file name');
    }

    // Perform request.
    return this.requestDispatcher.delete(this.routes.icons, { filename: fileName });
  }

  /**
   * Deletes a category image by its file name.
   * @param {String} filename File name.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid file name parameter.
   */
  public deleteImage(filename: string) {
    // Check file name parameter.
    if (!filename || typeof filename !== 'string') {
      throw new Error('Missing or invalid category image file name');
    }

    // Perform request.
    return this.requestDispatcher.delete(this.routes.images, { filename });
  }

  /**
   * Returns the children of a category.
   * @param {Number} id Category ID.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid ID parameter.
   */
  public getChild(id: number): Promise<ResponseInterface> {
    // Check ID parameter.
    if (!id || typeof id !== 'number') {
      throw new Error('Missing or invalid category ID');
    }

    // Perform request.
    return this.requestDispatcher.get(`${this.getRoute()}/${id}/children`);
  }

  /**
   * Returns all category icons.
   * @returns {Promise} Request promise.
   */
  public getIcons(): Promise<ResponseInterface> {
    return this.requestDispatcher.get(this.routes.icons);
  }

  /**
   * Returns all category images.
   * @returns {Promise} Request promise.
   */
  public getImages(): Promise<ResponseInterface> {
    return this.requestDispatcher.get(this.routes.images);
  }

  /**
   * Renames a category icon.
   * @param {String} oldFilename File to rename.
   * @param {String} newFilename New file name.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid old file name parameter.
   * @throws Will throw error on missing or invalid new file name parameter.
   */
  public renameIcon(oldFilename: string, newFilename: string): Promise<ResponseInterface> {
    // Check old file name parameter.
    if (!oldFilename || typeof oldFilename !== 'string') {
      throw new Error('Missing or invalid old file name');
    }

    // Check new file name parameter.
    if (!newFilename || typeof newFilename !== 'string') {
      throw new Error('Missing or invalid new file name');
    }

    // Perform request.
    return this.requestDispatcher.put(this.routes.icons, { oldFilename, newFilename });
  }

  /**
   * Renames a category image.
   * @param {String} oldFilename File to rename.
   * @param {String} newFilename New file name.
   * @returns {Promise} Request promise.
   * @throws Will throw error on missing or invalid old file name parameter.
   * @throws Will throw error on missing or invalid new file name parameter.
   */
  public renameImage(oldFilename: string, newFilename: string): Promise<ResponseInterface> {
    // Check old file name parameter.
    if (!oldFilename || typeof oldFilename !== 'string') {
      throw new Error('Missing or invalid old file name');
    }

    // Check new file name parameter.
    if (!newFilename || typeof newFilename !== 'string') {
      throw new Error('Missing or invalid new file name');
    }

    // Perform request.
    return this.requestDispatcher.put(this.routes.images, { oldFilename, newFilename });
  }

  /**
   * Uploads a category icon.
   * @param {String} filePath File path.
   * @param {String} fileName File name.
   * @throws Will throw error on missing or invalid file path parameter.
   * @throws Will throw error on missing or invalid file name parameter.
   */
  public uploadIcon(filePath: string, fileName: string): Promise<ResponseInterface> {
    // Check file path parameter.
    if (!filePath || typeof filePath !== 'string') {
      throw new Error('Missing or invalid file path');
    }

    // Check file name parameter.
    if (!fileName || typeof fileName !== 'string') {
      throw new Error('Missing or invalid file path');
    }

    // Perform request.
    return this.requestDispatcher.uploadFile(this.routes.icons, filePath, fileName);
  }

  /**
   * Uploads a category image.
   * @param {String} filePath File path.
   * @param {String} fileName File name.
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
      throw new Error('Missing or invalid file path');
    }

    // Perform request.
    return this.requestDispatcher.uploadFile(this.routes.images, filePath, fileName);
  }
}

export { CategoryEndpointConnector };
