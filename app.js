var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var itemsRouter = require('./routes/items');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
});

var app = express();

app.options('*', cors());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/items', itemsRouter);

module.exports = app;

var PORT = 8080;
app.listen(PORT, function() {
    console.log('Running on port : '+PORT);
})