'use strict';

let webpack = require('webpack');

let APP_DIR = __dirname + '/react/js';
let BUILD_DIR = __dirname + '/react';
let reactCompiler = webpack({
    entry: APP_DIR + '/app.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
});

startWatcher(reactCompiler);

function startWatcher (compiler) {
    return compiler.watch({}, function (err, stats) {
        if (err) {
            console.log(err);
        }

        let jsonStats = stats.toJson();

        if (jsonStats.errors.length) {
            console.log(jsonStats.errors);
        }

        if (jsonStats.warnings.length) {
            console.log(jsonStats.warnings);
        }

        console.log('built ' + jsonStats.assetsByChunkName.main + ' in ' + jsonStats.time + 'ms');
    });
}
