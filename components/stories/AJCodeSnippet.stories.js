/**
 * Storyboard stories for the AJCodeSnippet component.
 * @author Andrew Jarombek
 * @since 12/31/2019
 */

import React from 'react';
import { AJCodeSnippet } from '../src';

export default {
  title: 'AJ/CodeSnippet',
  component: AJCodeSnippet,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => <AJCodeSnippet language="javascript">const j = 25;</AJCodeSnippet>,
};

export const NoLanguage = {
  render: () => (
    <AJCodeSnippet>
      {`[1,2,3].forEach(item => {
  console.info(item);
})`}
    </AJCodeSnippet>
  ),
};

export const MultiLine = {
  render: () => (
    <AJCodeSnippet language="java">
      {`public class Test {
  public static void main(String... args) {
    System.out.println("Multiple Line Code Snippet...");
  }
}`}
    </AJCodeSnippet>
  ),
};
