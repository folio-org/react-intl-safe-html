# react-intl-safe-html
Sanitized HTML component

Usage:

```
import SafeHTMLMessage from 'react-intl-safe-html';
...
<SafeHTMLMessage id="test" />
```

Example translations/en.json:

```
{
  "test": "hello <b>world</b>",
}
```

By default, `react-intl` will escape HTML in strings to protect the user from dangerous HTML (`script` tags). The `SafeHTMLMessage` component sanitizes HTML strings for safe presentation.
