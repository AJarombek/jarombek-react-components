import React from 'react';
import AJModal from '../src/AJModal/AJModal';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJModal} component.
 * @author Andrew Jarombek
 * @since 1/5/2020
 */

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AJModal backdrop={true}>
        <div>Modal Snapshot Test</div>
      </AJModal>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
