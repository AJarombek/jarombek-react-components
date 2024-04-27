/**
 * Storyboard stories for the AJSwitch component.
 * @author Andrew Jarombek
 * @since 12/31/2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { AJSwitch } from '../src';

storiesOf('AJSwitch', module)
  .add('default', () => <AJSwitch onChange={(state) => console.info(`AJSwitch state: ${state}`)} disabled={false} />)
  .add('disabled', () => (
    <AJSwitch
      onChange={(state) => console.info(`Disabled AJSwitch state: ${state}`)}
      initialState={true}
      disabled={true}
    />
  ));
