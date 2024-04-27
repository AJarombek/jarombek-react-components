/**
 * Storyboard stories for the AJButton component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React, { useState, createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { AJButton } from '../src';

storiesOf('AJButton', module)
  .add('contained', () => (
    <AJButton type="contained" disabled={false}>
      Contained Button
    </AJButton>
  ))
  .add('outlined', () => (
    <AJButton type="outlined" disabled={true}>
      Outlined Button
    </AJButton>
  ))
  .add('text', () => (
    <AJButton type="text" disabled={false}>
      Text Button
    </AJButton>
  ))
  .add('with onClick', () => {
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
  })
  .add('with ref', () => {
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
  });
