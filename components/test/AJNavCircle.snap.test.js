import React from 'react';
import AJNavCircle from '../src/AJNavCircle/AJNavCircle';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJNavCircle} component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

it('renders correctly', () => {
  const tree = renderer
    .create(<AJNavCircle height="40px" active={true} direction="right" onClick={(f) => f} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
