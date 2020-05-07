# react-intl-safe-html

Wrapper component over react-intl's `FormattedMessage`. By default, `<FormattedMessage>` requires explicit information about how to render tags. For example:
```
<FormattedMessage id="test" values={{ b: (...chunks) => <strong>{chunks}</strong> }} />
```

This component provides some values "out of the box". They are:
- `<b>`
- `<i>`
- `<em>`
- `<strong>`
- `<span>`
- `<div>`


## Usage:

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

## Attributes and Styling

If you need to add attributes or styling to a given tag/element, it is recommended that you *do not* use this component and [instead use `FormattedMessage` directly with your own render function.](https://formatjs.io/docs/react-intl/components#rich-text-formatting)
