const path = require("path");

module.exports = {
  entry: {
    components: path.join(__dirname, "components/src/index.js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist/"),
    filename: '[name].js'
  }
};
