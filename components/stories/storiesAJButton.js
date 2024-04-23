/**
 * Storyboard stories for the AJButton component.
 * @author Andrew Jarombek
 * @since 1/13/2020
 */

import React, { useState, createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { AJButton } from '../src';

storiesOf('AJButton', module)
  .add('contained', () => <AJButton type="contained" children="Contained Button" disabled={false} />)
  .add('outlined', () => <AJButton type="outlined" children="Outlined Button" disabled={true} />)
  .add('text', () => <AJButton type="text" children="Text Button" disabled={false} />)
  .add('with onClick', () => {
    const Parent = ({ children, ...props }) => {
      const [state, setState] = useState(0);
      return <div>{children(state, setState)}</div>;
    };

    return (
      <Parent>
        {(state, setState) => (
          <AJButton type="contained" children={`Clicked: ${state}`} onClick={() => setState((state += 1))} />
        )}
      </Parent>
    );
  })
  .add('with ref', () => {
    const Parent = ({ children, ...props }) => {
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
            <AJButton
              type="contained"
              children={colored ? 'Remove Color' : 'Add Color'}
              onClick={onClick}
              ref={buttonRef}
            />
          );
        }}
      </Parent>
    );
  });
