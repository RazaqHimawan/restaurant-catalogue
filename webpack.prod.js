const { GenerateSW } = require('workbox-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new GenerateSW({
      runtimeCaching: [
        {
          urlPattern: /.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'kloudbret-cache-v1',
          },
        },
      ],
      swDest: './sw.bundle.js',
    }),
  ],
});
