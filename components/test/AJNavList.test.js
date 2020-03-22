/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJNavList} component.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import AJNavList from '../src/AJNavList/AJNavList';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(
      <AJNavList
        items={[
          {text: 'Home', onClick: () => {}},
          {text: 'Profile', onClick: () => {}}
        ]}
      />
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.aj-nav-list')).toHaveLength(1);
    expect(wrapper.find('.aj-nav-list-item')).toHaveLength(2);
  });

  it('uses an empty array if items is not an array', () => {
    const wrapper = shallow(<AJNavList items={true} />);

    expect(wrapper.find('.aj-nav-list')).toHaveLength(1);
    expect(wrapper.find('.aj-nav-list-item')).toHaveLength(0);
  });
});

describe('integration tests', () => {

  it('onClick works as expected', () => {
    const funcHome = jest.fn();
    const funcProfile = jest.fn();

    const wrapper = mount(
      <AJNavList
        items={[
          {text: 'Home', onClick: funcHome},
          {text: 'Profile', onClick: funcProfile}
        ]}
      />
    );

    expect(funcHome).not.toHaveBeenCalled();
    expect(funcHome).toHaveBeenCalledTimes(0);
    expect(funcProfile).not.toHaveBeenCalled();
    expect(funcProfile).toHaveBeenCalledTimes(0);

    // First click the "Home" list item
    wrapper.find('.aj-nav-list-item').at(0).childAt(0).simulate('click');

    expect(funcHome).toHaveBeenCalled();
    expect(funcHome).toHaveBeenCalledTimes(1);
    expect(funcProfile).not.toHaveBeenCalled();
    expect(funcProfile).toHaveBeenCalledTimes(0);

    // Then click the "Profile" list item
    wrapper.find('.aj-nav-list-item').at(1).childAt(0).simulate('click');

    expect(funcHome).toHaveBeenCalled();
    expect(funcHome).toHaveBeenCalledTimes(1);
    expect(funcProfile).toHaveBeenCalled();
    expect(funcProfile).toHaveBeenCalledTimes(1);
  });

});
