/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJBaseButton} component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
import AJBaseButton from '../src/AJBaseButton/AJBaseButton';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(
      <AJBaseButton disabledClasses={[]} enabledClasses={[]} disabled={false}>
        Test Base Button
      </AJBaseButton>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
