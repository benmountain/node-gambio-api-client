/// <reference types="core-js" />
import { AbstractEndpointConnector } from '.';
import { ResponseInterface } from './Interfaces';
/**
 * Provides methods to perform requests to the shop's category endpoint.
 * @extends {AbstractEndpointConnector}
 */
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
     * Deletes a category icon by its file name.
     * @param {String} fileName File name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file name parameter.
     */
    deleteIcon(fileName: string): Promise<ResponseInterface>;
    /**
     * Deletes a category image by its file name.
     * @param {String} filename File name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file name parameter.
     */
    deleteImage(filename: string): Promise<ResponseInterface>;
    /**
     * Returns the children of a category.
     * @param {Number} id Category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid ID parameter.
     */
    getChild(id: number): Promise<ResponseInterface>;
    /**
     * Returns all category icons.
     * @returns {Promise}
     */
    getIcons(): Promise<ResponseInterface>;
    /**
     * Returns all category images.
     * @returns {Promise}
     */
    getImages(): Promise<ResponseInterface>;
    /**
     * Renames a category icon.
     * @param {String} oldFilename File to rename.
     * @param {String} newFilename New file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid old file name parameter.
     * @throws {Error} Missing or invalid new file name parameter.
     */
    renameIcon(oldFilename: string, newFilename: string): Promise<ResponseInterface>;
    /**
     * Renames a category image.
     * @param {String} oldFilename File to rename.
     * @param {String} newFilename New file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid old file name parameter.
     * @throws {Error} Missing or invalid new file name parameter.
     */
    renameImage(oldFilename: string, newFilename: string): Promise<ResponseInterface>;
    /**
     * Uploads a category icon.
     * @param {String} filePath File path.
     * @param {String} fileName File name.
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
     */
    uploadIcon(filePath: string, fileName: string): Promise<ResponseInterface>;
    /**
     * Uploads a category image.
     * @param {String} filePath File path.
     * @param {String} fileName File name.
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
     */
    uploadImage(filePath: string, fileName: string): Promise<ResponseInterface>;
}
export { CategoryEndpointConnector };
