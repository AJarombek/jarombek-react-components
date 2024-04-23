import React from 'react';
import AJNavTextCircle from '../src/AJNavTextCircle/AJNavTextCircle';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJNavTextCircle} component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AJNavTextCircle
        text="Navigate"
        textSide="left"
        height="40px"
        active={true}
        direction="right"
        onClick={(f) => f}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
