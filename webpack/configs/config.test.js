var config    = require('config');
var path      = require('path');
var webpack   = require('webpack');
var aliases   = require('../aliases');
var rootPath  = path.resolve(__dirname, '../../');

// required for enzyme to work properly
aliases['sinon'] = 'sinon/pkg/sinon';

module.exports = {
  devtool: 'inline-source-map',
  output: {
    path: path.join(rootPath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(config.get('CONFIG'))
    })
  ],

  resolve: {
    // Allow us to import components in tests like:
    // import Example from 'components/Example'
    root: [rootPath, path.join(rootPath, 'src'), path.join(rootPath, 'test')],
    extensions: ['', '.js', '.json'],
    alias: {
      // required for enzyme to work properly
      'sinon': 'sinon/pkg/sinon',
      'components': 'src/components',
      'containers': 'src/containers',
      'domains':    'src/domains',
      'services':   'src/services'
    }
  },

  module: {
    // don't run babel-loader through the sinon module
    noParse: [
      /node_modules\/sinon\//
    ],
    loaders: [
      // js (code + unit tests)
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [path.join(rootPath, 'src'), path.join(rootPath, 'test')]
      },
      // json (for cheerios, see https://github.com/airbnb/enzyme/issues/309)
      {
        test: /\.json$/,
        loaders: ['json-loader'],
        include: rootPath
      },
      // CSS
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        include: path.join(rootPath, 'src')
      }
    ]
  },

  externals: {
    // Required for enzyme to work properly
    'jsdom': 'window',
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
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
