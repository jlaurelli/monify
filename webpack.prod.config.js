"use strict";

var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
var config = require("./webpack.base.config.js");

config.output.path = path.resolve("./assets/dist");

config.plugins = config.plugins.concat([
    new BundleTracker({filename: "./webpack-stats-prod.json"}),

    // Removes a lot of debugging code in React
    new webpack.DefinePlugin({
        "process.env": {"NODE_ENV": JSON.stringify("production")}
    }),

    // Keeps hashes consistent between compilations
    new webpack.optimize.OccurenceOrderPlugin(),

    // Minifies the code
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
    })
]);

// Add a loader for JSX files with react-hot enabled
config.module.loaders.push(
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
            presets: ["react"]
        }
    },
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "react-hot"
    },
    // For loading Bootstrap's fonts
    {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
    },
    {
        test: /\.(woff2?|svg)$/,
        loader: "url?limit=10000"
    },
    {
        test: /\.(ttf|eot)$/,
        loader: "file"
    },
    // For sending jQuery to Bootstrap's modules
    // Bootstrap 3
    {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: "imports?jQuery=jquery"
    },
    // Bootstrap 4
    {
        test: /bootstrap\/dist\/js\/umd\//,
        loader: "imports?jQuery=jquery"
    }
);

module.exports = config;
