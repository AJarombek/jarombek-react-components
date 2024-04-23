/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJBaseButton} component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AJBaseButton from '../src/AJBaseButton/AJBaseButton';

describe('unit tests', () => {
  it('renders', () => {
    const wrapper = shallow(
      <AJBaseButton disabledClasses={[]} enabledClasses={[]} disabled={false}>
        Test Base Button
      </AJBaseButton>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});

describe('integration tests', () => {
  it("button is disabled when prop 'disabled' is 'true'", () => {
    const wrapper = mount(
      <AJBaseButton disabledClasses={[]} enabledClasses={[]} disabled={true}>
        Test Disabled Base Button
      </AJBaseButton>,
    );
    expect(wrapper.find('button').prop('disabled')).toEqual(true);
  });

  it("button is disabled when prop 'disabled' is undefined", () => {
    const wrapper = mount(
      <AJBaseButton disabledClasses={[]} enabledClasses={[]}>
        Test Enabled Base Button
      </AJBaseButton>,
    );
    expect(wrapper.find('button').prop('disabled')).toEqual(false);
  });
});
