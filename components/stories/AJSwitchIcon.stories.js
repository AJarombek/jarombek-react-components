/**
 * Storyboard stories for the AJSwitchIcon component.
 * @author Andrew Jarombek
 * @since 1/1/2020
 */

import React from 'react';
import { AJSwitchIcon } from '../src';

export default {
  title: 'AJ/SwitchIcon',
  component: AJSwitchIcon,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => (
    <AJSwitchIcon
      offImageUrl="https://asset.jarombek.com/jarombek.png"
      onImageUrl="https://asset.jarombek.com/jarombek.png"
      onChange={(f) => f}
      initialState={true}
      disabled={false}
    />
  ),
};
