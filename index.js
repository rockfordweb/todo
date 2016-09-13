'use strict';

let express = require('express');
let app = express();

// serve common files for e.g. theming, utils
app.use('/public', express.static(__dirname + '/common'));

app.use('/react', express.static(__dirname + '/react'));
// app.use('/angular', express.static(__dirname + '/angular'));

// build script for react watcher, et. al.
require('./build');

app.listen('9000', function () {
    console.log('serving...');
});
