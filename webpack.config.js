/**
 * Setup Webpack for bundling JavaScript and Sass files.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

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
    'react-jss': 'react-jss'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
            beautify: true
          },
          mangle: false,
          compress: false
        }
      })
    ],
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
