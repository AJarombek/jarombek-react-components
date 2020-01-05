/**
 * Setup Jest for component unit tests.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

module.exports = {
  displayName: "components",
  testEnvironment: "jsdom",
  testMatch: ["**/test/**/*.test.js"],
  setupFilesAfterEnv: ["<rootDir>/components/test/setupTests.js"],
  maxConcurrency: 5,
  moduleNameMapper: {
    "\\.(png)$": "../../test/mocks/fileMock.js"
  },
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: ["components/src/**/*.js"],
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    "global": {
      "branches": 95,
      "functions": 95,
      "lines": 95,
      "statements": 95
    }
  },
};
