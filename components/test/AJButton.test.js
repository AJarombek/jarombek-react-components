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

describe('integration tests', () => {

  it('renders a text button', () => {
    const wrapper = mount(<AJButton type="text" disabled={false}>Text Button</AJButton>);
    expect(wrapper.find('div').hasClass('aj-text-button')).toBe(true);
  });

  it('renders a contained button', () => {
    const wrapper = mount(<AJButton type="contained" disabled={false}>Contained Button</AJButton>);
    expect(wrapper.find('div').hasClass('aj-contained-button')).toBe(true);
  });

  it('renders a outlined button', () => {
    const wrapper = mount(<AJButton type="outlined" disabled={false}>Outlined Button</AJButton>);
    expect(wrapper.find('div').hasClass('aj-outlined-button')).toBe(true);
  });

  it('renders nothing if an invalid type is entered', () => {
    const wrapper = mount(<AJButton type="invalid" disabled={false}>Invalid Button</AJButton>);
    expect(wrapper.html()).toBeNull();
  });
});

describe('integration tests', () => {

  it("button is disabled when prop 'disabled' is undefined", () => {
    const wrapper = mount(
      <AJButton type="text">Test Enabled Button</AJButton>
    );
    expect(wrapper.find('button').prop('disabled')).toEqual(false);
  });
});
