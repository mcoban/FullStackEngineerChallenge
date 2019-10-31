'use strict';

var express = require('express');

var _require = require('body-parser'),
    json = _require.json,
    urlencoded = _require.urlencoded;

var cors = require('cors');
var morgan = require('morgan');

// Router Defines
var adminRouter = require('./resources/admin/admin.router');
var employeeRoutuer = require('./resources/employee/employee.router');
var questionRouter = require('./resources/question/question.router');
var reviewRouter = require('./resources/review/review.router');

var app = express();
app.disable('x-powered-by');

// Middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/admin', adminRouter);
app.use('/employee', employeeRoutuer);
app.use('/question', questionRouter);
app.use('/review', reviewRouter);

app.get('/', function (req, res) {
  res.json({
    message: 'hello'
  });
});

var start = function start() {
  app.listen(3000, function () {
    console.log('API Server is running on port 3000.');
  });
};

module.exports.start = start;