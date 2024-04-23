/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJOutlinedButton} component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AJOutlinedButton from '../src/AJOutlinedButton/AJOutlinedButton';

describe('unit tests', () => {
  it('renders', () => {
    const wrapper = shallow(<AJOutlinedButton disabled={false}>Test Outlined Button</AJOutlinedButton>);
    expect(wrapper.exists()).toBe(true);
  });
});
