import React from 'react';
import AJNavList from '../src/AJNavList/AJNavList';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJNavList} component.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

it('renders correctly', () => {
  const tree = renderer.create(
    <AJNavList
      items={[
        {text: 'Home', link: '/'},
        {text: 'Profile', link: '/profile'}
      ]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
