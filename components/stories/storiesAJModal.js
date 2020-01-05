/**
 * Storyboard stories for the AJModal component.
 * @author Andrew Jarombek
 * @since 1/5/2020
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {AJModal} from '../src';

storiesOf('AJModal', module)
  .add('default', () => <AJModal><div>Modal Content</div></AJModal>);
