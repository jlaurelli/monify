"use strict";

var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    context: __dirname,

    entry: "./assets/js/index",

    output: {
        path: path.resolve("./assets/bundles/"),
        filename: "[name]-[hash].js",
    },

    plugins: [
        new BundleTracker({filename: "./webpack-stats.json"}),
    ],

    module: {
        loaders: [
            // Transforms JSX into JS
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react"]
                }
            },
        ],
    },

    resolve: {
        modulesDirectories: ["node_modules", "bower_components"],
        extensions: ["", ".js", ".jsx"]
    },
};
