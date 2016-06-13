# Mule Match [![Build Status][1]][2] [![Coverage Status][7]][8] [![Dependency Status][3]][4] [![Dev Dependency Status][5]][6]

[1]: https://travis-ci.org/mulesoft-labs/mule-match.svg?branch=master
[2]: https://travis-ci.org/mulesoft-labs/mule-match
[3]: https://gemnasium.com/mulesoft-labs/mule-match.svg
[4]: https://gemnasium.com/mulesoft-labs/mule-match#info=dependencies&view=table
[5]: https://david-dm.org/mulesoft-labs/mule-match/dev-status.svg
[6]: https://david-dm.org/mulesoft-labs/mule-match#info=devDependencies&view=table
[7]: https://coveralls.io/repos/github/mulesoft-labs/mule-match/badge.svg?branch=master
[8]: https://coveralls.io/github/mulesoft-labs/mule-match?branch=master

A simple swapping app to use as a Reference app for React applications.

![Mule match](app-sample.png)

This app is built using the following tools:

* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Webpack](https://webpack.github.io/)
* [Babel](https://babeljs.io/)
* [Karma](http://karma-runner.github.io/), [Mocha](https://mochajs.org/) & [Enzyme](https://github.com/airbnb/enzyme) for testing

### Getting Started

Run the following commands:

```
npm install

npm start # Starts the development server on port 9999
```

### Testing

Tests are written using [Mocha](https://mochajs.org/) and [Enzyme from Airbnb] (https://github.com/airbnb/enzyme) and they run with [Karma](http://karma-runner.github.io/).

You can run all of them with the following commands:

```
npm run test # Runs the the tests once with coverage

npm run test:watch # Watches the test & source files and re runs the tests when a change is detected
```
