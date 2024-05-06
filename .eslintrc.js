/**
 * Linting configuration for the component library.
 * @author Andrew Jarombek
 * @since 11/15/2019
 */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  parser: "@babel/eslint-parser",
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    // 'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: [
    "prettier",
    "react-hooks"
  ],
  rules: {
    "comma-dangle": ["off"],
    "max-len": ["error", {"code" : 120}],
    "quotes": "off",
    "react/prop-types": ["off"],
    "react/no-unescaped-entities": ["off"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-var": "error",
    "prefer-const": "error",
    "no-console": "off",
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "printWidth": 120,
      "semi": true,
    }]
  },
  ignorePatterns: [
    'node_modules/**',
    'webpack.config.js',
    'jest.config.js',
    '.eslintrc.js'
  ]
};
