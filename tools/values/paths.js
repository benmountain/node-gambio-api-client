import path from 'path';

/**
 * Directory paths.
 * @type {Object}
 */
const directories = {
  source: path.join(__dirname, '..', '..', 'source'),
  destination: path.join(__dirname, '..', '..', 'distribution'),
};

/**
 * Destination directory paths.
 * @type {Object}
 */
const destination = {
  definitions: path.join(directories.destination, 'definitions'),
  scripts: path.join(directories.destination, 'scripts'),
};

export { directories, destination };