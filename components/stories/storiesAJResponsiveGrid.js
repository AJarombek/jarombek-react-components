/**
 * Storyboard stories for the AJResponsiveGrid component.
 * @author Andrew Jarombek
 * @since 11/24/2019
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {AJResponsiveGrid, AJTextCard} from '../src';

storiesOf('AJResponsiveGrid', module)
  .add('default', () =>
    <AJResponsiveGrid
      items={[
        <AJTextCard
          title="Tuesday, December 24th"
          subtitle={<>Christmas Eve</>}
          content={<>My cousins birthday party in the morning, christmas eve dinner & church at
            night.  Had less than 20 trees remaining, so it was a good season.</>}
          action={f=>f}
          actionText="More Info"
          actionDisabled={false}
        />,
        <AJTextCard
          title="Wednesday, December 25th"
          subtitle={<>Christmas</>}
          content={<>Cousins came over in the morning and we watched old family videos.  Other
            cousins came over in the afternoon for dinner.</>}
          action={f=>f}
          actionText="More Info"
          actionDisabled={false}
        />,
        <AJTextCard
          title="Thursday, December 26th"
          subtitle={<>Christmas</>}
          content={<>A bit calmer today.  Cousins from North Carolina stopping by for dinner.</>}
          action={f=>f}
          actionText="More Info"
          actionDisabled={false}
        />
      ]} />
  );

storiesOf('AJResponsiveGrid', module)
  .add('custom breakpoints', () =>
    <AJResponsiveGrid
      smallBreakpoint="300px"
      mediumBreakpoint="500px"
      largeBreakpoint="700px"
      items={[
        <AJTextCard
          title="Friday, December 27th"
          subtitle={<>Elasticsearch Research</>}
          content={<>Created the Elasticsearch queries featured in my upcoming article.  Also ran a
            hill workout at Rockefeller park in Sleepy Hollow.</>}
          action={f=>f}
          actionText="More Info"
        />,
        <AJTextCard
          title="Saturday, December 28th"
          subtitle={<>Elasticsearch Writing</>}
          content={<>Wrote a rough draft for the Elasticsearch article.  Will begin my React 16.3
            article/source code work tomorrow.  Ran a track workout at my old high school track.</>}
          action={f=>f}
          actionText="More Info"
        />
      ]} />
  );
