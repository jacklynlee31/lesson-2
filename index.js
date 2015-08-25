var express = require('express');
var request = require('request');
var cors = require('cors');
var app = express();

app.use(cors());

app.use('/*', function (req, res) {
  var path = req.originalUrl;

  request('https://api.forecast.io/forecast/9488a7ad4e369110f040f13c44b2a77d' + path).pipe(res);
});

app.listen(process.env.PORT || 3000);
