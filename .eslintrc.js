/**
 * Linting configuration for the component library.
 * @author Andrew Jarombek
 * @since 11/15/2019
 */

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended'
  ],
  parser: "babel-eslint"
};
