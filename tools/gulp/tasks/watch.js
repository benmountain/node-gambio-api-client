import watch from 'gulp-watch';
import { paths, globs, extensions } from './../values';

module.exports = gulp => watch(`${paths.directories.source}/${globs.recursive}.${extensions.scripts}`, () => gulp.start('compile'));