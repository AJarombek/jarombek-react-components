### Overview

Wrapper around the switch component which has two icons which label the two different switch states.

**Use cases:**

```javascript
import { AJSwitchIcon } from 'jarombek-react-components';

const CustomComponent = () => 
  <AJSwitchIcon
    offImageUrl="https://asset.jarombek.com/off.png"
    onImageUrl="https://asset.jarombek.com/on.png"
    onChange={f=>f}
    initialState={true}
    disabled={false}
  />
```

### Files

| Filename                   | Description                                                                     |
|----------------------------|---------------------------------------------------------------------------------|
| `AJSwitchIcon.js`          | The reusable `AJSwitchIcon` component.                                          |
| `index.js`                 | Index file which exports the `AJSwitchIcon` component.                          |
| `styles.js`                | JSS styles for the `AJSwitchIcon` component.                                    |
