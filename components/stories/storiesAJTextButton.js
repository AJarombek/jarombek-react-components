/**
 * Storyboard stories for the AJTextButton component.
 * @author Andrew Jarombek
 * @since 11/16/2019
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJTextButton} from '../src';

storiesOf('AJTextButton', module)
  .add('default', () => <AJTextButton children="Text Button" />)
  .add('with onClick', () => {
    const Parent = ({ children, ...props }) => {
      const [state, setState] = useState(0);
      return <div>{children(state, setState)}</div>
    };

    return (
      <Parent>
        {(state, setState) => (
          <AJTextButton children={`Clicked: ${state}`}
                        onClick={() => setState(state += 1)} />
        )}
      </Parent>
    );
  })
  .add('disabled', () => <AJTextButton disabled={true}>Text Button</AJTextButton>);
