/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJCodeSnippet} component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React from 'react';
import {shallow} from 'enzyme';
import AJCodeSnippet from '../src/AJCodeSnippet/AJCodeSnippet';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(
      <AJCodeSnippet language="java">
        {`
        public class Test {
          public static void main(String... args) {
            System.out.println("Testing");
          }
        }
        `}
      </AJCodeSnippet>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
