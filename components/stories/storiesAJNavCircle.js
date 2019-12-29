/**
 * Storyboard stories for the AJNavCircle component.
 * @author Andrew Jarombek
 * @since 11/24/2019
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {AJNavCircle} from '../src';

storiesOf('AJNavCircle', module)
  .add('default', () => <AJNavCircle direction="down" />);
