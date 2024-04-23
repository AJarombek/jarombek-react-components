import React from 'react';
import AJSelect from '../src/AJSelect/AJSelect';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJSelect} component.
 * @author Andrew Jarombek
 * @since 8/29/2020
 */

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AJSelect
        options={[
          { content: 'Item 1', value: 1 },
          { content: 'Item 2', value: 2 },
        ]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
