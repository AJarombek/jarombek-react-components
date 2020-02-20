/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJNavList} component.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

import React from 'react';
import {shallow} from 'enzyme';
import {MemoryRouter} from 'react-router';
import AJNavList from '../src/AJNavList/AJNavList';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <AJNavList
          items={[
            {text: 'Home', link: '/'},
            {text: 'Profile', link: '/profile'}
          ]}
        />
      </MemoryRouter>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
