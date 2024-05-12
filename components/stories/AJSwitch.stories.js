/**
 * Storyboard stories for the AJSwitch component.
 * @author Andrew Jarombek
 * @since 12/31/2019
 */

import React from 'react';
import { AJLoadingDots, AJSwitch } from '../src';

export default {
  title: 'AJ/LoadingDots',
  component: AJLoadingDots,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => <AJSwitch onChange={(state) => console.info(`AJSwitch state: ${state}`)} disabled={false} />,
};

export const Disabled = {
  render: () => (
    <AJSwitch
      onChange={(state) => console.info(`Disabled AJSwitch state: ${state}`)}
      initialState={true}
      disabled={true}
    />
  ),
};
