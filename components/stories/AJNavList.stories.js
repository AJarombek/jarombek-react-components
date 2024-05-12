/**
 * Storyboard stories for the AJNavList component.
 * @author Andrew Jarombek
 * @since 2/18/2020
 */

import React, { useState } from 'react';
import { AJNavList } from '../src';

export default {
  title: 'AJ/NavList',
  component: AJNavList,
  decorators: [],
  parameters: {},
};

export const Default = {
  render: () => (
    <AJNavList
      items={[
        { content: 'Home', onClick: () => console.info('/') },
        { content: 'Profile', onClick: () => console.info('/profile') },
      ]}
    />
  ),
};

export const NodeItems = {
  render: () => {
    const Parent = ({ children }) => {
      const [clickedHome, setClickedHome] = useState(0);
      const [clickedProfile, setClickedProfile] = useState(0);
      const [clickedTeam, setClickedTeam] = useState(0);

      return (
        <div>
          {children(clickedHome, clickedProfile, clickedTeam, setClickedHome, setClickedProfile, setClickedTeam)}
        </div>
      );
    };

    return (
      <Parent>
        {(clickedHome, clickedProfile, clickedTeam, setClickedHome, setClickedProfile, setClickedTeam) => (
          <AJNavList
            items={[
              {
                content: (
                  <p>
                    Home <b>Clicked: {clickedHome}</b>
                  </p>
                ),
                onClick: () => setClickedHome(clickedHome + 1),
              },
              {
                content: (
                  <p>
                    Profile <b>Clicked: {clickedProfile}</b>
                  </p>
                ),
                onClick: () => setClickedProfile(clickedProfile + 1),
              },
              {
                content: (
                  <p>
                    Team <b>Clicked: {clickedTeam}</b>
                  </p>
                ),
                onClick: () => setClickedTeam(clickedTeam + 1),
              },
            ]}
          />
        )}
      </Parent>
    );
  },
};

export const NonArrayItems = {
  render: () => <AJNavList items={true} />,
};
