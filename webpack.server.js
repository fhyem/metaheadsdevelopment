/* eslint-disable no-undef */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: 'inline-source-map',
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server_bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, loader: 'ignore-loader' },
      {
        test: /\.(png|jpg|gif|GIF|xml|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  externals: [nodeExternals()],
};
