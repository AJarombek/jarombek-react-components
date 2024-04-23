/**
 * Unit tests with Jest and Enzyme for the AJSelect component.
 * @author Andrew Jarombek
 * @since 8/29/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AJSelect from '../src/AJSelect/AJSelect';

describe('unit tests', () => {
  it('invokes onClickSelect as expected', () => {
    const onClickSelect = jest.fn();
    const wrapper = shallow(
      <AJSelect
        options={[
          { content: 'Item 1', value: 1 },
          { content: 'Item 2', value: 2 },
        ]}
        onClickSelect={onClickSelect}
      />,
    );

    expect(wrapper.find('.aj-select').childAt(0).simulate('click'));
    expect(onClickSelect).toHaveBeenCalled();
    expect(onClickSelect).toHaveBeenCalledTimes(1);
    expect(onClickSelect).toHaveBeenCalledWith(true);

    expect(wrapper.find('.aj-select').childAt(0).simulate('click'));
    expect(onClickSelect).toHaveBeenCalled();
    expect(onClickSelect).toHaveBeenCalledTimes(2);
    expect(onClickSelect).toHaveBeenCalledWith(false);

    expect(wrapper.exists()).toBe(true);
  });

  it('invokes onClickListOption as expected', () => {
    const onClickListOption = jest.fn();
    const wrapper = shallow(
      <AJSelect
        options={[
          { content: 'Item 1', value: 1 },
          { content: 'Item 2', value: 2 },
        ]}
        onClickListOption={onClickListOption}
      />,
    );

    expect(wrapper.find('.aj-select').childAt(0).simulate('click'));
    expect(wrapper.find('li').at(0).simulate('click'));
    expect(onClickListOption).toHaveBeenCalled();
    expect(onClickListOption).toHaveBeenCalledTimes(1);
    expect(onClickListOption).toHaveBeenCalledWith({ content: 'Item 1', value: 1 });

    expect(wrapper.find('.aj-select').childAt(0).simulate('click'));
    expect(wrapper.find('li').at(1).simulate('click'));
    expect(onClickListOption).toHaveBeenCalled();
    expect(onClickListOption).toHaveBeenCalledTimes(2);
    expect(onClickListOption).toHaveBeenCalledWith({ content: 'Item 2', value: 2 });

    expect(wrapper.exists()).toBe(true);
  });

  it('will not invoke onClickSelect if the component is disabled', () => {
    const onClickSelect = jest.fn();
    const wrapper = shallow(
      <AJSelect
        options={[
          { content: 'Item 1', value: 1 },
          { content: 'Item 2', value: 2 },
        ]}
        onClickSelect={onClickSelect}
        disabled={true}
      />,
    );

    expect(wrapper.find('.aj-select').childAt(0).simulate('click'));
    expect(onClickSelect).not.toHaveBeenCalled();
  });

  it('clicking an item shows it as the label', () => {
    const wrapper = shallow(
      <AJSelect
        placeholder="Select Item"
        options={[
          { content: 'Item 1', value: 1 },
          { content: 'Item 2', value: 2 },
        ]}
      />,
    );

    expect(wrapper.find('.aj-select').childAt(0).childAt(0).text()).toEqual('Select Item');

    expect(wrapper.find('.aj-select').childAt(0).simulate('click'));
    expect(wrapper.find('li').at(0).simulate('click'));

    expect(wrapper.find('.aj-select').childAt(0).childAt(0).text()).toEqual('Item 1');
  });

  it('has a toggleable default option', async () => {
    const wrapper = await mount(
      <AJSelect
        placeholder="Select Item"
        options={[
          { content: 'Item 1', value: 1 },
          { content: 'Item 2', value: 2 },
        ]}
        defaultOption={1}
      />,
    );

    expect(wrapper.find('.aj-select').childAt(0).childAt(0).text()).toEqual('Item 1');
    wrapper.setProps({ defaultOption: 2 });
    expect(wrapper.find('.aj-select').childAt(0).childAt(0).text()).toEqual('Item 2');

    // Changing the default option to null has no impact.
    wrapper.setProps({ defaultOption: null });
    expect(wrapper.find('.aj-select').childAt(0).childAt(0).text()).toEqual('Item 2');
  });
});
