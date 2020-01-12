/**
 * Snapshot test for the {@link ../../components/AJOutlinedButton} component.
 * @author Andrew Jarombek
 * @since 1/11/2020
 */

import React from 'react';
import AJOutlinedButton from '../src/AJOutlinedButton/AJOutlinedButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AJOutlinedButton children={<div>Snapshot Test</div>}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props', () => {
  const tree = renderer.create(
    <AJOutlinedButton
      children={<div>Snapshot Test</div>}
      onClick={f=>f}
      disabled={true}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
