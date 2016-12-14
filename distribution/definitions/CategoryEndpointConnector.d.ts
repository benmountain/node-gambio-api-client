/// <reference types="core-js" />
import { AbstractEndpointConnector, RequestDispatcher } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';
declare class CategoryEndpointConnector extends AbstractEndpointConnector {
    /**
     * Category endpoint routes.
     * @type {Object}
     */
    private routes;
    /**
     * Returns the category endpoint route.
     * @returns {String} Category endpoint route.
     */
    getRoute(): string;
    /**
     * Creates an instance of CategoryEndpointConnector.
     * @param {RequestDispatcher} requestDispatcher Request dispatcher.
     */
    constructor(requestDispatcher: RequestDispatcher);
    /**
     * Creates a new category.
     * @param {Object} data Category data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid data parameter.
     */
    create(data: {}): Promise<ResponseInterface>;
    /**
     * Deletes a category icon by its file name.
     * @param {String} fileName File name.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid file name parameter.
     */
    deleteIcon(fileName: string): Promise<ResponseInterface>;
    /**
     * Deletes a category image by its file name.
     * @param {String} filename File name.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid file name parameter.
     */
    deleteImage(filename: string): Promise<ResponseInterface>;
    /**
     * Deletes a category by its ID.
     * @param {Number} id Category ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    delete(id: number): Promise<ResponseInterface>;
    /**
     * Returns all categories.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise} Request promise.
     */
    get(options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Returns a category.
     * @param {Number} id Category ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getById(id: number): Promise<ResponseInterface>;
    /**
     * Returns the children of a category.
     * @param {Number} id Category ID.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     */
    getChildrenById(id: number): Promise<ResponseInterface>;
    /**
     * Searches the categories with the passed term.
     * @param {String} term Search term.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid search term parameter.
     */
    search(term: string): Promise<ResponseInterface>;
    /**
     * Returns all category icons.
     * @returns {Promise} Request promise.
     */
    getIcons(): Promise<ResponseInterface>;
    /**
     * Returns all category images.
     * @returns {Promise} Request promise.
     */
    getImages(): Promise<ResponseInterface>;
    /**
     * Renames a category icon.
     * @param {String} oldFilename File to rename.
     * @param {String} newFilename New file name.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid old file name parameter.
     * @throws Will throw error on missing or invalid new file name parameter.
     */
    renameIcon(oldFilename: string, newFilename: string): Promise<ResponseInterface>;
    /**
     * Renames a category image.
     * @param {String} oldFilename File to rename.
     * @param {String} newFilename New file name.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid old file name parameter.
     * @throws Will throw error on missing or invalid new file name parameter.
     */
    renameImage(oldFilename: string, newFilename: string): Promise<ResponseInterface>;
    /**
     * Updates a category.
     * @param {number} id Category ID.
     * @param {Object} data Category data.
     * @returns {Promise} Request promise.
     * @throws Will throw error on missing or invalid ID parameter.
     * @throws Will throw error on missing or invalid data parameter.
     */
    update(id: number, data: {}): Promise<ResponseInterface>;
    /**
     * Uploads a category icon.
     * @param {String} filePath File path.
     * @param {String} fileName File name.
     * @throws Will throw error on missing or invalid file path parameter.
     * @throws Will throw error on missing or invalid file name parameter.
     */
    uploadIcon(filePath: string, fileName: string): Promise<ResponseInterface>;
    /**
     * Uploads a category image.
     * @param {String} filePath File path.
     * @param {String} fileName File name.
     * @throws Will throw error on missing or invalid file path parameter.
     * @throws Will throw error on missing or invalid file name parameter.
     */
    uploadImage(filePath: string, fileName: string): Promise<ResponseInterface>;
}
export { CategoryEndpointConnector };
