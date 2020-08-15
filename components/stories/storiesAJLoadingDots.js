/**
 * Storyboard stories for the AJMobileHamburger component.
 * @author Andrew Jarombek
 * @since 11/24/2019
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import { AJLoadingDots } from '../src';

storiesOf('AJLoadingDots', module)
  .add('default', () => <AJLoadingDots />);
