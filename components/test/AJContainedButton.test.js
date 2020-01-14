/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJContainedButton} component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import AJContainedButton from '../src/AJContainedButton/AJContainedButton';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(
      <AJContainedButton disabled={false}>Test Contained Button</AJContainedButton>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
