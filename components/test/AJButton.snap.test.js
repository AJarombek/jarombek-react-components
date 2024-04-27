/**
 * Snapshot test for the {@link ../../components/AJButton} component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React from 'react';
import AJButton from '../src/AJButton/AJButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AJButton type="contained" onClick={(f) => f} disabled={true}>
        <div>Snapshot Test</div>
      </AJButton>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
