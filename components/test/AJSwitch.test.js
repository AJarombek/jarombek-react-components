/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJSwitch} component.
 * @author Andrew Jarombek
 * @since 1/1/2020
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import AJSwitch from '../src/AJSwitch/AJSwitch';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<AJSwitch onChange={f=>f} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('has a functional onChange method', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<AJSwitch onChange={onChange} />);

    expect(wrapper.find('div').at(0).simulate('click'));
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);

    expect(wrapper.find('div').at(0).simulate('click'));
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenLastCalledWith(false);
  });
});
