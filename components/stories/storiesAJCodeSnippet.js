/**
 * Storyboard stories for the AJCodeSnippet component.
 * @author Andrew Jarombek
 * @since 12/31/2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { AJCodeSnippet } from '../src';

storiesOf('AJCodeSnippet', module)
  .add('default', () => <AJCodeSnippet language="javascript">const j = 25;</AJCodeSnippet>)
  .add('no language prop', () => (
    <AJCodeSnippet>
      {`[1,2,3].forEach(item => {
  console.info(item);
})`}
    </AJCodeSnippet>
  ))
  .add('multi-line', () => (
    <AJCodeSnippet language="java">
      {`public class Test {
  public static void main(String... args) {
    System.out.println("Multiple Line Code Snippet...");
  }
}`}
    </AJCodeSnippet>
  ));
