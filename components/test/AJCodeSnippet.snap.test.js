import React from 'react';
import AJCodeSnippet from '../src/AJCodeSnippet/AJCodeSnippet';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJCodeSnippet} component.
 * @author Andrew Jarombek
 * @since 12/19/2019
 */

it('renders correctly', () => {
  const tree = renderer.create(
    <AJCodeSnippet language="javascript">
      {`
      const list = [0, 1, 2, 3];
      for (let item in list) {
        console.info(item);
      }
      `}
    </AJCodeSnippet>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
