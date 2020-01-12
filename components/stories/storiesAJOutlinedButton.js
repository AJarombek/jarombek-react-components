/**
 * Storyboard stories for the AJOutlinedButton component.
 * @author Andrew Jarombek
 * @since 1/11/2020
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJOutlinedButton} from '../src';

storiesOf('AJOutlinedButton', module)
  .add('default', () => <AJOutlinedButton children="Outlined Button" />)
  .add('disabled', () => <AJOutlinedButton disabled={true}>Outlined Button</AJOutlinedButton>);
