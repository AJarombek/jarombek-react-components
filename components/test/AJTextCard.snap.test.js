import React from 'react';
import AJTextCard from '../src/AJTextCard/AJTextCard';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJTextCard} component.
 * @author Andrew Jarombek
 * @since 12/19/2019
 */

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AJTextCard
        title="Snapshot Test"
        content={<div>Hello from snapshot test</div>}
        actionText="Submit"
        action={(f) => f}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props', () => {
  const tree = renderer
    .create(
      <AJTextCard
        title="Snapshot Test 2"
        subtitle="Test with all props"
        content={<div>Hello from the second snapshot test</div>}
        actionDisabled={true}
        actionText="Submit"
        action={(f) => f}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
