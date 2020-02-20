/**
 * Setup Webpack for bundling JavaScript and Sass files.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

const path = require("path");

module.exports = {
  entry: {
    components: path.join(__dirname, "components/index.js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 15000,
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  externals: {
    'react': 'react',
    'highlight.js': 'highlight.js',
    'react-jss': 'react-jss',
    'react-router': 'react-router',
    'react-dom-router': 'react-dom-router'
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial'
        }
      }
    }
  },
  output: {
    path: path.join(__dirname, "dist/"),
    filename: '[name].js',
    publicPath: '',
    libraryTarget: 'umd'
  }
};
