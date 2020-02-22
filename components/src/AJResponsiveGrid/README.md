### Overview

Reusable grid of cards which responds to different screen sizes.

**Use cases:**

```javascript
import { AJResponsiveGrid } from 'jarombek-react-components';

const CustomComponent = () => 
  <AJResponsiveGrid
    smallBreakpoint="300px"
    mediumBreakpoint="500px"
    largeBreakpoint="700px"
    items={[
      <AJTextCard
        title="Friday, February 21st"
        subtitle={<>Long Week</>}
        content={<>Excited to get a long sleep with my little friends Dotty & Lily after a long week.</>}
        action={f=>f}
        actionText="More Info"
      />
    ]} />
```

### Files

| Filename                   | Description                                                                     |
|----------------------------|---------------------------------------------------------------------------------|
| `AJResponsiveGrid.js`      | The reusable `AJResponsiveGrid` component.                                      |
| `index.js`                 | Index file which exports the `AJResponsiveGrid` component.                      |
| `styles.js`                | JSS styles for the `AJResponsiveGrid` component.                                |
