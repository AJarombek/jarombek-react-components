/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJNavCircle} component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React from 'react';
import { shallow } from 'enzyme';
import AJNavCircle from '../src/AJNavCircle/AJNavCircle';

describe('unit tests', () => {
  it('renders', () => {
    const wrapper = shallow(<AJNavCircle height="40px" active={true} direction="down" onClick={(f) => f} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders defaults', () => {
    const wrapper = shallow(<AJNavCircle direction="down" onClick={(f) => f} />);
    expect(wrapper.find('div').hasClass(/(active)(-\d+)/)).toBe(true);
    expect(wrapper.find('div').hasClass(/(inactive)(-\d+)/)).toBe(false);
  });

  it('renders an upwards button', () => {
    const wrapper = shallow(<AJNavCircle height="40px" active={true} direction="up" onClick={(f) => f} />);
    expect(wrapper.find('img').hasClass(/(up)(-\d+)/)).toBe(true);
  });

  it('renders an active button', () => {
    const wrapper = shallow(<AJNavCircle height="20px" active={true} direction="left" onClick={(f) => f} />);
    expect(wrapper.find('div').hasClass(/(active)(-\d+)/)).toBe(true);
    expect(wrapper.find('div').hasClass(/(inactive)(-\d+)/)).toBe(false);
  });

  it('renders an inactive button', () => {
    const wrapper = shallow(<AJNavCircle height="20px" active={false} direction="right" onClick={(f) => f} />);
    expect(wrapper.find('div').hasClass(/(inactive)(-\d+)/)).toBe(true);
  });
});
