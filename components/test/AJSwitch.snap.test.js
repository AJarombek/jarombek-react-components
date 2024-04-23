import React from 'react';
import AJSwitch from '../src/AJSwitch/AJSwitch';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJSwitch} component.
 * I hope your special day was wonderful.
 * @author Andrew Jarombek
 * @since 1/1/2020
 */

it('renders correctly', () => {
  const tree = renderer.create(<AJSwitch onChange={(f) => f} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props', () => {
  const tree = renderer.create(<AJSwitch onChange={(f) => f} initialState={true} disabled={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
