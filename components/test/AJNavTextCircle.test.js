/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJNavTextCircle} component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React from 'react';
import { shallow } from 'enzyme';
import AJNavTextCircle from '../src/AJNavTextCircle/AJNavTextCircle';

describe('unit tests', () => {
  it('renders', () => {
    const wrapper = shallow(
      <AJNavTextCircle
        text="Testing"
        textSide="left"
        height="40px"
        active={true}
        direction="down"
        onClick={(f) => f}
      />,
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders defaults', () => {
    const wrapper = shallow(<AJNavTextCircle text="Testing" direction="down" onClick={(f) => f} />);
    expect(
      wrapper
        .find('div')
        .at(0)
        .hasClass(/(textRight)(-\d+)/),
    ).toBe(true);
    expect(wrapper.find('div').at(0).childAt(1).type()).toEqual('div');
    expect(
      wrapper
        .find('div')
        .at(0)
        .childAt(1)
        .hasClass(/(description)(-\d+)/),
    ).toBe(true);
  });
});
