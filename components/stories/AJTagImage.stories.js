/**
 * Storyboard stories for the AJTagImage component.
 * @author Andrew Jarombek
 * @since 5/17/2020
 */

import React from 'react';
import { AJTagImage } from '../src';

export default {
  title: 'AJ/TagImage',
  component: AJTagImage,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => (
    <AJTagImage content={<p>Sample Tag</p>} picture="https://asset.jarombek.com" color="rgba(145, 244, 238, 0.4)" />
  ),
};
