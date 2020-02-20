### Overview

Reusable component that displayed programming language code snippets with syntax highlighting 
provided by `highlight.js`.

**Use cases:**

```javascript
import { AJCodeSnippet } from 'jarombek-react-components';

const CustomComponent = () => 
  <AJCodeSnippet language="javascript">
    const j = 25;
  </AJCodeSnippet>
```

### Files

| Filename                   | Description                                                                           |
|----------------------------|---------------------------------------------------------------------------------------|
| `AJCodeSnippet.js`         | The reusable `AJCodeSnippet` component.                                               |
| `index.js`                 | Index file which exports the `AJCodeSnippet` component.                               |
| `styles.js`                | JSS styles for the `AJCodeSnippet` component.                                         |
