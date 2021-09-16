import { option, task, argv, addResolvePath, prettierCheckTask, prettierTask, series, parallel, condition } from 'just-scripts';

import { clean } from './tasks/clean';
import { copy } from './tasks/copy';
import { ts } from './tasks/ts';
import { eslint } from './tasks/eslint';
import { webpack, webpackDevServer } from './tasks/webpack'
const { jest, jestWatch } = require('./tasks/jest');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function preset() {
  // this add s a resolve path for the build tooling deps like TS from the scripts folder
  addResolvePath(__dirname);

  option('production');
  option('watch');

  option('webpackConfig', { alias: 'w' });

  // Build only commonjs (not other TS variants) but still run other tasks
  option('commonjs');

  // for options that have a check/fix switch this puts them into fix mode
  option('fix');

  task('clean', clean);
  task('copy', copy);
  task('jest', argv().watch ? jestWatch : jest);

  task('ts:commonjs', ts.commonjs);
  task('ts:esm', ts.esm);
  task('eslint', eslint);
  task('ts:commonjs-only', ts.commonjsOnly);
  task('webpack', webpack);
  task('webpack-dev-server', webpackDevServer);
  task('prettier', () => (argv().fix ? prettierTask({ files: ['src/.'] }) : prettierCheckTask({ files: ['src/.'] })));

  task('tsall', parallel('ts:commonjs', 'ts:esm'));
  task(
    'ts',
    series(
      condition('ts:commonjs-only', () => !!argv().commonjs),
      condition('tsall', () => !argv().commonjs),
    ),
  );

  task('code-style', series('prettier', 'eslint'));
  task('dev', series('clean', 'copy', 'webpack-dev-server'));

  task('bundle', series('webpack'));

  task('build', series('clean', 'copy', 'ts'));
}
