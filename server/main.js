'use strict';

var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    log = require('debug')('pub:main:info'),
    debug = require('debug')('pub:main:debug'),
    emailCollector = require('./emailCollector'),
    app = express(),
    server;

app.use(cookieParser('ashleys-pub-asdf1234'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'jade');


MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    if (err) {
        log(err);
    } else {
        db.close();
    }
});

server = app.listen('8080', function() {
   var host = server.address().host,
       port = server.address().port;

    debug("Server listening at " + host + ":" + port);
});

app.get('/', function(req, res) {
    res.render('home');
    debug("rendering home page");
});

app.get('/template/:templateName', function(req, res) {
    debug("Loading template " + req.params.templateName);
    res.render('templates/' + req.params.templateName);
});

app.post('/saveEmail', emailCollector);
