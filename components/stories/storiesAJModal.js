/**
 * Storyboard stories for the AJModal component.
 * @author Andrew Jarombek
 * @since 1/5/2020
 */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { AJModal, AJTextButton } from '../src';

storiesOf('AJModal', module)
  .add('default', () => (
    <AJModal>
      <div>Modal Content</div>
    </AJModal>
  ))
  .add('with onClick background action', () => {
    const Parent = ({ children }) => {
      const [state, setState] = useState(false);
      return (
        <div>
          <AJTextButton onClick={() => setState(!state)}>Show Modal</AJTextButton>
          {children(state, setState)}
        </div>
      );
    };

    return (
      <Parent>
        {(state, setState) => (state ? <AJModal onClickBackground={() => setState(false)}>Modal</AJModal> : null)}
      </Parent>
    );
  });
