/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJTextCard} component.
 * @author Andrew Jarombek
 * @since 11/27/2019
 */

import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import AJTextCard from '../src/AJTextCard/AJTextCard';

describe('unit tests', () => {
  const basicTextCard = (
    <AJTextCard
      title="Test"
      subtitle="Written: 11/27/2019"
      content="Testing..."
      action={(f) => f}
      actionText="Action"
      actionDisabled={false}
    />
  );

  it('renders', () => {
    const wrapper = shallow(basicTextCard);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders proper react elements', () => {
    const wrapper = shallow(basicTextCard);
    expect(wrapper.find('div').at(0)).toHaveLength(1);

    const cardHeader = wrapper.find('div').at(0).childAt(0);
    expect(cardHeader.hasClass('aj-text-card-header')).toBe(true);
    expect(cardHeader.childAt(0).hasClass('aj-text-card-title')).toBe(true);
    expect(cardHeader.childAt(1).hasClass('aj-text-card-subtitle')).toBe(true);

    const cardBody = wrapper.find('div').at(0).childAt(1);
    expect(cardBody.hasClass('aj-text-card-body')).toBe(true);
    expect(cardBody.childAt(0).hasClass('aj-text-card-content')).toBe(true);

    expect(wrapper.find('div').at(0).childAt(2).hasClass('aj-text-card-footer')).toBe(true);
  });

  it('renders proper content within react elements', () => {
    const wrapper = shallow(basicTextCard);
    expect(wrapper.find('.aj-text-card-title').text()).toEqual('Test');
    expect(wrapper.find('.aj-text-card-subtitle').text()).toEqual('Written: 11/27/2019');
    expect(wrapper.find('.aj-text-card-content').text()).toEqual('Testing...');
  });
});

describe('integration tests', () => {
  const createTextCardWrapper = (disabled = false) => {
    const Parent = ({ children, ...props }) => {
      const [state, setState] = useState(0);
      return (
        <div>
          <p>Times Clicked: {state}</p>
          {children(state, setState)}
        </div>
      );
    };

    return mount(
      <Parent>
        {(state, setState) => (
          <AJTextCard
            title="Test"
            subtitle={`Times Clicked: ${state}`}
            content="Testing..."
            action={() => setState((state += 1))}
            actionText="Action"
            actionDisabled={disabled}
          />
        )}
      </Parent>,
    );
  };

  it('action occurs when the footer button is clicked', () => {
    const wrapper = createTextCardWrapper();

    expect(wrapper.find('.aj-text-card-subtitle').text()).toEqual('Times Clicked: 0');

    // onClick works if you click the button...
    expect(wrapper.find('button').simulate('click'));
    expect(wrapper.find('.aj-text-card-subtitle').text()).toEqual('Times Clicked: 1');

    // ... or the div surrounding the button
    expect(wrapper.find('.aj-text-card-footer').childAt(0).simulate('click'));
    expect(wrapper.find('.aj-text-card-subtitle').text()).toEqual('Times Clicked: 2');
  });

  it('action does not occur when the footer button is clicked but actionDisabled is true', () => {
    const wrapper = createTextCardWrapper(true);

    expect(wrapper.find('.aj-text-card-subtitle').text()).toEqual('Times Clicked: 0');

    // onClick works if you click the button...
    expect(wrapper.find('button').simulate('click'));
    expect(wrapper.find('.aj-text-card-subtitle').text()).toEqual('Times Clicked: 0');

    // ... or the div surrounding the button
    expect(wrapper.find('.aj-text-card-footer').childAt(0).simulate('click'));
    expect(wrapper.find('.aj-text-card-subtitle').text()).toEqual('Times Clicked: 0');
  });

  it('action enabled by default', () => {
    const noActionDisabledTextCard = (
      <AJTextCard
        title="Test"
        subtitle="Written: 12/11/2019"
        content="Testing..."
        action={(f) => f}
        actionText="Action"
      />
    );

    const wrapper = mount(noActionDisabledTextCard);
    expect(wrapper.props().actionDisabled).toBeUndefined();
    expect(wrapper.find('button').getDOMNode().attributes.getNamedItem('type').value).toEqual('button');

    expect(wrapper.find('button').prop('disabled')).toEqual(false);
  });
});
