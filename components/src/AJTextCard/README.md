### Overview

Reusable card component with a header, body, and footer.

**Use cases:**

```javascript
import { AJTextCard } from 'jarombek-react-components';

const CustomComponent = () => 
    <AJTextCard
      title="Sunday, March 22nd"
      subtitle={<>2nd to last Sunday in March</>}
      content={<>Trying to get a little work done today, watch some old basketball games on tv.</>}
      action={() => {}}
      actionText="More Info"
      actionDisabled={false}
    />
```

### Files

| Filename                   | Description                                                                    |
|----------------------------|--------------------------------------------------------------------------------|
| `AJTextCard.js`            | The reusable `AJTextCard` component.                                           |
| `index.js`                 | Index file which exports the `AJTextCard` component.                           |
| `styles.js`                | JSS styles for the `AJTextCard` component.                                     |
