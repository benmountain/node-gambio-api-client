import { RequestOptionsAuthInterface } from '.';

interface RequestOptionsInterface {
  // Request headers.
  headers: {};

  // Request authentication.
  auth: RequestOptionsAuthInterface

  // Convert request body to JSON string?
  json: boolean;
}

export { RequestOptionsInterface };
