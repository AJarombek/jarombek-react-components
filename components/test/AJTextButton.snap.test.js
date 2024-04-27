import React from 'react';
import AJTextButton from '../src/AJTextButton/AJTextButton';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJTextButton} component.
 * @author Andrew Jarombek
 * @since 12/19/2019
 */

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AJTextButton>
        <div>Snapshot Test</div>
      </AJTextButton>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props', () => {
  const tree = renderer
    .create(
      <AJTextButton onClick={(f) => f} disabled={true}>
        <div>Snapshot Test</div>
      </AJTextButton>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
