// Karma configuration

module.exports = function karmaConfig(config) {
  config.set({

    client: {
      captureConsole: true
    },

    frameworks: ['mocha'],

    files:  [
      'test/index.js'
    ],

    // Preprocess matching files before serving them to the browser
    // Available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/index.js': 'webpack'
    },

    // Test results reporter to use
    // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters:  ['dots', 'coverage'],

    logLevel:   config.LOG_ERROR,

    browsers:   process.env.TRAVIS ? ['Chrome_travis_ci'] : ['PhantomJS'],

    customLaunchers: {
      Chrome_travis_ci: {
        base:   'Chrome',
        flags:  ['--no-sandbox']
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    // Tell Karma with webpack config to use
    // eslint-disable-next-line global-require
    webpack: require('./webpack/configs/config.test'),

    webpackMiddleware: {
      noInfo: true
    },

    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },

    // Tell karma all the plugins we're going to be using to prevent warnings
    plugins: [
      'karma-mocha',
      'karma-webpack',

      // launchers
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',

      // preprocessors
      'karma-coverage',
      'karma-sourcemap-loader'
    ],

    // Configure the coverage reporter
    coverageReporter: {
      dir:  'coverage/',
      type: 'html'
    }
  });
};
