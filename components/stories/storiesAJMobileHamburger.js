/**
 * Storyboard stories for the AJMobileHamburger component.
 * @author Andrew Jarombek
 * @since 11/24/2019
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {AJMobileHamburger} from '../src';

storiesOf('AJMobileHamburger', module)
  .add('default', () => <AJMobileHamburger />);
