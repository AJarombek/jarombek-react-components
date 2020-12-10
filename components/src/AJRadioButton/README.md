### Overview

Custom radio button component.  Simulates the behavior of `<input type="radio" />` except with custom styling.

**Use cases:**

```javascript
import { AJRadioButton } from 'jarombek-react-components';

const CustomComponent = () => 
  <>
    <AJRadioButton id="test1" name="test" onChange={() => {}} value="test1" label="Test 1" defaultChecked={false} />
    <AJRadioButton id="test2" name="test" onChange={() => {}} value="test2" label="Test 2" defaultChecked={false} />
  </>
```

### Files

| Filename                   | Description                                                                  |
|----------------------------|------------------------------------------------------------------------------|
| `AJRadioButton.js`         | The reusable `AJRadioButton` component.                                      |
| `index.js`                 | Index file which exports the `AJRadioButton` component.                      |
| `styles.js`                | JSS styles for the `AJRadioButton` component.                                |
