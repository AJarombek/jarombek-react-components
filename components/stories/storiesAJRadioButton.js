/* eslint-disable import/no-extraneous-dependencies */

/**
 * Storyboard stories for the AJRadioButton component.
 * @author Andrew Jarombek
 * @since 12/8/2020
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { AJRadioButton } from '../src';

storiesOf('AJRadioButton', module)
  .add('default', () => (
    <>
      <AJRadioButton id="test1" name="test" onChange={() => {}} value="test1" label="Test 1" defaultChecked={false} />
      <AJRadioButton id="test2" name="test" onChange={() => {}} value="test2" label="Test 2" defaultChecked={false} />
    </>
  ));
