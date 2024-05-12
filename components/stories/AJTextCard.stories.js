/**
 * Storyboard stories for the AJCard component.
 * @author Andrew Jarombek
 * @since 11/26/2019
 */

import React, { useState } from 'react';
import { AJTextCard } from '../src';

export default {
  title: 'AJ/TextCard',
  component: AJTextCard,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => (
    <AJTextCard
      title="Tuesday, November 26th"
      subtitle={
        <>
          <b>2</b> Days Until Thanksgiving
        </>
      }
      content={<>Had a bunch of extra days off work so I took this week off. Excited for the race on Thursday.</>}
      action={(f) => f}
      actionText="More Info"
      actionDisabled={false}
    />
  ),
};

export const WithAction = {
  render: () => {
    const Parent = ({ children }) => {
      const [state, setState] = useState(0);
      return (
        <div>
          <p>Times Clicked: {state}</p>
          {children(state, setState)}
        </div>
      );
    };

    return (
      <Parent>
        {(state, setState) => (
          <AJTextCard
            title="Wednesday, November 27th"
            subtitle={
              <>
                <b>1</b> Day Until Thanksgiving
              </>
            }
            content={<>One day until the race.</>}
            action={() => setState((state += 1))}
            actionText="More Info"
            actionDisabled={false}
          />
        )}
      </Parent>
    );
  },
};
