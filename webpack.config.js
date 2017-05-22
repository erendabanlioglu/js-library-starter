"use strict";

const webpack = require('webpack'),
      config = require('./package.json'),
      path = require('path');

require('dotenv').config();
const PROD = process.env.NODE_ENV === 'production';

var plugins = [];
if(PROD){
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }));
}

var libconfig = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: (PROD) ? '[name].min.js' : '[name].js',
    library: process.env.NAME,
    libraryTarget: process.env.TARGET,
    umdNamedDefine: process.env.TARGET === 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",  query: {presets: ['es2015', 'es2016']} }
    ]
  },
  plugins: plugins
};

module.exports = libconfig;
