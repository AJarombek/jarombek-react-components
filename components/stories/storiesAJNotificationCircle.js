/**
 * Storyboard stories for the AJNotificationCircle component.
 * @author Andrew Jarombek
 * @since 8/15/2020
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import { AJNotificationCircle } from '../src';

storiesOf('AJNotificationCircle', module)
  .add('default', () => <AJNotificationCircle count={10} />);
