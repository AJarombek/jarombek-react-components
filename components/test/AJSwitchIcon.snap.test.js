/**
 * Snapshot test for the {@link ../../components/AJSwitchIcon} component.
 * @author Andrew Jarombek
 * @since 1/1/2020
 */

import React from 'react';
import AJSwitchIcon from '../src/AJSwitchIcon/AJSwitchIcon';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <AJSwitchIcon
      offImageUrl="https://asset.jarombek.com/jarombek.png"
      onImageUrl="https://asset.jarombek.com/jarombek.png"
      onChange={f=>f}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props', () => {
  const tree = renderer.create(
    <AJSwitchIcon
      offImageUrl="https://asset.jarombek.com/jarombek.png"
      onImageUrl="https://asset.jarombek.com/jarombek.png"
      onChange={f=>f}
      initialState={true}
      disabled={true}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
