/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJResponsiveGrid} component.
 * @author Andrew Jarombek
 * @since 12/28/2019
 */

import React, {useState} from 'react';
import {shallow, mount} from 'enzyme';
import AJResponsiveGrid from '../src/AJResponsiveGrid/AJResponsiveGrid';
import AJTextCard from '../src/AJTextCard/AJTextCard';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<AJResponsiveGrid items={[
      <AJTextCard
        title="Card"
        subtitle={<>For Testing</>}
        content={<>Empty Body.</>}
        action={f=>f}
        actionText="More Info"
      />
    ]}/>);
    expect(wrapper.exists()).toBe(true);
  });
});
