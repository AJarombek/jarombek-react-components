/**
 * Webpack configuration specific to the Storybook UI.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

const path = require('path');

module.exports = {
  plugins: [],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      }
    ],
  },
};
