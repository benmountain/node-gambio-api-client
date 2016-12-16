import del from 'del';
import { paths } from './../values';

module.exports = gulp => del(paths.directories.destination);