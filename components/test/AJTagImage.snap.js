/**
 * Snapshot test for the {@link ../../components/AJTagImage} component.
 * @author Andrew Jarombek
 * @since 5/17/2020
 */

import React from 'react';
import AJTagImage from '../src/AJTagImage/AJTagImage';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <AJTagImage content="Snapshot TagImage" picture="https://asset.jarombek.com"/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props', () => {
  const tree = renderer.create(
    <AJTagImage
      content={<p>Snapshot TagImage</p>}
      color="rgba(145, 244, 238, 0.4)"
      picture="https://asset.jarombek.com"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
