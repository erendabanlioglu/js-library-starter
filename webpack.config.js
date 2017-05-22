"use strict";

const WEBPACK = require('webpack'),
      CONFIG = require('./package.json'),
      PATH = require('path');

require('dotenv').config();
const NAME = process.env.NAME,
      TARGET = process.env.TARGET,
      PROD = process.env.NODE_ENV === 'production';

var plugins = [];
if(PROD){
  plugins.push(new WEBPACK.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }));
}

var libconfig = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: (PROD) ? NAME+'.min.js' : NAME+'.js',
    library: NAME,
    libraryTarget: TARGET,
    umdNamedDefine: TARGET === 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",  query: {presets: ['es2015', 'es2016']} }
    ]
  },
  plugins: plugins
};

module.exports = libconfig;
