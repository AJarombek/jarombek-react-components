/**
 * Storyboard stories for the AJOutlinedButton component.
 * @author Andrew Jarombek
 * @since 1/11/2020
 */

import React, { useState, createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { AJOutlinedButton } from '../src';

storiesOf('AJOutlinedButton', module)
  .add('default', () => <AJOutlinedButton>Outlined Button</AJOutlinedButton>)
  .add('disabled', () => <AJOutlinedButton disabled={true}>Outlined Button</AJOutlinedButton>)
  .add('with onClick', () => {
    const Parent = ({ children }) => {
      const [state, setState] = useState(0);
      return <div>{children(state, setState)}</div>;
    };

    return (
      <Parent>
        {(state, setState) => (
          <AJOutlinedButton onClick={() => setState((state += 1))}>Clicked: ${state}</AJOutlinedButton>
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
              buttonRef.current.style.backgroundColor = 'aqua';
            } else {
              buttonRef.current.style.backgroundColor = 'transparent';
            }

            setColored(!colored);
          };

          return (
            <AJOutlinedButton onClick={onClick} ref={buttonRef}>
              {colored ? 'Remove Color' : 'Add Color'}
            </AJOutlinedButton>
          );
        }}
      </Parent>
    );
  });
