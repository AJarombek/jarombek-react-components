/**
 * Storyboard stories for the AJNotificationCircle component.
 * @author Andrew Jarombek
 * @since 8/15/2020
 */

import React from 'react';
import { AJNotificationCircle } from '../src';

export default {
  title: 'AJ/NotificationCircle',
  component: AJNotificationCircle,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => <AJNotificationCircle count={10} />,
};
