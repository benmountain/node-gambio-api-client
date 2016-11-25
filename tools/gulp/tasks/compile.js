import typeScript from 'gulp-typescript';
import merge from 'merge2';
import { paths, extensions, fileContents, globs } from './../values';

module.exports = gulp => {
  const result = gulp.src(`${paths.directories.source}/${globs.recursive}.${extensions.scripts}`)
    .pipe(typeScript(fileContents.tsConfig));

  return merge([
    result.dts.pipe(gulp.dest(paths.destination.definitions)),
    result.js.pipe(gulp.dest(paths.destination.scripts))
  ]);
};