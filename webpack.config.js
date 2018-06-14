/* eslint-env node */
/* eslint no-var: 0 */

"use strict"

const ENVIRONMENT = process.env.NODE_ENV || "development"
const resolve = require("path").resolve
const metaAttributes = require("./app/resources/meta-attributes.json")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require("path")

const joinP = path.join.bind(null, __dirname)

exports.devtool = "source-map"

exports.entry = [
  "./app/index.js"
]

exports.module = {
  loaders: [],
  noParse: /\.min\.js/
}

exports.output = {
  filename: "[name]-[hash].js",
  path: resolve(__dirname, "dist"),
  publicPath: "/",
  sourceMapFilename: "[name]-[hash].map"
}

exports.plugins = [
  new HtmlWebpackPlugin({
    meta: metaAttributes,
    template: "app/index.ejs"
  }),
  new CopyWebpackPlugin([{
    from: joinP('./media'),
    to: 'media'
  }])
]

exports.remarkable = {
  html: true,
  preset: "full",
  linkify: true,
  typographer: true
}

exports.resolve = {
  modulesDirectories: [
    "app",
    "node_modules"
  ],
  extensions: [
    "",
    ".js",
    ".json"
  ]
}

exports.module.loaders.push(
  {test: /\.png$/, loader: "url-loader?prefix=img/&limit=8192"},
  {test: /\.html$/, loader: "html-loader"},
  {test: /\.svg$/, loader: "url-loader?mimetype=image/svg+xml"},
  {test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=8192"},
  {test: /\.gif$/, loader: "url-loader?prefix=img/&limit=8192"},
  {test: /\.woff$/, loader: "url-loader?prefix=font/&limit=8182"},
  {test: /\.woff2$/, loader: "url-loader?prefix=font/&limit=8182"},
  {test: /\.md$/, loader: "html!remarkable"},
  {test: /\.styl$/, loader: "style-loader?singleton!css-loader!stylus-loader?paths=app/resources/"},
  {test: /\.json$/, loader: "json-loader", exclude: /node_modules/},
  {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/}
)

if (ENVIRONMENT === "development") {
  exports.module.preLoaders = [{
    exclude: /node_modules/,
    loader: "eslint-loader",
    test: /\.js$/
  }]

  exports.entry.unshift("webpack-dev-server/client?http://0.0.0.0:8080")
}
