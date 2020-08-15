/**
 * Snapshot test for the {@link ../../components/AJLoadingDots} component.
 * @author Andrew Jarombek
 * @since 8/14/2020
 */

import React from 'react';
import AJLoadingDots from '../src/AJLoadingDots/AJLoadingDots';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AJLoadingDots/>).toJSON();
  expect(tree).toMatchSnapshot();
});
