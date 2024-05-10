/**
 * Storyboard stories for the AJNavCircle component.
 * @author Andrew Jarombek
 * @since 12/29/2019
 */

import React, { useState } from 'react';
import { AJNavCircle, AJTextButton } from '../src';

export default {
  title: 'AJ/NavCircle',
  component: AJNavCircle,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => <AJNavCircle direction="down" onClick={(f) => f} />,
};

export const Up = {
  render: () => <AJNavCircle direction="up" height="40px" onClick={(f) => f} />,
};

export const Left = {
  render: () => <AJNavCircle direction="left" height="50px" active={false} onClick={(f) => f} />,
};

export const Right = {
  render: () => <AJNavCircle direction="right" height="2em" active={true} onClick={(f) => f} />,
};

export const EnabledAndDisabled = {
  render: () => {
    const Parent = ({ children }) => {
      const [clicked, setClicked] = useState(0);
      const [enabled, setEnabled] = useState(true);
      return (
        <div>
          <AJTextButton onClick={() => setEnabled(!enabled)}>{enabled ? 'Disable' : 'Enable'}</AJTextButton>
          <p>Clicked: {clicked}</p>
          {children({ clicked, enabled }, setClicked)}
        </div>
      );
    };

    return (
      <Parent>
        {({ clicked, enabled }, setClicked) => (
          <AJNavCircle direction="right" height="40px" active={enabled} onClick={() => setClicked(clicked + 1)} />
        )}
      </Parent>
    );
  },
};
