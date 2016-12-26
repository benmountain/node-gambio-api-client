/// <reference types="core-js" />
import { AbstractEndpointConnector } from '.';
import { ResponseInterface, GetOptionsInterface } from './Interfaces';
/**
 * Provides methods to perform requests to the shop's product endpoint.
 * @extends {AbstractEndpointConnector}
 */
declare class ProductEndpointConnector extends AbstractEndpointConnector {
    /**
     * Product endpoint routes.
     * @type {Object}
     */
    private routes;
    /**
     * Returns the product endpoint route.
     * @returns {String} Product endpoint route.
     */
    getRoute(): string;
    /**
     * Creates a new product link.
     * @param {Number} productId Product ID.
     * @param {Number} categoryId Category ID to link.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid category ID.
     */
    createLink(productId: number, categoryId: number): Promise<ResponseInterface>;
    /**
     * Deletes a product image.
     * @param {String} filename Product image file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file name.
     */
    deleteImage(filename: string): Promise<ResponseInterface>;
    /**
     * Deletes all product links.
     * @param {Number} id Product ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     */
    deleteLinks(id: number): Promise<ResponseInterface>;
    /**
     * Deletes a product link.
     * @param {Number} productId Product ID.
     * @param {Number} categoryId Linked category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid category ID.
     */
    deleteLink(productId: number, categoryId: number): Promise<ResponseInterface>;
    /**
     * Returns all product links.
     * @param {Number} id Product ID.
     * @param {GetOptionsInterface} [options] GET request modifier options.
     * @returns {Promise}
     */
    getLinks(id: number, options?: GetOptionsInterface): Promise<ResponseInterface>;
    /**
     * Returns a product link.
     * @param {Number} productId Product ID.
     * @param {Number} categoryId Linked category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid category ID.
     */
    getLink(productId: number, categoryId: number): Promise<ResponseInterface>;
    /**
     * Renames a product image.
     * @param {String} oldFilename Old file name to be renamed.
     * @param {String} newFilename New file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid old file name.
     * @throws {Error} Missing or invalid new file name.
     */
    renameImage(oldFilename: string, newFilename: string): Promise<ResponseInterface>;
    /**
     * Updates a product link.
     * @param {Number} productId Product ID.
     * @param {Number} oldCategoryId Old category ID.
     * @param {Number} newCategoryId New category ID.
     * @returns {Promise}
     * @throws {Error} Missing or invalid product ID.
     * @throws {Error} Missing or invalid old category ID.
     * @throws {Error} Missing or invalid new category ID.
     */
    updateLink(productId: number, oldCategoryId: number, newCategoryId: number): Promise<ResponseInterface>;
    /**
     * Uploads a product image.
     * @param {String} filePath Path to file.
     * @param {String} fileName Desired file name.
     * @returns {Promise}
     * @throws {Error} Missing or invalid file path parameter.
     * @throws {Error} Missing or invalid file name parameter.
     */
    uploadImage(filePath: string, fileName: string): Promise<ResponseInterface>;
}
export { ProductEndpointConnector };
