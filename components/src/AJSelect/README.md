### Overview

Reusable & custom <select> element.  Has a label and a dropdown to pick options from. 

**Use cases:**

```javascript
import React from 'react';
import { AJSelect } from 'jarombek-react-components';

const CustomComponent = () => 
  <AJSelect 
    options={[{content: 'Bound 2', value: 'bound2'}]}
    defaultOption={0}
    disabled={false}
  />
```

### Files

| Filename                   | Description                                                             |
|----------------------------|-------------------------------------------------------------------------|
| `AJSelect.js`              | The reusable `AJSelect` component.                                      |
| `index.js`                 | Index file which exports the `AJSelect` component.                      |
| `styles.js`                | JSS styles for the `AJSelect` component.                                |
