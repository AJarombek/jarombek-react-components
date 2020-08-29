/**
 * Storyboard stories for the AJSelect component.
 * 7 years later and it still means the world to me.
 * @author Andrew Jarombek
 * @since 8/28/2020
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJSelect} from '../src';

storiesOf('AJSelect', module)
  .add('default', () =>
    <AJSelect
      options={[{content: 'Bound 2', value: 'bound2'}]}
      placeholder="Select a song"
      disabled={false}
      onClickListOption={(option) => console.info(option)}
    />
  )
  .add('disabled', () =>
    <AJSelect
      options={[{content: 'Hidden', value: 'hidden'}]}
      placeholder="Disabled Select"
      disabled={true}
    />
  );
