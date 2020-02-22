### Overview

Switch component that has two states - on and off.

**Use cases:**

```javascript
import { AJSwitch } from 'jarombek-react-components';

const CustomComponent = () => 
  <AJSwitch
    onChange={state => console.info(`AJSwitch state: ${state}`)}
    disabled={false}
  />
```

### Files

| Filename                   | Description                                                                     |
|----------------------------|---------------------------------------------------------------------------------|
| `AJSwitch.js`              | The reusable `AJSwitch` component.                                              |
| `index.js`                 | Index file which exports the `AJSwitch` component.                              |
| `styles.js`                | JSS styles for the `AJSwitch` component.                                        |
