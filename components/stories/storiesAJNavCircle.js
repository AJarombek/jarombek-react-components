/**
 * Storyboard stories for the AJNavCircle component.
 * @author Andrew Jarombek
 * @since 11/24/2019
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {AJNavCircle} from '../src';

storiesOf('AJNavCircle', module)
  .add('default', () => <AJNavCircle direction="down" onClick={f=>f} />)
  .add('up', () => <AJNavCircle direction="up" height="40px" onClick={f=>f} />)
  .add('left', () => <AJNavCircle direction="left" height="50px" onClick={f=>f} />)
  .add('right', () => <AJNavCircle direction="right" height="2em" onClick={f=>f} />);
