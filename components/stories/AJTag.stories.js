/**
 * Storyboard stories for the AJTag component.
 * @author Andrew Jarombek
 * @since 5/17/2020
 */

import React from 'react';
import { AJTag } from '../src';

export default {
  title: 'AJ/Tag',
  component: AJTag,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => <AJTag content={<p>Sample Tag</p>} color="rgba(145, 244, 238, 0.4)" />,
};
