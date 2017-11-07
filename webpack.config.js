const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ejs = require('ejs!client/index.ejs')
console.log(debug,'--------------------------------debug--------------------------------')
module.exports = {
  cache: true,
  context: path.join(__dirname, "client"),
  devtool: debug ? "eval-source-map" : null,
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    path.join(__dirname, 'client/js/client.js')
  ],
  output: {
    path: __dirname + "/dist/",
    filename: "client.min.js",
    publicPath: '/'
  },
  plugins: debug ? [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      title: 'Custom template',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("development") 
      }
    }),
    new ExtractTextPlugin('app.css',{allChunks: true})
  ] : [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      title: 'Custom template',
      filename: 'index.html'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("production") 
      }
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  ],
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      actions: 'client/js/actions',
      components: 'client/js/components',
      css: 'client/css',
      functions: 'client/js/functions',
      reducers: 'client/js/reducers',
      store: 'client/js/store',
      config: 'client/config'
    },
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|config|logs|public|server|storage)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'react-hmre'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }, {
        test: /\.json?$/,
        exclude: /(node_modules|bower_components|config|logs|public|server|storage)/,
        loader: 'json'
      }, {
        test: /\.ejs$/,
        exclude: /(node_modules|bower_components|config|logs|public|server|storage)/,
        loader: 'ejs-loader'
      }, {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components|config|logs|public|server|storage)/,
        loader: ExtractTextPlugin.extract('style!css!sass', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: __dirname + '/client/css'
      },
    ]
  }

};
