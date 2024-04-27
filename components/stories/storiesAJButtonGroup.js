/**
 * Storyboard stories for the AJButtonGroup component.
 * @author Andrew Jarombek
 * @since 10/23/2020
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { AJButtonGroup, AJButton } from '../src';

storiesOf('AJButtonGroup', module)
  .add('contained', () => (
    <AJButtonGroup>
      <AJButton type="contained">Button #1</AJButton>
      <AJButton type="contained">Button #2</AJButton>
      <AJButton type="contained">Button #3</AJButton>
    </AJButtonGroup>
  ))
  .add('outlined', () => (
    <AJButtonGroup>
      <AJButton type="outlined">Button #1</AJButton>
      <AJButton type="outlined">Button #2</AJButton>
      <AJButton type="outlined">Button #3</AJButton>
    </AJButtonGroup>
  ))
  .add('text', () => (
    <AJButtonGroup>
      <AJButton type="text">Button #1</AJButton>
      <AJButton type="text">Button #2</AJButton>
      <AJButton type="text">Button #3</AJButton>
    </AJButtonGroup>
  ))
  .add('two buttons', () => (
    <AJButtonGroup>
      <AJButton type="contained">Button #1</AJButton>
      <AJButton type="contained">Button #2</AJButton>
    </AJButtonGroup>
  ))
  .add('four buttons', () => (
    <AJButtonGroup>
      <AJButton type="contained">Button #1</AJButton>
      <AJButton type="contained">Button #2</AJButton>
      <AJButton type="contained">Button #3</AJButton>
      <AJButton type="contained">Button #4</AJButton>
    </AJButtonGroup>
  ))
  .add('multiple button types', () => (
    <AJButtonGroup>
      <AJButton type="outlined">Button #1</AJButton>
      <AJButton type="contained">Button #2</AJButton>
      <AJButton type="outlined">Button #3</AJButton>
      <AJButton type="contained">Button #4</AJButton>
    </AJButtonGroup>
  ));
