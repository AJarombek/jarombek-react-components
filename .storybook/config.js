/**
 * Storybook configuration for viewing components.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import { configure } from '@storybook/react';
import '!style-loader!css-loader!sass-loader!../components/src/index.scss';

const loadStories = () => {
  require('../components/stories');
};

configure(loadStories, module);
