/**
 * Storyboard stories for the AJButton component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJButton} from '../src';

storiesOf('AJButton', module)
  .add('contained', () => <AJButton type="contained" children="Contained Button" disabled={false}/>)
  .add('outlined', () => <AJButton type="outlined" children="Outlined Button" disabled={true}/>)
  .add('text', () => <AJButton type="text" children="Text Button" disabled={false}/>);
