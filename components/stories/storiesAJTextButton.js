/**
 * Storyboard stories for the AJTextButton component.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {AJTextButton} from '../src';

storiesOf('AJTextButton', module)
  .add('default', () => <AJTextButton />);
