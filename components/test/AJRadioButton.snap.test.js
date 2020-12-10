/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJRadioButton} component.
 * @author Andrew Jarombek
 * @since 12/9/2020
 */

import React from 'react';
import { mount } from 'enzyme';
import AJRadioButton from '../src/AJRadioButton/AJRadioButton';

describe('integration tests', () => {
  it('renders radio button group', () => {
    const wrapper = mount(
      <>
        <AJRadioButton id="test1" name="test" onChange={() => {}} value="test1" label="Test 1" defaultChecked={true} />
        <AJRadioButton id="test2" name="test" onChange={() => {}} value="test2" label="Test 2" />
      </>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
