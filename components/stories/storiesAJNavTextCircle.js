/**
 * Storyboard stories for the AJNavTextCircle component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJNavTextCircle} from '../src';

storiesOf('AJNavTextCircle', module)
  .add('default', () =>
    <AJNavTextCircle
      text="Previous Page"
      direction="down"
      onClick={f=>f} />
  )
  .add('left', () =>
    <AJNavTextCircle
      text="Previous Page"
      textSide="left"
      direction="down"
      onClick={f=>f} />
  );
