/**
 * Storyboard stories for the AJButton component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React, { createRef, useState } from 'react';
import { AJButton } from '../src';

export default {
  title: 'AJ/Button',
  component: AJButton,
  decorators: [],
  parameters: {},
};

export const Basic = {};

export const Contained = {
  render: () => (
    <AJButton type="contained" disabled={false}>
      Contained Button
    </AJButton>
  ),
};

export const Outlined = {
  render: () => (
    <AJButton type="outlined" disabled={true}>
      Outlined Button
    </AJButton>
  ),
};

export const Text = {
  render: () => (
    <AJButton type="text" disabled={false}>
      Text Button
    </AJButton>
  ),
};

export const WithOnClick = {
  render: () => {
    const Parent = ({ children }) => {
      const [state, setState] = useState(0);
      return <div>{children(state, setState)}</div>;
    };

    return (
      <Parent>
        {(state, setState) => (
          <AJButton type="contained" onClick={() => setState((state += 1))}>
            Clicked: ${state}
          </AJButton>
        )}
      </Parent>
    );
  },
};

export const WithRef = {
  render: () => {
    const Parent = ({ children }) => {
      const [colored, setColored] = useState(false);
      return <div>{children(colored, setColored)}</div>;
    };

    return (
      <Parent>
        {(colored, setColored) => {
          const buttonRef = createRef();

          const onClick = () => {
            if (!colored) {
              buttonRef.current.style.backgroundColor = 'lightskyblue';
            } else {
              buttonRef.current.style.backgroundColor = '#bbb';
            }

            setColored(!colored);
          };

          return (
            <AJButton type="contained" onClick={onClick} ref={buttonRef}>
              {colored ? 'Remove Color' : 'Add Color'}
            </AJButton>
          );
        }}
      </Parent>
    );
  },
};
