/**
 * Storyboard stories for the AJTextButton component.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React, { useState, createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { AJTextButton } from '../src';

storiesOf('AJTextButton', module)
  .add('default', () => <AJTextButton>Text Button</AJTextButton>)
  .add('with onClick', () => {
    const Parent = ({ children }) => {
      const [state, setState] = useState(0);
      return <div>{children(state, setState)}</div>;
    };

    return (
      <Parent>
        {(state, setState) => <AJTextButton onClick={() => setState((state += 1))}>Clicked: ${state}</AJTextButton>}
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
              buttonRef.current.style.backgroundColor = 'aquamarine';
            } else {
              buttonRef.current.style.backgroundColor = 'transparent';
            }

            setColored(!colored);
          };

          return (
            <AJTextButton onClick={onClick} ref={buttonRef}>
              {colored ? 'Remove Color' : 'Add Color'}
            </AJTextButton>
          );
        }}
      </Parent>
    );
  })
  .add('disabled', () => <AJTextButton disabled={true}>Text Button</AJTextButton>);
