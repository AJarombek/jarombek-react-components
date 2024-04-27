# jarombek-react-components

### Overview

Reusable React.js components for my [SaintsXCTF](https://saintsxctf.com) and [Jarombek.com](https://jarombek.com) 
websites, along with any prototypes I create.

### Commands

```bash
# Install the dependencies for the project
nvm use v20.11.0
yarn

# Start Storyboard
yarn storybook

# Run the component tests
yarn test

# Build the distributable bundle
yarn build
```

### Files

| Filename              | Description                                                                               |
|-----------------------|-------------------------------------------------------------------------------------------|
| `.github`             | GitHub configuration files and GitHub Actions CI/CD pipelines.                            |
| `.storybook`          | Configuration for Storybook, which displays my reusable components in a UI.               |
| `components`          | Source code for the reusable React components.                                            |
| `dist`                | Bundled and minified JavaScript code used when importing this repository as a dependency. |
| `.babelrc`            | Configuration for the Babel transpiler.                                                   |
| `.eslintrc.js`        | Configuration for the ESLint JavaScript/React linter.                                     |
| `.huskyrc`            | Pre-commit hooks for the repository.  Runs tests before allowing commits to be pushed.    |
| `index.d.ts`          | Type definitions for components.  Used by TypeScript code and JavaScript IDEs.            |
| `jest.config.js`      | Configuration for Jest unit testing.                                                      |
| `package.json`        | Entry point for the npm application.  Contains dependency definitions.                    |
| `webpack.config.js`   | Configuration for the Webpack bundler.                                                    |
| `yarn.lock`           | Versions of each Yarn/npm dependency.                                                     |

### Resources

1) [React Component Library Seed Project](https://github.com/NGimhana/sample_react_component_library_boilerplate)
2) [Webpack MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
3) [Remove Comments without Minifying with Webpack](https://stackoverflow.com/a/48753870)
