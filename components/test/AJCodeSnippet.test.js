/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJCodeSnippet} component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React from 'react';
import {shallow, mount} from 'enzyme';
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

  it('renders javascript by default', () => {
    const wrapper = shallow(<AJCodeSnippet language="invalid">const str = 'test';</AJCodeSnippet>);
    const codeSnippet = wrapper.find('code');
    expect(codeSnippet.hasClass('javascript')).toBe(true);
    expect(codeSnippet.hasClass(/(hljs)(-\d+)/)).toBe(true);
  });

  it('renders java when specified', () => {
    const wrapper = shallow(<AJCodeSnippet language="java">public class Test {}</AJCodeSnippet>);
    const codeSnippet = wrapper.find('code');
    expect(codeSnippet.hasClass('java')).toBe(true);
    expect(codeSnippet.hasClass(/(hljs)(-\d+)/)).toBe(true);
  });
});

describe('integration tests', () => {

  it('renders', () => {
    const wrapper = mount(<AJCodeSnippet language="java">public class Test {}</AJCodeSnippet>);
    expect(wrapper.exists()).toBe(true);
  });
});
