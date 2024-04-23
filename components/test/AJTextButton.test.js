/**
 * Unit tests with Jest and Enzyme for the {@link ../../components/AJTextButton} component.
 * @author Andrew Jarombek
 * @since 11/23/2019
 */

import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import AJTextButton from '../src/AJTextButton/AJTextButton';

describe('unit tests', () => {
  it('renders', () => {
    const wrapper = shallow(<AJTextButton children="Text" />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('integration tests', () => {
  it('renders a div with a button child', () => {
    const wrapper = mount(<AJTextButton>Text Button</AJTextButton>);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').childAt(0).type()).toEqual('button');
  });

  it('renders an enabled button', () => {
    const wrapper = mount(<AJTextButton>Text Button</AJTextButton>);
    expect(wrapper.find('div').hasClass(/(ajTextButton)(-\d+)/)).toBe(true);
    expect(wrapper.find('div').hasClass(/(ajTextButtonEnabled)(-\d+)/)).toBe(true);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('renders a disabled button when the disabled prop is true', () => {
    const wrapper = mount(<AJTextButton disabled={true}>Text Button</AJTextButton>);
    expect(wrapper.find('div').hasClass(/(ajTextButton)(-\d+)/)).toBe(true);
    expect(wrapper.find('div').hasClass(/(ajTextButtonDisabled)(-\d+)/)).toBe(true);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('default onClick function has no impact', () => {
    const wrapper = mount(<AJTextButton>Text Button</AJTextButton>);
    expect(wrapper.find('button').text()).toEqual('Text Button');
    expect(wrapper.find('button').simulate('click'));
    expect(wrapper.find('button').text()).toEqual('Text Button');
  });

  it('changes content when clicked using onClick', () => {
    const Parent = ({ children, ...props }) => {
      const [state, setState] = useState(0);
      return <div>{children(state, setState)}</div>;
    };

    const wrapper = mount(
      <Parent>
        {(state, setState) => <AJTextButton children={`Clicked: ${state}`} onClick={() => setState((state += 1))} />}
      </Parent>,
    );

    expect(wrapper.find('div').at(1)).toHaveLength(1);
    expect(wrapper.find('button').text()).toEqual('Clicked: 0');

    // onClick works if you click the button...
    expect(wrapper.find('button').simulate('click'));
    expect(wrapper.find('button').text()).toEqual('Clicked: 1');

    // ... or the div surrounding the button
    expect(wrapper.find('div').at(1).simulate('click'));
    expect(wrapper.find('button').text()).toEqual('Clicked: 2');
  });
});
