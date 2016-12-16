import path from 'path';

const directories = {
  source: path.join(__dirname, '..', '..', 'source'),
  destination: path.join(__dirname, '..', '..', 'distribution'),
};

const destination = {
  definitions: path.join(directories.destination, 'definitions'),
  scripts: path.join(directories.destination, 'scripts'),
};

export { directories, destination };