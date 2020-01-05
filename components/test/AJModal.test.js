/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJModal} component.
 * @author Andrew Jarombek
 * @since 1/5/2020
 */

import React, {useState} from 'react';
import {shallow, mount} from 'enzyme';
import { AJModal } from '../src';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<AJModal>Modal Unit Test</AJModal>);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with colored backdrop', () => {
    const wrapper = shallow(<AJModal backdrop={true}>Modal Unit Test</AJModal>);
    expect(wrapper.find('.aj-modal-backdrop')
      .hasClass(/(ajModalColorBackdrop)(-\d+)/))
      .toBe(true);
  });

  it('renders without colored backdrop', () => {
    const wrapper = shallow(<AJModal backdrop={false}>Modal Unit Test</AJModal>);
    expect(wrapper.find('.aj-modal-backdrop')
      .hasClass(/(ajModalColorBackdrop)(-\d+)/))
      .toBe(false);
  });

  it('has a functional onClickBackground method', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<AJModal onClickBackground={onClick}>Test Modal</AJModal>);

    expect(wrapper.find('.aj-modal-backdrop').simulate('click'));
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(wrapper.find('.aj-modal-backdrop').childAt(0).simulate('click'));
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
