/**
 * Storyboard stories for the AJNavCircle component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJNavCircle, AJTextButton} from '../src';

storiesOf('AJNavCircle', module)
  .add('default', () =>
    <AJNavCircle
      direction="down"
      onClick={f=>f} />
  )
  .add('up', () =>
    <AJNavCircle
      direction="up"
      height="40px"
      onClick={f=>f} />
  )
  .add('left', () =>
    <AJNavCircle
      direction="left"
      height="50px"
      active={false}
      onClick={f=>f} />
  )
  .add('right', () =>
    <AJNavCircle
      direction="right"
      height="2em"
      active={true}
      onClick={f=>f} />
  )
  .add('enabled and disabled', () => {
    const Parent = ({ children, ...props }) => {
      const [clicked, setClicked] = useState(0);
      const [enabled, setEnabled] = useState(true);
      return (
        <div>
          <AJTextButton
            children={enabled ? "Disable": "Enable"}
            onClick={() => setEnabled(!enabled)} />
          <p>Clicked: {clicked}</p>
          {children({clicked, enabled}, setClicked)}
        </div>
      );
    };

    return (
      <Parent>
        {({clicked, enabled}, setClicked) => (
          <AJNavCircle
            direction="right"
            height="40px"
            active={enabled}
            onClick={() => setClicked(clicked + 1)} />
        )}
      </Parent>
    );
  });
