/**
 * Storyboard stories for the AJContainedButton component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJContainedButton} from '../src';

storiesOf('AJOutlinedButton', module)
  .add('default', () => <AJContainedButton children="Outlined Button" />)
  .add('disabled', () => <AJContainedButton disabled={true}>Outlined Button</AJContainedButton>);
