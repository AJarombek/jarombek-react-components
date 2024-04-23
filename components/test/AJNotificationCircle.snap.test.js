/**
 * Snapshot test for the {@link ../../components/AJNotificationCircle} component.
 * @author Andrew Jarombek
 * @since 8/15/2020
 */

import React from 'react';
import AJNotificationCircle from '../src/AJNotificationCircle/AJNotificationCircle';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AJNotificationCircle count={15} />).toJSON();
  expect(tree).toMatchSnapshot();
});
