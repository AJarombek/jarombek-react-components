/**
 * Storyboard stories for the AJNavTextCircle component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React from 'react';
import { AJNavTextCircle } from '../src';

export default {
  title: 'AJ/NavTextCircle',
  component: AJNavTextCircle,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => <AJNavTextCircle text="Previous Page" direction="down" onClick={(f) => f} />,
};

export const Left = {
  render: () => <AJNavTextCircle text="Previous Page" textSide="left" direction="down" onClick={(f) => f} />,
};
