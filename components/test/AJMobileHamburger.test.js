/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJMobileHamburger} component.
 * @author Andrew Jarombek
 * @since 11/26/2019
 */

import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import AJMobileHamburger from '../src/AJMobileHamburger/AJMobileHamburger';

describe('unit tests', () => {
  it('renders', () => {
    const wrapper = shallow(<AJMobileHamburger />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div, button, and span', () => {
    const wrapper = shallow(<AJMobileHamburger />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').childAt(0).type()).toEqual('button');
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').childAt(0).type()).toEqual('span');
  });

  it('initially renders inactive', () => {
    const wrapper = shallow(<AJMobileHamburger />);
    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerInactive)(-\d+)/)).toBe(true);
    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerActive)(-\d+)/)).toBe(false);
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('default onClick function makes component active', () => {
    const wrapper = shallow(<AJMobileHamburger />);
    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerActive)(-\d+)/)).toBe(false);
    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerInactive)(-\d+)/)).toBe(true);

    // Clicking the component transforms it into an active state.  The animation is done is CSS.
    expect(wrapper.find('div').simulate('click'));
    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerActive)(-\d+)/)).toBe(true);
    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerInactive)(-\d+)/)).toBe(false);

    // Clicking the component a second time reverts it into an inactive state.
    expect(wrapper.find('div').simulate('click'));
    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerActive)(-\d+)/)).toBe(false);
    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerInactive)(-\d+)/)).toBe(true);
  });
});

describe('integration tests', () => {
  it('accepts additional onClick logic', () => {
    const Parent = ({ children }) => {
      // The AJMobileHamburger is commonly used for mobile menu dropdowns.  This state simulates
      // displaying or hiding a mobile dropdown based on the status of the AJMobileHamburger.
      const [visible, setVisible] = useState(false);
      return (
        <div>
          <p>Mobile Dropdown Visible: {visible ? 'Yes' : 'No'}</p>
          {children(visible, setVisible)}
        </div>
      );
    };

    const wrapper = mount(
      <Parent>{(visible, setVisible) => <AJMobileHamburger onClick={() => setVisible(!visible)} />}</Parent>,
    );

    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerActive)(-\d+)/)).toBe(false);
    expect(wrapper.find('p').text()).toEqual('Mobile Dropdown Visible: No');

    wrapper.find('div').at(1).simulate('click');
    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerActive)(-\d+)/)).toBe(true);
    expect(wrapper.find('p').text()).toEqual('Mobile Dropdown Visible: Yes');

    wrapper.find('div').at(1).simulate('click');
    expect(wrapper.find('span').hasClass(/(ajMobileHamburgerActive)(-\d+)/)).toBe(false);
    expect(wrapper.find('p').text()).toEqual('Mobile Dropdown Visible: No');
  });
});
