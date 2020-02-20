/**
 * Storyboard stories for the AJContainedButton component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJContainedButton} from '../src';

storiesOf('AJContainedButton', module)
  .add('default', () => <AJContainedButton children="Contained Button" />)
  .add('disabled', () => <AJContainedButton disabled={true}>Contained Button</AJContainedButton>);
