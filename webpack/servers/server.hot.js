var path                  = require('path');
var Express               = require('express');
var webpack               = require('webpack');
var webpackDevMiddleware  = require('webpack-dev-middleware');
var webpackHotMiddleware  = require('webpack-hot-middleware');
var config                = require('../configs/config.hot');

var app       = new Express();
var port      = process.env.PORT || 9999;
var compiler  = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo:             true,
  publicPath:         config.output.publicPath,
  historyApiFallback: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
  }
});
