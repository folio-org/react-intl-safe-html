import React from 'react';
import { injectIntl } from 'react-intl';
import sanitizeHtml from 'sanitize-html';

class SafeHTMLMessage extends React.Component {
  render () {
    const {intl, id, values, tagName} = this.props;
    const msg = intl.formatHTMLMessage({id}, values);
    return React.createElement(tagName || 'span', {dangerouslySetInnerHTML:{ __html: sanitizeHtml(msg)}}, null);
  }
}
export default injectIntl(SafeHTMLMessage);
