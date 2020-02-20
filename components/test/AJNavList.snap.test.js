import React from 'react';
import AJNavList from '../src/AJNavList/AJNavList';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJNavList} component.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <AJNavList
        items={[
          {text: 'Home', link: '/'},
          {text: 'Profile', link: '/profile'}
        ]}
      />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
