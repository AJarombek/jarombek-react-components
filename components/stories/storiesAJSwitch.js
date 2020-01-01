/**
 * Storyboard stories for the AJSwitch component.
 * @author Andrew Jarombek
 * @since 12/31/2019
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJSwitch} from '../src';

storiesOf('AJSwitch', module)
  .add('default', () => <AJSwitch disabled={false} />);
