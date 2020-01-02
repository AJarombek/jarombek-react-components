/**
 * Storyboard stories for the AJSwitchIcon component.
 * @author Andrew Jarombek
 * @since 1/1/2020
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJSwitchIcon} from '../src';

storiesOf('AJSwitchIcon', module)
  .add('default', () =>
    <AJSwitchIcon
      offImageUrl="https://asset.jarombek.com/jarombek.png"
      onImageUrl="https://asset.jarombek.com/jarombek.png"
      onChange={f=>f}
      initialState={true}
      disabled={false}
    />
  );
