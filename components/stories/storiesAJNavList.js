/**
 * Storyboard stories for the AJNavList component.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {AJNavList} from '../src';
import {MemoryRouter} from 'react-router';

storiesOf('AJNavList', module)
  .add('default', () =>
    <MemoryRouter>
      <AJNavList
        items={[
          {text: 'Home', link: '/'},
          {text: 'Profile', link: '/profile'}
        ]}
      />
    </MemoryRouter>
  );
