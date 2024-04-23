/**
 * Storyboard stories for the AJTag component.
 * @author Andrew Jarombek
 * @since 5/17/2020
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { AJTag } from '../src';

storiesOf('AJTag', module).add('default', () => {
  return <AJTag content={<p>Sample Tag</p>} color="rgba(145, 244, 238, 0.4)" />;
});
