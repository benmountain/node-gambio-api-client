/// <reference types="core-js" />
interface GetOptionsInterface {
    /**
     * Which page to show?
     * Use only in conjuction with 'entriesPerPage' value.
     * @type {Number}
     */
    page?: number;
    /**
     * How many entries to show per page?
     * @type {Number}
     */
    entriesPerPage?: number;
    /**
     * Sort fields (maximum 5).
     * @example
     *  {
     *    'lastname': '+',
     *    'firstname': '-',
     *  }
     * @type {Object}
     */
    sort?: {
        key: '+' | '-';
    } | any;
    /**
     * Include only these fields.
     * @type {String[]}
     */
    minimize?: Array<String>;
}
export { GetOptionsInterface };
