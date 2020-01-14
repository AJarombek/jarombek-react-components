/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJSwitch} component.
 * @author Andrew Jarombek
 * @since 1/1/2020
 */

import React from 'react';
import {shallow} from 'enzyme';
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

    expect(wrapper.find('div').at(0).simulate('click'));
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveBeenLastCalledWith(true);
  });

  it('has a functional onChange method when initialState is true', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<AJSwitch onChange={onChange} initialState={true} />);

    expect(wrapper.find('div').at(0).simulate('click'));
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(false);

    expect(wrapper.find('div').at(0).simulate('click'));
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenLastCalledWith(true);
  });

  it('onChange is not called when disabled', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<AJSwitch onChange={onChange} disabled={true} />);

    expect(wrapper.find('div').at(0).simulate('click'));
    expect(onChange).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('still toggles when onChange is not a function', () => {
    const wrapper = shallow(<AJSwitch onChange="I should be a function" />);

    expect(wrapper.find('div').at(0).hasClass(/(ajSwitchInactive)(-\d+)/)).toBe(true);
    expect(wrapper.find('div').at(0).simulate('click'));
    expect(wrapper.find('div').at(0).hasClass(/(ajSwitchActive)(-\d+)/)).toBe(true);
  });
});
