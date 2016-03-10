const Merge = require('broccoli-merge-trees');
const Sass = require('broccoli-sass');
const LiveReload = require('broccoli-inject-livereload');

const public = new LiveReload('public');

const stylePaths = [
  'styles',
  'node_modules/normalize-css',
  'node_modules/font-awesome/scss',
  'node_modules/yoga-sass/assets',
];

const styles = new Sass(stylePaths, 'app.scss', 'app.css');

module.exports = new Merge([public, styles]);
