var express = require('express'),
    app = express(),
    router = express.Router(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./app/config'),
    routes = require('./app/routes'),
    User = require('./app/models/user'),
    Post = require('./app/models/post');

mongoose.Promise = global.Promise;
mongoose.connect(config.database);

app.use(express.static('public'))
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', routes(router));

app.listen(port);
console.log('Drooper RESTful API server started on: ' + port);
