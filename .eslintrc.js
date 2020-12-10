/**
 * Linting configuration for the component library.
 * @author Andrew Jarombek
 * @since 11/15/2019
 */

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/require-default-props': ['off'],
    'react/jsx-boolean-value': ['off'],
  },
  ignorePatterns: ['webpack.config.js', 'jest.config.js', 'index.d.ts'],
};
