import React from 'react';
import AJResponsiveGrid from '../src/AJResponsiveGrid/AJResponsiveGrid';
import AJTextCard from '../src/AJTextCard/AJTextCard';
import renderer from 'react-test-renderer';

/**
 * Snapshot test for the {@link ../../components/AJResponsiveGrid} component.
 * @author Andrew Jarombek
 * @since 12/28/2019
 */

it('renders correctly', () => {
  const tree = renderer.create(
    <AJResponsiveGrid
      smallBreakpoint="300px"
      mediumBreakpoint="500px"
      largeBreakpoint="700px"
      items={[
        <AJTextCard
          key="1"
          title="Snapshot Test 1"
          subtitle={<>subtitle</>}
          content={<>content</>}
          action={f=>f}
          actionText="More Info"
        />,
        <AJTextCard
          key="2"
          title="Snapshot Test 2"
          subtitle={<>subtitle</>}
          content={<>content</>}
          action={f=>f}
          actionText="More Info"
        />
      ]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
