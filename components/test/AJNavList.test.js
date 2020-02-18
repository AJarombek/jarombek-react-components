/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJNavList} component.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

import React from 'react';
import {shallow} from 'enzyme';
import AJNavList from '../src/AJNavList/AJNavList';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(
      <AJNavList
        items={[
          {text: 'Home', link: '/'},
          {text: 'Profile', link: '/profile'}
        ]}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
