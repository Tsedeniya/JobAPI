var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('express-jwt');

var indexRouter = require('./routes/job-list/index');
var usersRouter = require('./routes/job-list/users-route');
var jobRouter = require('./routes/job-list/jobs-route')
var auth = require('./routes/job-list/auth-route')
var mongoose = require('./config/mongoose')
var app = express();
const  jwt_key  = process.env.ACCESS_TOKEN_SECRET
mongoose.connect();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth',auth);

app.use(jwt({ secret: jwt_key, algorithms: ['HS256']}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jobs',jobRouter);

module.exports = app;
