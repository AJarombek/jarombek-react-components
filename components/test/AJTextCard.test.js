/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJTextCard} component.
 * @author Andrew Jarombek
 * @since 11/27/2019
 */

import React, {useState} from 'react';
import {shallow, mount} from 'enzyme';
import AJTextCard from '../src/AJTextCard/AJTextCard';

describe('unit tests', () => {

  const basicTextCard =
    <AJTextCard
      title="Test"
      subtitle="Written: 11/27/2019"
      content="Testing..."
      action={f=>f}
      actionText="Action"
      actionDisabled={false}
    />;

  it('renders', () => {
    const wrapper = shallow(basicTextCard);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders proper react elements', () => {
    const wrapper = shallow(basicTextCard);
    expect(wrapper.find('.aj-text-card')).toHaveLength(1);

    const cardHeader = wrapper.find('.aj-text-card').childAt(0);
    expect(cardHeader.hasClass('aj-text-card-header')).toBe(true);
    expect(cardHeader.childAt(0).hasClass('aj-text-card-title')).toBe(true);
    expect(cardHeader.childAt(1).hasClass('aj-text-card-subtitle')).toBe(true);

    const cardBody = wrapper.find('.aj-text-card').childAt(1);
    expect(cardBody.hasClass('aj-text-card-body')).toBe(true);
    expect(cardBody.childAt(0).hasClass('aj-text-card-content')).toBe(true);

    expect(wrapper.find('.aj-text-card').childAt(2).hasClass('aj-text-card-footer')).toBe(true);
  });

  it('renders proper content within react elements', () => {
    const wrapper = shallow(basicTextCard);
    expect(wrapper.find('.aj-text-card-title').text()).toEqual("Test");
    expect(wrapper.find('.aj-text-card-subtitle').text()).toEqual("Written: 11/27/2019");
    expect(wrapper.find('.aj-text-card-content').text()).toEqual("Testing...");
  });
});

describe('integration tests', () => {
  
});
