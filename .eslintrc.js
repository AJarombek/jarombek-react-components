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
    // Extend some core rules that are recommended for JS and React
    extends: ['eslint:recommended', 'plugin:react/recommended']
};