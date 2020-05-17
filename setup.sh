#!/usr/bin/env bash

# Setup my reusable React component library
# Author: Andrew Jarombek
# Date: 11/15/2019

npx create-react-app jarombek-react-components

nvm use v10.15.3
yarn

nvm use v10.15.3
yarn test

# Install and start storybook to view the component library.
npx -p @storybook/cli sb init
yarn storybook
yarn run storybook
