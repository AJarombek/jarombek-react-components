/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJSwitchIcon} component.
 * @author Andrew Jarombek
 * @since 1/1/2020
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import AJSwitchIcon from '../src/AJSwitchIcon/AJSwitchIcon';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(
      <AJSwitchIcon
        offImageUrl="https://asset.jarombek.com/jarombek.png"
        onImageUrl="https://asset.jarombek.com/jarombek.png"
        onChange={f => f}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
});

describe('integration tests', () => {

  it("has altering 'not selected' classes when the switch is toggled", () => {
    const wrapper = mount(
      <AJSwitchIcon
        offImageUrl="https://asset.jarombek.com/jarombek.png"
        onImageUrl="https://asset.jarombek.com/jarombek.png"
        onChange={f => f}
        initialState={true}
        disabled={false}
      />
    );

    expect(wrapper.find('.aj-switch-icon-on').hasClass(/(ajSwitchIconNotSelected)(-\d+)/))
      .toBe(false);
    expect(wrapper.find('.aj-switch-icon-off').hasClass(/(ajSwitchIconNotSelected)(-\d+)/))
      .toBe(true);

    wrapper.find('.aj-switch').simulate('click');

    expect(wrapper.find('.aj-switch-icon-on').hasClass(/(ajSwitchIconNotSelected)(-\d+)/))
      .toBe(true);
    expect(wrapper.find('.aj-switch-icon-off').hasClass(/(ajSwitchIconNotSelected)(-\d+)/))
      .toBe(false);
  });

  it("still toggles when onChange isn't a function", () => {
    // Mock the console error output (because we expect an error log from this test).
    const consoleErrorSpy = jest.spyOn(console, 'error');
    consoleErrorSpy.mockImplementation(() => {});

    const wrapper = mount(
      <AJSwitchIcon
        offImageUrl="https://asset.jarombek.com/jarombek.png"
        onImageUrl="https://asset.jarombek.com/jarombek.png"
        onChange={{isObject: true, isFunction: false}}
      />
    );

    expect(wrapper.find('.aj-switch-icon-on').hasClass(/(ajSwitchIconNotSelected)(-\d+)/))
      .toBe(true);
    expect(wrapper.find('.aj-switch-icon-off').hasClass(/(ajSwitchIconNotSelected)(-\d+)/))
      .toBe(false);

    wrapper.find('.aj-switch').simulate('click');

    expect(wrapper.find('.aj-switch-icon-on').hasClass(/(ajSwitchIconNotSelected)(-\d+)/))
      .toBe(false);
    expect(wrapper.find('.aj-switch-icon-off').hasClass(/(ajSwitchIconNotSelected)(-\d+)/))
      .toBe(true);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });
});
