/**
 * Storybook configuration for viewing components.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import { configure } from '@storybook/react';

const loadStories = () => {
  require('../components/stories');
};

configure(loadStories, module);
