/**
 * Storyboard stories for the AJButtonGroup component.
 * @author Andrew Jarombek
 * @since 10/23/2020
 */

import React from 'react';
import { AJButtonGroup, AJButton } from '../src';

export default {
  title: 'AJ/ButtonGroup',
  component: AJButtonGroup,
  decorators: [],
  parameters: {},
};

export const Basic = {};

export const Contained = {
  render: () => (
    <AJButtonGroup>
      <AJButton type="contained">Button #1</AJButton>
      <AJButton type="contained">Button #2</AJButton>
      <AJButton type="contained">Button #3</AJButton>
    </AJButtonGroup>
  ),
};

export const Outlined = {
  render: () => (
    <AJButtonGroup>
      <AJButton type="outlined">Button #1</AJButton>
      <AJButton type="outlined">Button #2</AJButton>
      <AJButton type="outlined">Button #3</AJButton>
    </AJButtonGroup>
  ),
};

export const Text = {
  render: () => (
    <AJButtonGroup>
      <AJButton type="text">Button #1</AJButton>
      <AJButton type="text">Button #2</AJButton>
      <AJButton type="text">Button #3</AJButton>
    </AJButtonGroup>
  ),
};

export const TwoButtons = {
  render: () => (
    <AJButtonGroup>
      <AJButton type="contained">Button #1</AJButton>
      <AJButton type="contained">Button #2</AJButton>
    </AJButtonGroup>
  ),
};

export const FourButtons = {
  render: () => (
    <AJButtonGroup>
      <AJButton type="contained">Button #1</AJButton>
      <AJButton type="contained">Button #2</AJButton>
      <AJButton type="contained">Button #3</AJButton>
      <AJButton type="contained">Button #4</AJButton>
    </AJButtonGroup>
  ),
};

export const MultipleButtonTypes = {
  render: () => (
    <AJButtonGroup>
      <AJButton type="outlined">Button #1</AJButton>
      <AJButton type="contained">Button #2</AJButton>
      <AJButton type="outlined">Button #3</AJButton>
      <AJButton type="contained">Button #4</AJButton>
    </AJButtonGroup>
  ),
};
