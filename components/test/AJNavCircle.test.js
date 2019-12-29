/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJNavCircle} component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React from 'react';
import {shallow} from 'enzyme';
import AJNavCircle from '../src/AJNavCircle/AJNavCircle';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(
      <AJNavCircle height="40px" active={true} direction="down" onClick={f=>f} />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
