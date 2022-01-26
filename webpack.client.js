/* eslint-disable no-undef */
const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = process.env.NODE_ENV || 'development';

let devtool = 'inline-source-map';

if (mode === 'production') {
  devtool = 'none';
}
module.exports = {
  mode: mode,
  target: 'web',
  devtool: devtool,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build/public'),
    filename: 'client_bundle_V5.js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.(png|jpg|gif|xml|GIF|webp|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              import: true,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              postcssOptions: {
                plugins: () => [
                  require('postcss-import'),
                  require('postcss-flexbugs-fixes'),
                  require('postcss-custom-media'),
                  require('postcss-mixins'),
                  require('postcss-nested'),
                  require('postcss-simple-vars'),
                  require('postcss-sass-color-functions'),
                  require('postcss-calc'),
                  autoprefixer({
                    overrideBrowserslist: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/main.css',
          to: 'main_V5.css',
          force: true,
        },
        {
          from: 'src/config/config.json',
          to: '',
          force: true,
        },
        {
          from: 'src/config/abi.json',
          to: '',
          force: true,
        },
      ],
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
