/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJButton} component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import AJButton from '../src/AJButton/AJButton';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<AJButton type="text" disabled={false}>Test Button</AJButton>);
    expect(wrapper.exists()).toBe(true);
  });
});
