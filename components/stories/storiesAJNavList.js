/**
 * Storyboard stories for the AJNavList component.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJNavList} from '../src';

storiesOf('AJNavList', module)
  .add('default', () =>
    <AJNavList
      items={[
        {text: 'Home', onClick: () => console.info('/')},
        {text: 'Profile', onClick: () => console.info('/profile')}
      ]}
    />
  );
