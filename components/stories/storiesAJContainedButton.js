/**
 * Storyboard stories for the AJContainedButton component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React, { useState, createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { AJContainedButton } from '../src';

storiesOf('AJContainedButton', module)
  .add('default', () => <AJContainedButton>Contained Button</AJContainedButton>)
  .add('disabled', () => <AJContainedButton disabled={true}>Contained Button</AJContainedButton>)
  .add('with onClick', () => {
    const Parent = ({ children }) => {
      const [state, setState] = useState(0);
      return <div>{children(state, setState)}</div>;
    };

    return (
      <Parent>
        {(state, setState) => (
          <AJContainedButton onClick={() => setState((state += 1))}>Clicked: ${state}</AJContainedButton>
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
            <AJContainedButton onClick={onClick} ref={buttonRef}>
              {colored ? 'Remove Color' : 'Add Color'}
            </AJContainedButton>
          );
        }}
      </Parent>
    );
  });
