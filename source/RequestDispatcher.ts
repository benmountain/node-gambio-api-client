import 'core-js/shim';
import * as path from 'path';
import * as fs from 'fs';
import * as http from 'http';
import * as request from 'request';
import {
  RequestAuthOptionsInterface,
  ClientOptionsInterface,
  RequestDispatcherInterface,
  ResponseInterface,
} from './Interfaces';
import { HttpMethodsEnum } from './Enums';
import { Configuration } from '.';

class RequestDispatcher implements RequestDispatcherInterface {
  /**
   * Request headers.
   * @type {Object}
   */
  private headers = {
    'User-Agent': 'Node API client'
  };

  /**
   * Request authentication.
   * @type {RequestAuthOptionsInterface}
   */
  private auth: RequestAuthOptionsInterface;

  /**
   * API URL.
   * @type {String}
   */
  private url: string;

  /**
   * Creates an instance of RequestDispatcher.
   */
  constructor(options: ClientOptionsInterface) {
    // Check parameter.
    if (!options || typeof options !== 'object') {
      throw new Error('Missing or invalid client options');
    }

    // Check URL.
    if (!options.url || typeof options.url !== 'string') {
      throw new Error('Missing or invalid shop URL');
    }

    // Check user.
    if (!options.user || typeof options.user !== 'string') {
      throw new Error('Missing or invalid shop user');
    }

    // Check password.
    if (!options.password || typeof options.password !== 'string') {
      throw new Error('Missing or invalid shop password');
    }

    // Assign auth property.
    this.auth = {
      user: options.user,
      pass: options.password,
    };

    // Assign URL property.
    this.url = options.url + Configuration.API_URL;
  }

  /**
   * Returns the default request parameters.
   * @returns {Object} Default request parameters.
   */
  private getDefaultRequestParameters(): { headers: {}, auth: RequestAuthOptionsInterface, json: true } {
    return {
      headers: this.headers,
      auth: this.auth,
      json: true
    };
  }

  /**
   * Performs an HTTP request to a specific endpoint using the request library.
   * @param {String} route Endpoint route.
   * @param {HttpMethodsEnum} method HTTP request method.
   * @param {Object} [data] Request data.
   * @param {Boolean} [hasFormData] Is the data object a form data object?
   * @returns {Promise} Request promise.
   */
  private performRequest(route: string, method: HttpMethodsEnum, data?: {}, hasFormData: boolean = false): Promise<ResponseInterface> {
    // Get HTTP method name.
    const requestMethodName: string = HttpMethodsEnum[method];

    // Request data body property name.
    const dataPropertyName: string = hasFormData ? 'formData' : (method === HttpMethodsEnum.GET ? 'qs' : 'body');

    // Set addtional request parameters.
    const additionalParameters: request.CoreOptions & request.RequiredUriUrl = {
      url: this.url + route,
      method: requestMethodName,
      [dataPropertyName]: data,
    };

    // Merge default request parameters with addtional ones.
    const mergedParameters: request.CoreOptions & request.RequiredUriUrl = Object.assign(this.getDefaultRequestParameters(), additionalParameters);

    // Request promise handler.
    const promiseHandler = (resolve: Function, reject: Function) => {
      // Response handler.
      const responseHandler = (error: Error, response: ResponseInterface) => {
        // Parsed response.
        let parsed : string | {} = null;

        // Reject promise with the error parameter, if defined.
        if (error) {
          reject(error);
          return;
        }

        // Reject promise with the response body, if the status code is not ok.
        if (response.statusCode < 200 || response.statusCode > 299) {
          reject(response.body);
          return;
        }

        // Parse the response body.
        try {
          if (typeof response.body === 'string') {
            parsed = JSON.parse(response.body);
          } else {
            parsed = response.body;
          }
        } catch (parseError) {
          resolve(response.body);
        }

        // Resolve promise.
        resolve(parsed);
      };

      // Send request.
      request(mergedParameters, responseHandler);
    };

    return new Promise(promiseHandler);
  }

  /**
   * Performs a HTTP GET request to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {Object} [data] Request data.
   * @throws Will throw an error if the request route is empty or not a string.
   * @throws Will throw an error if the data object is not an object.
   * @returns {Promise} Request promise.
   */
  public get(route: string, data?: {}): Promise<ResponseInterface> {
    // Check URL parameter.
    if (!route || typeof route !== 'string') {
      throw new Error('Missing or invalid route');
    }

    // Check data parameter.
    if (data && typeof data !== 'object') {
      throw new Error('Invalid request data');
    }

    // Perform request.
    return this.performRequest(route, HttpMethodsEnum.GET, data);
  }

  /**
   * Performs a HTTP POST request to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {Object} data Request data.
   * @throws Will throw an error if the request route is empty or not a string.
   * @throws Will throw an error if the data object is not an object.
   * @returns {Promise} Request promise.
   */
  post(route: string, data: {}): Promise<ResponseInterface> {
    // Check URL parameter.
    if (!route || typeof route !== 'string') {
      throw new Error('Missing or invalid route');
    }

    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid request data');
    }

    // Perform request.
    return this.performRequest(route, HttpMethodsEnum.POST, data);
  }

  /**
   * Performs a HTTP PUT request to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {Object} data Request data.
   * @throws Will throw an error if the request route is empty or not a string.
   * @throws Will throw an error if the data object is not an object.
   * @returns {Promise} Request promise.
   */
  put(route: string, data: {}): Promise<ResponseInterface> {
    // Check URL parameter.
    if (!route || typeof route !== 'string') {
      throw new Error('Missing or invalid route');
    }

    // Check data parameter.
    if (!data || typeof data !== 'object') {
      throw new Error('Missing or invalid request data');
    }

    // Perform request.
    return this.performRequest(route, HttpMethodsEnum.PUT, data);
  }

  /**
   * Performs a HTTP DELETE request to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {Object} [data] Request data.
   * @throws Will throw an error if the request route is empty or not a string.
   * @throws Will throw an error if the data object is not an object.
   * @returns {Promise} Request promise.
   */
  public delete(route: string, data?: {}): Promise<ResponseInterface> {
    // Check URL parameter.
    if (!route || typeof route !== 'string') {
      throw new Error('Missing or invalid route');
    }

    // Check data parameter.
    if (data && typeof data !== 'object') {
      throw new Error('Invalid request data');
    }

    // Perform request.
    return this.performRequest(route, HttpMethodsEnum.DELETE, data);
  }

  /**
   * Performs a file upload to a specific endpoint and returns a promise.
   * @param {String} route Endpoint route to perform the request to.
   * @param {String} filePath Path to file.
   * @param {String} fileName File name.
   * @param {String} [filePostFieldName] Post field name for the file.
   * @param {String} [fileNamePostFieldName] Post field name for the file name.
   * @throws Will throw an error if the request route is empty or not a string.
   * @throws Will throw an error if the file path is empty or not a string.
   * @throws Will throw an error if the file name is empty or not a string.
   * @throws Will throw an error if the file post field name not a string.
   * @throws Will throw an error if the file name post field name not a string.
   * @returns {Promise} Request promise.
   */
  uploadFile(route: string, filePath: string, fileName: string, filePostFieldName: string = 'file', fileNamePostFieldName: string = 'filename'): Promise<ResponseInterface> {
    // Check route parameter.
    if (!route || typeof route !== 'string') {
      throw new Error('Missing or invalid route');
    }

    // Check file path parameter.
    if (!filePath || typeof filePath !== 'string') {
      throw new Error('Missing or invalid file path');
    }

    // Check file name path parameter.
    if (!fileName || typeof fileName !== 'string') {
      throw new Error('Missing or invalid file name');
    }

    // Check file post field name.
    if (filePostFieldName && typeof filePostFieldName !== 'string') {
      throw new Error('Invalid file post field name');
    }

    // Check file name post field name.
    if (fileNamePostFieldName && typeof fileNamePostFieldName !== 'string') {
      throw new Error('Invalid file name post field name');
    }

    // Read file.
    const file = fs.createReadStream(path.resolve(filePath));

    // Form data.
    const formData = {
      [filePostFieldName]: file,
      [fileNamePostFieldName]: fileName,
    };

    // Perform request.
    return this.performRequest(route, HttpMethodsEnum.POST, formData, true);
  }
}

export { RequestDispatcher };
