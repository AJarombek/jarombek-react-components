/**
 * Snapshot test for the {@link ../../components/AJButtonGroup} component.
 * @author Andrew Jarombek
 * @since 10/24/2020
 */

import React from 'react';
import AJButton from '../src/AJButton/AJButton';
import renderer from 'react-test-renderer';
import AJButtonGroup from '../src/AJButtonGroup/AJButtonGroup';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AJButtonGroup>
        <AJButton type="contained">
          <div>Snapshot Button #1</div>
        </AJButton>
        <AJButton type="outlined">Snapshot Button #2</AJButton>
        <AJButton type="outlined" onClick={(f) => f} disabled={true}>
          <div>Snapshot Button #3</div>
        </AJButton>
      </AJButtonGroup>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
