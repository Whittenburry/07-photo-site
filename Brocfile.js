const Merge = require('broccoli-merge-trees');
const Sass = require('broccoli-sass');
const Autoprefixer = require('broccoli-autoprefixer');
const LiveReload = require('broccoli-inject-livereload');

let public = new LiveReload('public');

if (process.env.EMBER_ENV === 'production') {
  public = 'public';
}

const stylePaths = [
  'styles',
  'node_modules/normalize-css',
  'node_modules/font-awesome/scss',
  'node_modules/yoga-sass/assets',
  'node_modules/cssgram/source/scss',
];

const styles = new Sass(stylePaths, 'app.scss', 'app.css');

module.exports = new Merge([public, new Autoprefixer(styles)]);
