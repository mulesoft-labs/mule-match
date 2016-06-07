// Karma configuration

module.exports = function karmaConfig(config) {
  config.set({
    client:     {
      captureConsole: true
    },
    frameworks: ['mocha'],
    files:      [
      './test/*/**.js'
    ],

    // Preprocess matching files before serving them to the browser
    // Available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // Add webpack as preprocessor
      './src/**/*.js':  ['webpack', 'sourcemap'],
      './test/**/*.js': ['webpack', 'sourcemap']
    },

    // Test results reporter to use
    // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters:  ['dots'],

    logLevel:   config.LOG_ERROR,

    browsers:   process.env.TRAVIS ? ['Chrome_travis_ci'] : ['PhantomJS'],

    customLaunchers: {
      Chrome_travis_ci: {
        base:   'Chrome',
        flags:  ['--no-sandbox']
      }
    },

    // Tell Karma with webpack config to use
    // eslint-disable-next-line global-require
    webpack: require('./webpack/configs/config.test'),

    // Tell karma all the plugins we're going to be using to prevent warnings
    plugins: [
      'karma-mocha',
      'karma-webpack',

      // launchers
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',

      // preprocessors
      // 'karma-coverage',
      'karma-sourcemap-loader'
    ]
  });
};
