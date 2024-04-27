/**
 * Snapshot test for the {@link ../../components/AJContainedButton} component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React from 'react';
import AJContainedButton from '../src/AJContainedButton/AJContainedButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AJContainedButton>
        <div>Snapshot Test</div>
      </AJContainedButton>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props', () => {
  const tree = renderer
    .create(
      <AJContainedButton onClick={(f) => f} disabled={true}>
        <div>Snapshot Test</div>
      </AJContainedButton>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
