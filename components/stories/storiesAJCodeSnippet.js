/**
 * Storyboard stories for the AJCodeSnippet component.
 * @author Andrew Jarombek
 * @since 12/31/2019
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {AJCodeSnippet} from '../src';

storiesOf('AJCodeSnippet', module)
  .add('default', () =>
    <AJCodeSnippet language="javascript">
      const j = 25;
    </AJCodeSnippet>
  );
