/**
 * Storyboard stories for the AJCard component.
 * @author Andrew Jarombek
 * @since 11/26/2019
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {AJTextCard} from '../src';

storiesOf('AJCard', module)
  .add('default',
    () =>
      <AJTextCard
        title="Tuesday, November 26th"
        subtitle={<><b>2</b> Days Until Thanksgiving</>}
        content={<>Had a bunch of extra days off work so I took this week off.
          Excited for the race on Thursday.</>}
        action={f=>f}
        actionText="More Info"
        actionDisabled={false}
      />
  );
