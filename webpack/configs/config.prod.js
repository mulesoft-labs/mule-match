var config    = require('config');
var path      = require('path');
var webpack   = require('webpack');
var aliases   = require('../aliases');
var rootPath  = path.resolve(__dirname, '../../');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/client.js'
  ],

  output: {
    path: path.join(rootPath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(config.get('CONFIG'))
    })
  ],

  progress: true,

  resolve: {
    root: rootPath,
    alias: aliases,
    extensions: ['', '.js']
  },

  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(rootPath, 'src')
    },
    // CSS
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader']
    }
    ]
  },

  postcss: [
    /* Autoprefix for different browser vendors */
    require('autoprefixer'),
    /* Enable css @imports like Sass/Less */
    require('postcss-import'),
    /* Enable nested css selectors like Sass/Less */
    require('postcss-nested'),
    /* Enable extending placeholder selectors like Sass */
    require('postcss-simple-extend'),
    /* Enable Sass-like variables */
    require('postcss-simple-vars')
  ]
};
