/**
 * Snapshot test for the {@link ../../components/AJTag} component.
 * @author Andrew Jarombek
 * @since 5/17/2020
 */

import React from 'react';
import AJTag from '../src/AJTag/AJTag';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AJTag content="Snapshot Tag"/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props', () => {
  const tree = renderer.create(
    <AJTag content={<p>Snapshot Tag</p>} color="#900"/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
