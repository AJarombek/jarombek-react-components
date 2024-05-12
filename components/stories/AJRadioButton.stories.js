/**
 * Storyboard stories for the AJRadioButton component.
 * @author Andrew Jarombek
 * @since 12/8/2020
 */

import React from 'react';
import { AJRadioButton } from '../src';

export default {
  title: 'AJ/RadioButton',
  component: AJRadioButton,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => (
    <>
      <AJRadioButton id="test1" name="test" onChange={() => {}} value="test1" label="Test 1" defaultChecked={false} />
      <AJRadioButton id="test2" name="test" onChange={() => {}} value="test2" label="Test 2" defaultChecked={false} />
    </>
  ),
};
